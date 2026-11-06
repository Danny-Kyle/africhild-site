import {PageHead,Sec,Btn} from '@/components/ui'; import {PILLARS} from '@/lib/content';
export const metadata={title:'Programmes'};
export default function P(){return <><PageHead title="Programmes" lead="Four pillars, delivered through structured, facilitated sessions, each followed by a workbook activity. Programmes cover Grade 1 to Grade 10, with age-banding agreed with each school."/>
{PILLARS.map((p,i)=><Sec key={p.t} tint={i%2===0}><h2 className="text-2xl font-bold">{p.t}</h2><p className="mt-2 max-w-3xl">{p.d}</p>
<div className="mt-4 grid gap-6 md:grid-cols-2 text-base"><div><h3 className="font-bold">Sample activities</h3><ul className="list-disc pl-5">{p.act.map(a=><li key={a}>{a}</li>)}</ul></div><div><h3 className="font-bold">Expected learning outcomes</h3><ul className="list-disc pl-5">{p.out.map(a=><li key={a}>{a}</li>)}</ul></div></div></Sec>)}
<Sec><Btn href="/for-schools/">Bring AfriChild to your school</Btn></Sec></>}
