// Pages de bisection safe-area (preprod) — générées après build.mjs
import fs from 'fs';
const idx = fs.readFileSync('dist/index.html','utf8');
const imgs = [...new Set([...idx.matchAll(/src="(\/img\/[^"]+\.webp)"/g)].map(m=>m[1]))];
const css = fs.readFileSync('dist/index.html','utf8').match(/<link rel="stylesheet" href="\/(style|features)\.css[^"]*">/g).join('');
fs.mkdirSync('dist/test',{recursive:true}); fs.copyFileSync('src/test/lb.css','dist/test/lb.css');
const colors=['#e63946','#f4a261','#2a9d8f','#264653','#8d5bd6','#e9c46a'];
const content = imgs.slice(0,40).map((s,i)=>`<img loading="lazy" src="${s}" alt="" style="display:block;width:100%;aspect-ratio:1;object-fit:cover;border-radius:18px;margin:0 0 14px">`).join('') + colors.concat(colors).map(c=>`<div style="height:160px;background:${c};border-radius:18px;margin:0 0 14px"></div>`).join('');
const big = L => `<div style="font:800 96px/1 system-ui;text-align:center;padding:calc(env(safe-area-inset-top) + 8px) 0 8px;color:#111">${L}</div>`;
const LBHEAD = `<meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/><link rel="stylesheet" href="/test/lb.css"/><meta name="theme-color" content="#ffffff"/>`;
const OURMETA = `<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="robots" content="noindex"><meta name="theme-color" content="#ffffff">`;
const pageA = (L, head='', extra='') => `<!DOCTYPE html><html lang="fr"><head>${head||LBHEAD}<title>Test ${L}</title>${extra}</head><body class="min-h-dvh font-sans"><div class="grain-overlay" aria-hidden="true"></div><main style="max-width:520px;margin:0 auto;padding:0 16px 40px">${big(L)}<p style="text-align:center;font:14px system-ui;color:#555">Faites défiler : le contenu doit passer derrière l'île.</p>${content}</main></body></html>`;
fs.writeFileSync('dist/test/a.html', pageA('A'));
fs.writeFileSync('dist/test/b.html', pageA('B','', '<style>html,body{overscroll-behavior-y:none}</style>'));
fs.writeFileSync('dist/test/c.html', pageA('C', OURMETA + '<link rel="stylesheet" href="/test/lb.css"/>'));
fs.writeFileSync('dist/test/d.html', pageA('D','', css));
let e = idx.replace(/<script[^]*?<\/script>/g,'').replace(/<body([^>]*)>/, `<body$1><div style="position:relative;z-index:70;font:800 96px/1 system-ui;text-align:center;padding:calc(env(safe-area-inset-top) + 8px) 0 0;background:transparent">E</div>`);
fs.writeFileSync('dist/test/e.html', e);
console.log('tests ok', imgs.length);
// v8 — bisection JS (E = accueil sans JS, bon)
const scripts = [...idx.matchAll(/<script[^]*?<\/script>/g)].map(m => m[0]);
const keep = (L, f, extraHead = '') => { let i = 0; const out = idx.replace(/<script[^]*?<\/script>/g, s => f(s) ? s : '').replace('</head>', extraHead + '</head>')
  .replace(/<body([^>]*)>/, `<body$1><div style="position:relative;z-index:70;font:800 96px/1 system-ui;text-align:center;padding:calc(env(safe-area-inset-top) + 8px) 0 0">${L}</div>`); fs.writeFileSync(`dist/test/${L.toLowerCase()}.html`, out); };
const isInline = s => !/src=/.test(s);
keep('F', s => isInline(s) || /home\.js/.test(s));                       // E + home.js (rangée, tuiles)
keep('G', s => isInline(s) || /features\.js|footer\.js/.test(s));         // E + features.js + footer.js
keep('H', () => true, ''); // accueil complet, tuiles/will-change neutralisés
console.log('tests v8 ok', scripts.length);
// v10 — témoin h8 = ancienne H (v8) exacte : features.css et home.js de la v8, surcharge H v8
fs.mkdirSync('dist/test/h8',{recursive:true}); for (const f of ['features.css','home.js']) fs.copyFileSync('src/test/h8/'+f,'dist/test/h8/'+f);
{ const h = fs.readFileSync('dist/test/h.html','utf8').replace(/\/features\.css\?v=[^"]+/,'/test/h8/features.css?v=v8').replace(/\/home\.js\?v=[^"]+/,'/test/h8/home.js?v=v8')
  .replace('</head>','<style>.p-home .tiles>.tw{animation:none!important;transform:none!important;opacity:1!important;will-change:auto!important}.hbar{will-change:auto!important;transition:none!important}.p-home:not(.p-favs) .shell-card{overflow:visible!important}</style></head>')
  .replace('0 0">H</div>','0 0">H8</div>');
  fs.writeFileSync('dist/test/h8.html', h); }
// v11 — témoin v10 exact (HTML + CSS/JS de la v10 copiés dans /test/v10/)
fs.mkdirSync('dist/test/v10',{recursive:true});
for (const f of fs.readdirSync('src/test/v10')) if (f !== 'index.html') fs.copyFileSync('src/test/v10/'+f,'dist/test/v10/'+f);
fs.writeFileSync('dist/test/v10.html', fs.readFileSync('src/test/v10/index.html','utf8').replace(/"\/(style|footer|features)\.(css|js)\?v=([^"]+)"/g,'"/test/v10/$1.$2?v=$3"').replace(/"\/home\.js\?v=([^"]+)"/,'"/test/v10/home.js?v=$1"'));
// v13 — témoin v12 figé
fs.mkdirSync('dist/test/v12',{recursive:true});
for (const f of fs.readdirSync('src/test/v12')) if (f !== 'index.html') fs.copyFileSync('src/test/v12/'+f,'dist/test/v12/'+f);
fs.writeFileSync('dist/test/v12.html', fs.readFileSync('src/test/v12/index.html','utf8').replace(/"\/(style|footer|features|home)\.(css|js)\?v=([^"]+)"/g,'"/test/v12/$1.$2?v=$3"'));
// v14 — témoin v13 figé
fs.mkdirSync('dist/test/v13',{recursive:true});
for (const f of fs.readdirSync('src/test/v13')) if (f !== 'index.html') fs.copyFileSync('src/test/v13/'+f,'dist/test/v13/'+f);
fs.writeFileSync('dist/test/v13.html', fs.readFileSync('src/test/v13/index.html','utf8').replace(/"\/(style|footer|features|home)\.(css|js)\?v=([^"]+)"/g,'"/test/v13/$1.$2?v=$3"'));
// v15 — témoin v14 figé
fs.mkdirSync('dist/test/v14',{recursive:true});
for (const f of fs.readdirSync('src/test/v14')) if (f !== 'index.html') fs.copyFileSync('src/test/v14/'+f,'dist/test/v14/'+f);
fs.writeFileSync('dist/test/v14.html', fs.readFileSync('src/test/v14/index.html','utf8').replace(/"\/(style|footer|features|home)\.(css|js)\?v=([^"]+)"/g,'"/test/v14/$1.$2?v=$3"'));
// v16 — témoin v15 figé
fs.mkdirSync('dist/test/v15',{recursive:true});
for (const f of fs.readdirSync('src/test/v15')) if (f !== 'index.html') fs.copyFileSync('src/test/v15/'+f,'dist/test/v15/'+f);
fs.writeFileSync('dist/test/v15.html', fs.readFileSync('src/test/v15/index.html','utf8').replace(/"\/(style|footer|features|home)\.(css|js)\?v=([^"]+)"/g,'"/test/v15/$1.$2?v=$3"'));
// v17 — témoin v16 figé
fs.mkdirSync('dist/test/v16',{recursive:true});
for (const f of fs.readdirSync('src/test/v16')) if (f !== 'index.html') fs.copyFileSync('src/test/v16/'+f,'dist/test/v16/'+f);
fs.writeFileSync('dist/test/v16.html', fs.readFileSync('src/test/v16/index.html','utf8').replace(/"\/(style|footer|features|home)\.(css|js)\?v=([^"]+)"/g,'"/test/v16/$1.$2?v=$3"'));
// v18 — témoin v17 figé
fs.mkdirSync('dist/test/v17',{recursive:true});
for (const f of fs.readdirSync('src/test/v17')) if (f !== 'index.html') fs.copyFileSync('src/test/v17/'+f,'dist/test/v17/'+f);
fs.writeFileSync('dist/test/v17.html', fs.readFileSync('src/test/v17/index.html','utf8').replace(/"\/(style|footer|features|home)\.(css|js)\?v=([^"]+)"/g,'"/test/v17/$1.$2?v=$3"'));
// v19 — témoin v18 figé
fs.mkdirSync('dist/test/v18',{recursive:true});
for (const f of fs.readdirSync('src/test/v18')) if (f !== 'index.html') fs.copyFileSync('src/test/v18/'+f,'dist/test/v18/'+f);
fs.writeFileSync('dist/test/v18.html', fs.readFileSync('src/test/v18/index.html','utf8').replace(/"\/(style|footer|features|home)\.(css|js)\?v=([^"]+)"/g,'"/test/v18/$1.$2?v=$3"'));
// v20 — témoin v19 figé
fs.mkdirSync('dist/test/v19',{recursive:true});
for (const f of fs.readdirSync('src/test/v19')) if (f !== 'index.html') fs.copyFileSync('src/test/v19/'+f,'dist/test/v19/'+f);
fs.writeFileSync('dist/test/v19.html', fs.readFileSync('src/test/v19/index.html','utf8').replace(/"\/(style|footer|features|home)\.(css|js)\?v=([^"]+)"/g,'"/test/v19/$1.$2?v=$3"'));
// v21 — témoin v20 figé
fs.mkdirSync('dist/test/v20',{recursive:true});
for (const f of fs.readdirSync('src/test/v20')) if (f !== 'index.html') fs.copyFileSync('src/test/v20/'+f,'dist/test/v20/'+f);
fs.writeFileSync('dist/test/v20.html', fs.readFileSync('src/test/v20/index.html','utf8').replace(/"\/(style|footer|features|home)\.(css|js)\?v=([^"]+)"/g,'"/test/v20/$1.$2?v=$3"'));
