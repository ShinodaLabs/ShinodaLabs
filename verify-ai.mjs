import { chromium } from '/home/rodrigo/.npm/_npx/420ff84f11983ee5/node_modules/playwright/index.mjs';
import { readFile } from 'node:fs/promises';
const data=JSON.parse(await readFile('src/content/site.json','utf8'));
const browser=await chromium.launch({args:['--enable-unsafe-swiftshader']});
const page=await browser.newPage({javaScriptEnabled:false});
await page.goto('http://localhost:8080/');
if(!await page.locator('.sl-site.sl-dark').count())throw Error('SSR is not dark');
for(const s of data.services)if(!await page.locator('body').textContent().then(t=>t.includes(s.description)))throw Error('Missing SSR service '+s.name);
const graph=JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
if(graph['@graph'].find(x=>x['@type']==='FAQPage').mainEntity.length!==data.faq.length)throw Error('FAQ schema mismatch');
if(await page.locator('.sl-faq details').count()!==data.faq.length)throw Error('Missing visible FAQ');
for(const path of ['/llms.txt','/index.md','/robots.txt','/sitemap.xml']){const r=await page.request.get('http://localhost:8080'+path);if(r.status()!==200)throw Error(path+' failed');}
await page.goto('http://localhost:8080/nonexistent-check');if(await page.locator('script[type="application/ld+json"]').count())throw Error('Homepage schema on 404');
const live=await browser.newPage();const errors=[];live.on('pageerror',e=>{errors.push(e.message);console.log(e.message)});
await live.goto('http://localhost:8080/',{waitUntil:'networkidle'});
if(!await live.locator('.sl-dark').count())throw Error('Default theme not dark');
await live.getByRole('button',{name:'Ativar tema claro'}).click();await live.waitForTimeout(300);console.log('theme',await live.evaluate(()=>localStorage.getItem('shinoda-theme')));await live.reload({waitUntil:'networkidle'});await live.waitForTimeout(500);
console.log('after',await live.evaluate(()=>localStorage.getItem('shinoda-theme')),await live.locator('.sl-site').getAttribute('class')); await live.waitForFunction(()=>!document.querySelector('.sl-dark'),{},{timeout:10000});
for(let i=0;i<8;i++){await live.locator('#service-tab-'+i).click();await live.waitForTimeout(80);if(await live.getByRole('tabpanel').count()!==1)throw Error('Multiple panels visible');if(!await live.locator('#service-panel-'+i).isVisible())throw Error('Wrong panel');}
await live.locator('.sl-faq summary').first().click();if(!await live.locator('.sl-faq details').first().getAttribute('open').then(v=>v!==null))throw Error('FAQ not expanding');
if(errors.length)throw Error(errors.join('\n'));
console.log('PASS: SSR without JavaScript includes all services and FAQ; valid JSON-LD only on homepage; discovery files 200; default dark and saved light; eight tabs and FAQ work.');
await browser.close();


