// Images produit des recos matériel (liens Amazon de Cuisine/Materiel + overrides.json) → src/img/eq/<id-reco>.webp
// Cache : un fichier déjà présent n'est jamais re-téléchargé. Échec → pas d'image (le bouton garde son fond générique).
const fs=require('fs'),sharp=require('sharp'),y=require('js-yaml');
const slug=s=>String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
const LOG='src/img/eq/recos.json'; const log=fs.existsSync(LOG)?JSON.parse(fs.readFileSync(LOG)):{};
const L=new Map();
for(const f of fs.readdirSync('materiel').filter(f=>f.endsWith('.md'))){const m=y.load(fs.readFileSync('materiel/'+f,'utf8').match(/---\n([\s\S]*?)\n---/)[1]);for(const r of m.recos||[])L.set(slug(r.title),r.url)}
const o=JSON.parse(fs.readFileSync('overrides.json'));for(const v of Object.values(o))for(const e of v.equipment||[])for(const r of e.recos||[])if(!r.image)L.set(slug(r.title),r.url);
const todo=[...L].filter(([id])=>!fs.existsSync(`src/img/eq/${id}.webp`));
(async()=>{
 if(!todo.length){console.log('recos img : cache complet ('+L.size+')');return}
 let chromium;try{({chromium}=require('playwright'))}catch(e){console.log('recos img : playwright absent, ignoré');return}
 const b=await chromium.launch();const p=await (await b.newContext({locale:'fr-FR',userAgent:UA})).newPage();
 for(const [id,url] of todo){try{
  let u=url,asin=null;for(let i=0;i<8&&!asin;i++){const r=await fetch(u,{headers:{'User-Agent':'Mozilla/5.0'},redirect:'manual'});const loc=r.headers.get('location');
   asin=((loc||u).match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})/)||[])[1];if(!loc)break;u=new URL(loc,u).href}
  if(!asin) throw new Error('ASIN introuvable');
  await p.goto(`https://www.amazon.fr/dp/${asin}`,{waitUntil:'domcontentloaded',timeout:45000});
  const src=await p.evaluate(()=>{const i=document.querySelector('#landingImage,#imgBlkFront,#main-image');return i&&(i.getAttribute('data-old-hires')||i.src)||document.querySelector('meta[property="og:image"]')?.content||null});
  if(!src||!/^https:/.test(src)) throw new Error('image principale introuvable');
  const buf=Buffer.from(await (await fetch(src,{headers:{'User-Agent':UA}})).arrayBuffer());
  await sharp(buf).resize(800,800,{fit:'inside',withoutEnlargement:true}).flatten({background:'#ffffff'}).webp({quality:75}).toFile(`src/img/eq/${id}.webp`);
  log[id]={url,asin,image:src};console.log('OK',id,asin);
 }catch(e){console.log('ÉCHEC',id,e.message);log[id]={url,error:e.message}}
 await new Promise(r=>setTimeout(r,1500))}
 await b.close();fs.writeFileSync(LOG,JSON.stringify(log,null,1));
})().catch(e=>console.log('recos img : erreur',e.message));
