import './globals.css'; import Link from 'next/link'; import type {Metadata} from 'next';
import {SITE,NAV} from '@/lib/content'; import {Wrap} from '@/components/ui';
export const metadata:Metadata={title:{default:`${SITE.short}: ${SITE.tagline}`,template:`%s | ${SITE.short}`},description:'School-based programmes that help children build self-awareness, explore careers, develop entrepreneurial thinking and grow in character.'};
export default function Root({children}:{children:React.ReactNode}){
 return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Source+Sans+3:wght@400;600&display=swap"/></head>
 <body><a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
 <header className="bg-forest text-chalk"><Wrap className="flex flex-wrap items-center justify-between gap-3 py-4">
  <Link href="/" className="font-display text-2xl font-extrabold">AfriChild</Link>
  <nav aria-label="Main"><ul className="flex flex-wrap gap-x-5 gap-y-1 text-base">{NAV.map(([l,h])=><li key={h}><Link href={h} className="hover:underline">{l}</Link></li>)}</ul></nav></Wrap></header>
 <main id="main">{children}</main>
 <footer className="bg-ink text-chalk py-10 mt-8"><Wrap className="grid gap-6 md:grid-cols-3 text-base">
  <div><p className="font-display font-bold">{SITE.name}</p><p>{SITE.tagline}</p></div>
  <div><p className="font-display font-bold">Contact</p>{SITE.email?<a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>:<Link className="underline" href="/contact/">Contact form</Link>}{SITE.whatsapp&&<p><a className="underline" href={`https://wa.me/${SITE.whatsapp}`}>WhatsApp</a></p>}</div>
  <div><p className="font-display font-bold">Policies</p><p><Link className="underline" href="/privacy/">Privacy</Link></p><p><Link className="underline" href="/safeguarding/">Safeguarding</Link></p></div>
 </Wrap></footer></body></html>;}
