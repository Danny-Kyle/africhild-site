import {PageHead,Sec} from '@/components/ui';
export const metadata={title:'Resources'};
export default function P(){return <><PageHead title="Resources" lead="Approved materials for schools and partners."/><Sec>
<p>No public resources have been approved yet.</p>
<p className="mt-4 text-base">Developer note: add the approved brochure to <code>public/resources/</code> and link it here. The current school proposal is marked confidential and must not be published.</p></Sec></>}
