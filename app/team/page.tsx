import Image from "next/image";
import Link from "next/link";
import { people } from "./people";
export const metadata = { title: "Our Team | Oakmount Legal Practitioners", description: "Meet the lawyers at Oakmount Legal Practitioners and explore their areas of practice." };

export default function TeamPage() {
  return <>
    <section className="olpPeopleIntro">
      <p className="olpEyebrow">Oakmount / Our people</p>
      <div className="olpIntroGrid"><h1>Good counsel.<br /><em>Real people.</em></h1>
        <p>Meet the people behind our advice.<br />Explore our team and find the right person to speak with about your matter.</p></div>
      <div className="olpIntroFoot"><span>OUR TEAM</span><span>{String(people.length).padStart(2, "0")} PROFESSIONALS</span></div>
    </section>
    <section className="olpDirectory" aria-label="Our lawyers">
      {people.map((person, index) => <article className="olpPersonCard" key={person.slug}>
        <Link href={`/team/${person.slug}`} className="olpPersonLink">
          <div className="olpCardImage"><Image src={person.image} alt={person.name} fill sizes="(max-width: 620px) 92vw, (max-width: 1000px) 45vw, 30vw" priority={index < 3} />
            <span className="olpCardAction" aria-hidden="true">↗</span></div>
          <div className="olpCardCaption"><p>{person.role}</p><h2>{person.name}</h2><span className="olpViewProfile">View profile <span aria-hidden="true">→</span></span></div>
        </Link>
      </article>)}
      <aside className="olpDirectoryNote"><p className="olpEyebrow">Working with you</p><h2>A conversation<br />is a good<br /><em>place to start.</em></h2><Link href="/#contact">Speak with Oakmount <span aria-hidden="true">↗</span></Link></aside>
    </section>
  </>;
}
