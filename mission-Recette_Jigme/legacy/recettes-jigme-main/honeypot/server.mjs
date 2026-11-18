// Honeypot preprod — contenu factice, aucun vrai secret.
import http from 'node:http'; import net from 'node:net'; import tls from 'node:tls';
const TO = 'jigme@mail.grokbot.com', MX = 'inbound-smtp.us-east-1.amazonaws.com';
const FROM = 'honeypot@recettes-jigme-preprod.fly.dev';
const crcT = Array.from({length:256},(_,n)=>{let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;return c>>>0;});
const crc32 = b=>{let c=~0;for(const x of b)c=crcT[(c^x)&255]^(c>>>8);return (~c)>>>0;};
function zip(name, data){ const n=Buffer.from(name), d=Buffer.from(data), c=crc32(d);
  const l=Buffer.alloc(30); l.writeUInt32LE(0x04034b50,0); l.writeUInt16LE(10,4); l.writeUInt32LE(c,14); l.writeUInt32LE(d.length,18); l.writeUInt32LE(d.length,22); l.writeUInt16LE(n.length,26);
  const h=Buffer.alloc(46); h.writeUInt32LE(0x02014b50,0); h.writeUInt16LE(20,4); h.writeUInt16LE(10,6); h.writeUInt32LE(c,16); h.writeUInt32LE(d.length,20); h.writeUInt32LE(d.length,24); h.writeUInt16LE(n.length,28);
  const off=30+n.length+d.length, e=Buffer.alloc(22); e.writeUInt32LE(0x06054b50,0); e.writeUInt16LE(1,8); e.writeUInt16LE(1,10); e.writeUInt32LE(46+n.length,12); e.writeUInt32LE(off,16);
  return Buffer.concat([l,n,d,h,n,e]); }
const D = {
 '/flag.txt': ['2bb1fdad6990f7bf','text/plain', ()=>`FLAG{ce_n_est_qu_une_recette_de_crepes}\nref: HP-2bb1fdad6990f7bf\n`],
 '/.env': ['c57bcc7f75f32555','text/plain', ()=>`# fichier d'exemple\nAPP_ENV=demo\nAPP_NAME=recettes\nDB_HOST=localhost\nDB_USER=demo\nDB_PASSWORD=pas-un-vrai-mot-de-passe\nAPI_KEY=HP-c57bcc7f75f32555\n`],
 '/admin-backup.zip': ['7cdf11feb2ec4c91','application/zip', ()=>zip('LISEZMOI.txt',`Sauvegarde factice. Rien a voir ici, a part une recette de quiche.\nref: HP-7cdf11feb2ec4c91\n`)],
 '/.git/config': ['69fef0a540e18e9a','text/plain', ()=>`[core]\n\trepositoryformatversion = 0\n\tbare = false\n[remote "origin"]\n\turl = https://example.invalid/recettes/HP-69fef0a540e18e9a.git\n`],
 '/wp-login.php': ['9f020ef9edf2b8b1','text/html; charset=utf-8', ()=>`<!doctype html><title>Connexion</title><!-- HP-9f020ef9edf2b8b1 --><form method=post><input name=log><input type=password name=pwd><button>Se connecter</button></form>\n`],
};
const seen = new Map(); // ip -> last alert ms
const CAP = 20, WIN = 3600e3; let sent = []; // plafond global : 20 mails par heure maximum, toutes IP confondues
function smtp(subject, body){ return new Promise((resolve)=>{
  let sock=net.connect(25,MX), buf='', waiter=null, done=false;
  const fin=r=>{ if(done)return; done=true; try{sock.destroy()}catch{}; resolve(r); };
  const onData=d=>{ buf+=d; const ls=buf.split('\r\n'); const last=ls[ls.length-2]; if(!last||last[3]==='-')return; const full=buf; buf=''; const w=waiter; waiter=null; w&&w(full); };
  const bind=s=>{ s.setTimeout(20000,()=>fin('timeout')); s.on('error',e=>fin('err '+e.code)); s.on('data',onData); };
  const read=()=>new Promise(r=>waiter=r);
  const cmd=async(line,ok=/^[23]/)=>{ if(line!==null) sock.write(line); const r=await read(); if(!ok.test(r)) throw new Error(r.trim()); return r; };
  bind(sock);
  const msg=`From: Honeypot preprod <${FROM}>\r\nTo: ${TO}\r\nSubject: =?UTF-8?B?${Buffer.from(subject).toString('base64')}?=\r\nDate: ${new Date().toUTCString()}\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: base64\r\n\r\n${Buffer.from(body).toString('base64').replace(/.{76}/g,'$&\r\n')}\r\n.\r\n`;
  (async()=>{ try{
    await cmd(null);
    const e=await cmd('EHLO recettes-jigme-preprod.fly.dev\r\n');
    if(/STARTTLS/i.test(e)){ await cmd('STARTTLS\r\n'); sock.removeAllListeners('data');
      sock=await new Promise((r,j)=>{const t=tls.connect({socket:sock,servername:MX},()=>r(t)); t.on('error',j);}); bind(sock);
      await cmd('EHLO recettes-jigme-preprod.fly.dev\r\n'); }
    await cmd(`MAIL FROM:<${FROM}>\r\n`); await cmd(`RCPT TO:<${TO}>\r\n`); await cmd('DATA\r\n');
    const r=await cmd(msg); sock.write('QUIT\r\n'); fin('ok '+r.trim());
  }catch(e){ fin('fail '+e.message); } })();
});}
http.createServer((req,res)=>{
  const path=(req.headers['x-hp-path']||req.url).split('?')[0]; const d=D[path];
  if(!d){res.writeHead(404);return res.end();}
  const [mk,ct,gen]=d;
  const ip=req.headers['fly-client-ip']||(req.headers['x-forwarded-for']||'').split(',')[0].trim()||req.socket.remoteAddress;
  const ua=String(req.headers['user-agent']||'-').slice(0,200).replace(/[\r\n]+/g,' '); // tronqué
  const P=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'Europe/Paris',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23',timeZoneName:'short'}).formatToParts(new Date()).map(p=>[p.type,p.value]));
  const when=`${P.day}/${P.month}/${P.year} ${P.hour}:${P.minute}:${P.second} (Europe/Paris, ${P.timeZoneName})`;
  const key=ip.includes(':')?ip.split(':').slice(0,4).join(':')+'::/64':ip;
  const now=Date.now(), last=seen.get(key);
  sent = sent.filter(t=>now-t<WIN);
  if((!last||now-last>3600e3) && sent.length<CAP){ seen.set(key,now); sent.push(now);
    if(seen.size>5000) for(const [k,v] of seen) if(now-v>3600e3) seen.delete(k);
    smtp(`[honeypot preprod] ${path} depuis ${ip}`,`Accès à un leurre sur recettes-jigme-preprod.fly.dev\n\nIP: ${ip}\nHeure: ${when}\nChemin: ${req.url}\nMéthode: ${req.method}\nMarqueur: HP-${mk}\nUser-Agent: ${ua}\nX-Forwarded-For: ${req.headers['x-forwarded-for']||'-'}\n\n(1 alerte max par IP et par heure)\n`).then(r=>console.log('hp alert',path,r));
  }
  const body=gen(); res.writeHead(200,{'Content-Type':ct,'Cache-Control':'no-store','X-Robots-Tag':'noindex'}); res.end(req.method==='HEAD'?undefined:body);
}).listen(9000,'127.0.0.1');
