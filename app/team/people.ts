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
      "Corporate advisory",
      "Technology",
      "Data protection",
      "Commercial transactions"
    ],
    "biography": [],
    "education": [],
    "experience": [],
    "memberships": []
  },
  {
    "name": "Ileriolwa Aina",
    "role": "Partner",
    "focus": "Real estate, corporate services, regulatory advisory and dispute-sensitive transactions.",
    "image": "/team/ileri.png",
    "email": "ileri@oakmountlp.com",
    "slug": "ileriolwa-aina",
    "areas": [
      "Real estate",
      "Corporate services",
      "Regulatory advisory",
      "Dispute-sensitive transactions"
    ],
    "biography": [],
    "education": [],
    "experience": [],
    "memberships": []
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
      "Regulatory advisory",
      "Regulatory compliance"
    ],
    "biography": [],
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
