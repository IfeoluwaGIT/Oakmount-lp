import Image from "next/image";
import Link from "next/link";
import { people, type Lawyer } from "./people";

export default function LawyerProfile({ person }: { person: Lawyer }) {
  const next = people[(people.findIndex((item) => item.slug === person.slug) + 1) % people.length];
  const sections = [
    { id: "experience", title: "Selected experience", items: person.experience },
    { id: "education", title: "Education & qualifications", items: person.education },
    { id: "memberships", title: "Professional memberships", items: person.memberships },
  ].filter((section) => section.items.length > 0);
  return <>
    <section className="olpProfileHero">
      <Link className="olpBackLink" href="/team">← All our people</Link>
      <div className="olpProfileHeroGrid">
        <div className="olpProfileHeading"><p className="olpEyebrow">{person.role}</p><h1>{person.name}</h1>
          <p className="olpProfileSummary">{person.focus}</p>
          <a className="olpProfileEmail" href={`mailto:${person.email}`}>Email {person.name.split(" ")[0]} <span aria-hidden="true">↗</span></a>
          <span className="olpEmailAddress">{person.email}</span>
        </div>
        <div className="olpProfilePortrait"><Image src={person.image} alt={person.name} fill sizes="(max-width: 760px) 92vw, 42vw" priority /></div>
      </div>
    </section>
    <div className="olpProfileBody">
      <aside className="olpProfileIndex"><p className="olpEyebrow">In this profile</p><nav aria-label="Profile sections">
        <a href="#overview">Overview</a><a href="#expertise">Areas of focus</a>
        {sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}
      </nav><Link className="olpProfileReturn" href="/team">Meet the full team ↗</Link></aside>
      <div className="olpProfileContent">
        <section id="overview"><p className="olpEyebrow">01 / Overview</p><h2>About {person.name.split(" ")[0]}</h2>
          {person.biography.length > 0 ? person.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{person.name} is {person.role.startsWith("Of Counsel") ? "Of Counsel" : `a ${person.role}`} at Oakmount Legal Practitioners. Areas of focus include {person.focus.charAt(0).toLowerCase() + person.focus.slice(1)}</p>}
        </section>
        <section id="expertise"><p className="olpEyebrow">02 / Expertise</p><h2>Areas of focus</h2><ul className="olpExpertiseList">{person.areas.map((area) => <li key={area}>{area}</li>)}</ul></section>
        {sections.map((section, index) => <section key={section.id} id={section.id}><p className="olpEyebrow">{String(index + 3).padStart(2, "0")} / Credentials</p><h2>{section.title}</h2><ul className="olpDetailList">{section.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}
      </div>
    </div>
    <nav className="olpNextPerson" aria-label="Next lawyer"><div><p className="olpEyebrow">Meet another member of our team</p><Link href={`/team/${next.slug}`}>{next.name} <span aria-hidden="true">↗</span></Link><p>{next.role}</p></div><Link href="/team" className="olpAllPeople">View all people →</Link></nav>
  </>;
}
