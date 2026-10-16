export type Lawyer = {
  slug: string; name: string; role: string; focus: string; image: string; email: string;
  areas: string[]; biography: string[]; education: string[]; experience: string[]; memberships: string[];
};
// All existing names, roles and email addresses are retained from your supplied code.
// Add approved biography paragraphs and credentials to the empty arrays below.
export const people: Lawyer[] = [
  {
    "name": "Ifeoluwa Duro-Bello",
    "role": "Partner",
    "focus": "Corporate advisory, technology, data protection and commercial transactions.",
    "image": "/team/ife.png",
    "email": "ife@oakmountlp.com",
    "slug": "ifeoluwa-duro-bello",
    "areas": [
      "Corporate Advisory",
      "Business Advisory",
      "Technology",
      "Data Protection",
      "Commercial Transactions"
    ],
    "biography": ["Ifeoluwa Duro-Bello is a Partner at Oakmount Legal Practitioners, with over a decade of experience advising businesses on their establishment, structuring, operations and growth. His practice spans corporate and commercial advisory, technology, data protection and regulatory compliance, with a focus on translating legal requirements into practical business decisions.",

  "He advises founders, companies and business owners on investment arrangements, corporate governance, commercial contracts and the legal frameworks supporting their products and services. His work includes structuring equity investments and shareholder arrangements, documenting commercial partnerships, and advising on content licensing and digital platform operations. He also supports engineering businesses on project contracts and the protection of confidential information and intellectual property.",

  "Ifeoluwa recently advised an engineering firm on a FIDIC-based contract in connection with a transaction valued at over €6 million. This forms part of his broader work helping clients assess contractual obligations, allocate commercial risk and establish clear terms for their business relationships.",

  "A certified Data Protection Officer, Ifeoluwa manages data protection compliance for several organisations. His work encompasses privacy documentation, data processing arrangements, compliance frameworks and ongoing advisory support, helping clients integrate data protection requirements into their day-to-day operations.",

  "He is also a sponsored individual registered with Nigeria’s Securities and Exchange Commission in connection with a licensed digital sub-broker.",

  "His approach combines careful legal analysis with an understanding of the commercial objective behind each instruction, placing particular emphasis on clear documentation, workable structures and advice that clients can act on."
],
    "education": ["LL.B"],
    "experience": [ ],
    "memberships": ["Nigerian Bar Associatiom", "Institute of Information Management"]
  },
  {
    "name": "Ileriolwa Aina",
    "role": "Partner",
    "focus": "Real estate, corporate services, regulatory advisory and dispute-sensitive transactions.",
    "image": "/team/ileri.png",
    "email": "ileri@oakmountlp.com",
    "slug": "ileriolwa-aina",
    "areas": [
      "Debt Recovery",
      "Mergers and Acquisitions",
      "Corporate services",
      "Financial Transactions",
      "Dispute-sensitive transactions"
    ],
    biography: [
      "A principle that has shaped Ileri Aina’s approach to law is: the best legal advice does more than identify risk. It understands why the deal matters in the first place.",
    
      "Ileri is technically rigorous, commercially alert and grounded in the realities of how businesses make decisions, deploy capital and manage exposure. A Nigerian-qualified Barrister with experience spanning banking, telecommunications, consumer goods and financial services, Ileri has built his career around complex contracts, negotiations, disputes and the moments when commercial ambition meets legal consequence.",
    
      "His practice sits principally across corporate and commercial law, property, mergers and acquisitions, debt recovery and insolvency, with particular strength in commercial contracting, financial transactions, dispute management and regulatory risk.",
    
      "At Access Bank, he worked on commercial, financing and settlement agreements valued at more than US$30 million, while advising on contentious matters, recovery strategy, AML and counter-terrorist financing issues and complex legal proceedings. Earlier, at Unilever, his work brought him close to the legal architecture behind major businesses: intellectual property, contractual risk, investigations, marketing and corporate controls.",
    
      "Ileri later moved deeper into the commercial life of contracts at IHS Towers, managing significant contractual portfolios exceeding US$50 million and working across procurement, supplier negotiations, due diligence, performance, claims and risk.",
    
      "His work included supporting the contractual and commercial framework for the importation and supply of automotive gas oil involving multinational counterparties, including BP, where pricing, supply obligations, performance exposure and operational continuity had to be considered as parts of the same transaction.",
    
      "That experience sharpened a perspective that now informs his work on acquisitions, property and insolvency matters: transactions cannot be understood in isolation from financing, contractual obligations, operational dependencies and the possibility of distress. His subsequent UK experience has added another dimension—first in commercial contract management and, more recently, within regulated financial services and operational leadership.",
    
      "Called to the Nigerian Bar after completing the Nigerian Law School in 2016, following his LL.B at Babcock University, Ileri is also a member of the Chartered Institute of Bankers of Nigeria.",
    
      "His professional identity sits deliberately between law and commerce. He reads contracts closely, but he reads businesses too. The objective is not simply to tell a client what the law says. It is to help them understand what to do next."
    ],
    "education": ["LL.B"],
    "experience": [],
    "memberships": ["Nigerian Bar Association", "Chartered Institute of Bankers of Nigeria"]
  },
  {
    "name": "Damilola Olaleye",
    "role": "Of Counsel - Corporate, Commercial and Compliance",
    "focus": "Corporate services, regulatory advisory and regulatory compliance.",
    "image": "/team/dami.png",
    "email": "dami@oakmountlp.com",
    "slug": "damilola-olaleye",
    "areas": [
      "Corporate services",
      "Technology, Software licensing and Saas agreements",
      "Strategic Legal and Business Advisory",
      "Legal Due Diligence and Transactional Support",
      "Employment and Workplace Advisory"
    ],
    biography: [
      "Damilola Olaleye is a corporate and commercial lawyer and strategic legal adviser with over a decade of post-qualification experience delivering practical, commercially focused legal solutions to businesses, entrepreneurs and organisations.",
    
      "Her practice encompasses corporate and commercial advisory, commercial contract structuring, drafting and negotiation, technology law, regulatory compliance, corporate governance and risk management. She advises clients on navigating complex legal and commercial issues, structuring business relationships and aligning legal strategies with wider organisational objectives.",
    
      "Working alongside business leaders, senior management teams and entrepreneurs, Damilola brings a multidisciplinary perspective to legal practice, combining technical legal knowledge with commercial judgement and a practical understanding of business operations.",
    
      "Her advisory work includes commercial transactions, technology and software-related agreements, regulatory obligations, organisational governance, employment matters and the development of legal frameworks and internal policies that support effective operations and sustainable growth.",
    
      "Guided by her philosophy, “Be Proactive, Not Reactive,” Damilola believes effective legal advice should anticipate challenges rather than simply respond to them. She focuses on identifying risk early, protecting clients’ interests and providing forward-looking solutions that enable confident commercial decisions."
    ],
    "education": [],
    "experience": [],
    "memberships": []
  },
  {
    "name": "Ayomikun Familua",
    "role": "Managing Associate",
    "focus": "Litigation, Family Law, Company secretarial support, contract review and compliance documentation.",
    "image": "/team/piri.jpg",
    "email": "ayomikun@oakmount.com",
    "slug": "ayomikun-familua",
    "areas": [
      "Litigation",
      "Family law",
      "Company secretarial support",
      "Contract review",
      "Compliance documentation"
    ],
    "biography": [],
    "education": [],
    "experience": [],
    "memberships": []
  },
  {
    "name": "Toluwanimi Okunade",
    "role": "Senior Associate",
    "focus": "Succession Law, Company secretarial support, contract review and compliance documentation.",
    "image": "/team/tolu.png",
    "email": "toluwanimi@oakmount.com",
    "slug": "toluwanimi-okunade",
    "areas": [
      "Succession law",
      "Company secretarial support",
      "Contract review",
      "Compliance documentation"
    ],
    "biography": [],
    "education": [],
    "experience": [],
    "memberships": []
  }
];
