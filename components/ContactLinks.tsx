import {SITE} from '@/lib/content';
const enc=(s:string)=>encodeURIComponent(s.replace(/\n/g,'\r\n'));
export default function ContactLinks({school=false}:{school?:boolean}){
  const to=(school&&SITE.schoolsEmail)||SITE.email;
  const subject=school?'School partnership enquiry':'Enquiry from the AfriChild website';
  const body=school?'School name:\nYour name and role:\nGrades or age groups of interest:\nPreferred time for a 30-minute call:\n\nMessage:\n':'Your name:\n\nMessage:\n';
  const wa=SITE.whatsapp?`https://wa.me/${SITE.whatsapp}?text=${enc(school?'Hello AfriChild, I would like to ask about a school partnership.':'Hello AfriChild, I have a question.')}`:'';
  if(!to&&!wa) return <p role="alert" className="rounded border-l-4 border-red-600 bg-red-50 p-3">Contact details are not set yet. Add them in lib/content.ts.</p>;
  const btn='inline-block rounded-full px-6 py-3 font-display font-semibold';
  return <div className="grid gap-4 max-w-xl">
    {to&&<div><a className={`${btn} bg-sun text-ink hover:brightness-95`} href={`mailto:${to}?subject=${enc(subject)}&body=${enc(body)}`}>Email us</a>
      <p className="mt-2 text-base">Or write to <a className="underline" href={`mailto:${to}`}>{to}</a> if the button does not open your email app.</p></div>}
    {wa&&<div><a className={`${btn} border-2 border-forest text-forest hover:bg-mist`} href={wa}>Message us on WhatsApp</a>
      <p className="mt-2 text-base">WhatsApp number: +{SITE.whatsapp}</p></div>}
    <p className="text-sm">Please do not include children’s names or personal details in your message. See our <a className="underline" href="/privacy/">privacy page</a>.</p>
  </div>;}
