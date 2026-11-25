import { PageHead, Sec } from "@/components/ui";
export const metadata = { title: "Resources" };

const RESOURCES=[
  {title:'AfriChild School Partnership Proposal',file:'/resources/AfriChild-School-Partnership-Proposal-1.pdf',note:'PDF'},
];

export default function P(){return <><PageHead title="Resources" lead="Approved materials for schools and partners."/>
<Sec><ul className="grid gap-3">{RESOURCES.map(r=>
  <li key={r.file}><a className="font-display text-xl font-bold text-forest underline" href={r.file} target="_blank" rel="noopener">{r.title}</a> <span className="text-base">({r.note})</span></li>)}
</ul></Sec></>}
