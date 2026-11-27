import Link from 'next/link';
export const Wrap=({children,className=''}:{children:React.ReactNode;className?:string})=><div className={`mx-auto max-w-5xl px-5 ${className}`}>{children}</div>;
const V={primary:'bg-sun text-ink hover:brightness-95',outline:'border-2 border-forest text-forest hover:bg-mist',onDark:'border-2 border-chalk text-chalk hover:bg-chalk hover:text-forest'};
export const Btn=({href,children,variant='primary'}:{href:string;children:React.ReactNode;variant?:keyof typeof V})=>
 <Link href={href} className={`inline-block rounded-full px-6 py-3 font-display font-semibold ${V[variant]}`}>{children}</Link>;
export const PageHead=({title,lead}:{title:string;lead?:string})=>
 <header className="bg-mist py-14"><Wrap><h1 className="text-4xl md:text-5xl font-bold">{title}</h1>{lead&&<p className="mt-4 max-w-2xl">{lead}</p>}</Wrap></header>;
export const Sec=({children,tint}:{children:React.ReactNode;tint?:boolean})=><section className={`py-12 ${tint?'bg-mist':''}`}><Wrap>{children}</Wrap></section>;
export const Draft=({children}:{children:React.ReactNode})=><p className="mb-6 rounded border-l-4 border-sun bg-yellow-50 p-3 text-base">DRAFT for approval: {children}</p>;
