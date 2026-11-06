export const SITE = {
  name: 'The AfriChild Education and Development Initiative', short: 'AfriChild',
  tagline: 'Equipping Children. Empowering Schools. Shaping Futures.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '',
};
export const NAV = [['About','/about/'],['Programmes','/programmes/'],['For Schools','/for-schools/'],['Get Involved','/get-involved/'],['Updates','/updates/'],['Resources','/resources/'],['Contact','/contact/']];
export const PILLARS = [
  {t:'Career Orientation & Future of Work',d:'Children explore a wide range of career paths through interactive sessions, strengths profiling and real-world case studies, building curiosity about what is possible and which skills will matter.',
   act:['Interactive career sessions','Personality-and-strengths profiling','Real-world case studies'],out:['Wider awareness of career paths','Early understanding of their own strengths and interests']},
  {t:'Entrepreneurship Development',d:'Pupils learn to think like problem-solvers, spot needs around them and understand the basics of value creation, teamwork and initiative, with attention to the emerging digital economy.',
   act:['Problem-spotting exercises','Team-based value-creation activities'],out:['Problem-solving mindset','Basic understanding of value creation, teamwork and initiative']},
  {t:'Sexual Purity',d:'Age-appropriate, values-centred sessions on identity, dignity, boundaries and healthy relationships, and the case for sexual purity, grounded in character and self-respect.',
   act:['Facilitated, age-banded discussions','Workbook reflection activity'],out:['Clarity on identity, dignity and boundaries','A values framework for handling peer and social-media messages']},
  {t:'Mental Wellness & Self Awareness',d:'Teachable moments on managing emotions, developing resilience and making positive choices, so children can thrive in school and in life.',
   act:['Facilitated emotion-management sessions','Confidence-building group activities'],out:['Greater confidence and resilience','Better habits for making positive choices']},
];
export const VALUES = [['Growth','Nurturing great minds and shaping the future'],['Resilience','Mistakes help us learn'],['Excellence','Be your best every day'],['Accountability','Think right, act right'],['Tenacity','I can, I will, I won’t quit']];
export const STEPS = [['Exploratory meeting','A 30-minute conversation with school leadership about fit, needs and timeline.'],['Partnership agreement','A simple agreement covering responsibilities, schedule and consent terms.'],['Parent communication','The school informs parents; AfriChild provides a template letter.'],['Programme launch','AfriChild delivers a launch session at the school.']];
// Add real posts here. No posts = honest empty state. Never add invented stories.
export const UPDATES: {title:string;date:string;body:string}[] = [];
