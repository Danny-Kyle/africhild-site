import {PageHead,Sec} from '@/components/ui'; import EnquiryForm from '@/components/EnquiryForm'; import {SITE} from '@/lib/content';
export const metadata={title:'Contact'};
export default function P(){return <><PageHead title="Contact us"/><Sec>
{SITE.email&&<p className="mb-2">Email: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>}
{SITE.whatsapp&&<p className="mb-4"><a className="underline" href={`https://wa.me/${SITE.whatsapp}`}>Message us on WhatsApp</a></p>}
<EnquiryForm/></Sec></>}
