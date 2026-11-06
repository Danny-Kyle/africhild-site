'use client';
import { useState } from 'react';
const KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';
export default function EnquiryForm({school=false}:{school?:boolean}){
  const [s,setS]=useState<'idle'|'sending'|'ok'|'err'>('idle');
  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault(); const f=e.currentTarget; const d=new FormData(f);
    if(d.get('botcheck')) return; // honeypot
    if(!KEY){setS('err');return;}
    d.append('access_key',KEY); d.append('subject',school?'School partnership enquiry':'Website enquiry');
    setS('sending');
    try{const r=await fetch('https://api.web3forms.com/submit',{method:'POST',body:d}); const j=await r.json();
      if(j.success){setS('ok');f.reset();}else setS('err');}catch{setS('err');}
  }
  const inp='mt-1 w-full rounded border border-forest/40 bg-white p-3';
  if(s==='ok') return <p role="status" className="rounded bg-mist p-4">Thank you. We have received your message and will reply by email.</p>;
  return <form onSubmit={submit} className="grid gap-4 max-w-xl">
    <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off"/>
    <label>Your name<input required name="name" className={inp}/></label>
    <label>Email<input required type="email" name="email" className={inp}/></label>
    {school&&<label>School name<input required name="school" className={inp}/></label>}
    {school&&<label>Your role<input name="role" className={inp}/></label>}
    <label>Message<textarea required name="message" rows={5} className={inp}/></label>
    <p className="text-sm">We use these details only to reply to you. Please do not include children’s names or personal details. See our <a className="underline" href="/privacy/">privacy page</a>.</p>
    <button disabled={s==='sending'} className="rounded-full bg-sun px-6 py-3 font-display font-semibold disabled:opacity-60">{s==='sending'?'Sending…':'Send message'}</button>
    {s==='err'&&<p role="alert" className="text-red-700">The message was not sent. Check the fields and try again, or email us directly{process.env.NEXT_PUBLIC_CONTACT_EMAIL?` at ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`:''}.</p>}
  </form>;
}
