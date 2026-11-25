// Run after `next build`: node scripts/check-launch.mjs. Exits 1 if the export is not launch-ready.
import {readdirSync,readFileSync,statSync} from 'node:fs'; import {join} from 'node:path';
const walk=d=>readdirSync(d).flatMap(f=>{const p=join(d,f);return statSync(p).isDirectory()?walk(p):p.endsWith('.html')?[p]:[]});
const files=walk('out'); const errs=[];
const bad=[['DRAFT for approval','unapproved draft banner'],['[approved reporting contact]','safeguarding placeholder'],['[Add registration','organisation info placeholder'],['api.web3forms','third-party form'],['fonts.googleapis','third-party fonts']];
for(const f of files){const h=readFileSync(f,'utf8');for(const [k,m] of bad)if(h.includes(k))errs.push(`${f}: ${m}`);}
const c=readFileSync('out/contact/index.html','utf8');
if(!/href="mailto:[^"?]+@[^"?]+/.test(c))errs.push('contact: no email address configured');
const w=c.match(/wa\.me\/(\d+)/); if(w&&!/^\d{10,15}$/.test(w[1]))errs.push('contact: WhatsApp number must be 10-15 digits, international format');
if(!w)errs.push('contact: no WhatsApp number (ignore if intentional)');
console.log(errs.length?errs.map(e=>'FAIL '+e).join('\n'):'OK: launch checks passed');process.exit(errs.some(e=>!e.includes('ignore if intentional'))?1:0);
