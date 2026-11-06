import {PageHead,Sec} from '@/components/ui'; import {UPDATES} from '@/lib/content';
export const metadata={title:'Updates'};
export default function P(){return <><PageHead title="Updates" lead="News and articles from the programme."/><Sec>{UPDATES.length===0?<p>No updates yet. We will post news here as the first school programmes begin.</p>:UPDATES.map(u=><article key={u.title} className="mb-8"><h2 className="text-2xl font-bold">{u.title}</h2><time className="text-base">{u.date}</time><p className="mt-2 max-w-3xl">{u.body}</p></article>)}</Sec></>}
