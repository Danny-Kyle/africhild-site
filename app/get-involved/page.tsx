import {PageHead,Sec,Btn} from '@/components/ui';
export const metadata={title:'Get Involved'};
export default function P(){return <><PageHead title="Get Involved" lead="Help us bring the programme to more schools."/>
<Sec><div className="grid gap-8 md:grid-cols-3">{[['Sponsor a school programme','Support delivery of sessions and workbooks in a partner school.'],['Volunteer','Share your time and skills with our facilitation team.'],['Professional partnership','Counselling, therapy, education and corporate partners can join our referral and support network.']].map(([t,d])=><div key={t}><h2 className="text-xl font-bold">{t}</h2><p className="mt-2 text-base">{d}</p></div>)}</div>
<p className="mt-8 max-w-3xl text-base">Online donations are not available yet. We will add them once the organisation’s payment arrangements are approved.</p><div className="mt-6"><Btn href="/contact/">Tell us how you would like to help</Btn></div></Sec></>}
