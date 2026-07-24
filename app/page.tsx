import Image from "next/image";

const practiceAreas = [
  {
    number: "01",
    title: "Technology, Startups & Digital Business",
    text: "Company structuring, founder arrangements, platform terms, commercial contracts and legal support for digital products.",
  },
  {
    number: "02",
    title: "Corporate & Secretarial Services",
    text: "Incorporation, governance, filings, board support, resolutions, share documentation and compliance housekeeping.",
  },
  {
    number: "03",
    title: "Data Protection & Privacy",
    text: "NDPA-focused privacy notices, data processing contracts, compliance documents, data mapping and practical advisory.",
  },
  {
    number: "04",
    title: "Real Estate & Property Advisory",
    text: "Title review, due diligence, sale and lease documentation, perfection support and transaction advisory.",
  },
  {
    number: "05",
    title: "Commercial Contracts",
    text: "Drafting, review, negotiation, risk allocation, service agreements, partnership documents and transaction support.",
  },
  {
    number: "06",
    title: "Regulatory & Business Advisory",
    text: "Guidance for businesses operating in regulated sectors, including practical support for licences, compliance and market entry.",
  },
];

const strengths = [
  "Commercial advice that supports business decisions, not just legal theory.",
  "Strong focus on technology, data, companies and regulated businesses.",
  "Clear documents that clients, investors and counterparties can actually use.",
  "Direct access to lawyers who understand the transaction and the business context.",
];
const teamMembers = [
  {
    name: "Ifeoluwa Duro-Bello",
    role: "Partner",
    focus: "Corporate advisory, technology, data protection and commercial transactions.",
    image: "/team/ifeoluwa-duro-bello.jpg",
    email: "ifeoluwa@oakmountlp.com",
  },
  {
    name: "Ileriolwa Aina",
    role: "Partner",
    focus: "Real estate, corporate services, regulatory advisory and dispute-sensitive transactions.",
    image: "/team/aina-partner.jpg",
    email: "ileri@oakmountlp.com",
  },
  {
    name: "Associate Name",
    role: "Associate",
    focus: "Company secretarial support, contract review and compliance documentation.",
    image: "/team/associate-one.jpg",
    email: "info@dba-lp.com",
  },
];
const process = [
  {
    title: "Understand",
    text: "We clarify the commercial goal, the legal risk and the practical constraints around the matter.",
  },
  {
    title: "Structure",
    text: "We design the legal route, documents and compliance steps needed to move properly.",
  },
  {
    title: "Execute",
    text: "We support negotiation, filing, completion and follow-through until the issue is properly closed.",
  },
];

export default function Home() {
  return (
    <main className="pageShell">
      <header className="siteHeader">
        <a className="brand" href="#home" aria-label="DBALP home">
          <span className="brandMark">
            <Image src="/oakmount-logo.png" alt="Oakmount logo" width={54} height={54} priority />
          </span>
          <span className="brandText">
            <strong>OKMLP</strong>
            <small>Oakmount Legal Practitioners</small>
          </span>
        </a>

        <nav className="navLinks" aria-label="Main navigation">
          <a href="#practice">Practice Areas</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="headerButton" href="mailto:info@dba-lp.com?subject=DBALP%20Legal%20Enquiry">
          Book consultation
        </a>
      </header>

      <section id="home" className="heroSection">
        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow"></p>
            <h1>Strategic legal counsel for modern businesses in Nigeria.</h1>
            <p className="heroText">
              Oakmount Legal Practitioners advises founders, companies, small business-owners and individuals on the legal issues that affect how they build, operate and grow.
            </p>

            <div className="heroActions">
              <a className="button buttonGold" href="mailto:info@dba-lp.com?subject=DBALP%20Legal%20Enquiry">
                Speak with OKMLP
              </a>
              <a className="button buttonLight" href="#practice">
                View practice areas
              </a>
            </div>
          </div>

          <aside className="heroVisual" aria-label="DBALP firm profile">
            <div className="heroPattern" />
            <div className="heroLogoCard">
              <Image src="/oakmount-logo2.png" alt="OAKMOUNT logo" width={220} height={220} priority />
            </div>
            <div className="experienceCard">
              <span>OKMLP</span>
              <strong>Legal clarity for commercial decisions.</strong>
              <p>Technology · Corporate · Real Estate · Data Protection</p>
            </div>
          </aside>
        </div>

        <div className="heroStats" aria-label="Firm highlights">
          <div>
            <span>01</span>
            <strong>Business-facing counsel</strong>
            <p>Practical advice for founders, companies and decision-makers.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Digital economy focus</strong>
            <p>Support for technology, data, platform and regulated businesses.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Clear documentation</strong>
            <p>Contracts, policies and legal records drafted for real-world use.</p>
          </div>
        </div>
      </section>

      <section id="practice" className="section sectionLight">
        <div className="sectionHeader">
          <p className="eyebrow">Our expertise</p>
        </div>

        <div className="practiceGrid">
          {practiceAreas.map((area) => (
            <article className="practiceCard" key={area.title}>
              <div className="practiceNumber">{area.number}</div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <a href="#contact" aria-label={`Contact DBALP about ${area.title}`}>
                Discuss this area <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="aboutSection">
        <div className="aboutImageCard">
          <div className="aboutTopLine">
            <span>OKMLP</span>
            <span>Lekki Phase 1 · Lagos</span>
          </div>
          <h2>Legal advisors who understand both the law and the transaction.</h2>
          <p>
            OKMLP is built for clients who need legal support that is precise, responsive and commercially grounded.
          </p>
        </div>

        <div className="aboutCopy">
          <p className="eyebrow">Why choose us</p>
          <h2>An advisor that works inside your business, not just on paper.</h2>
          <p>
            Legal advice should help clients move with confidence. Our work is designed to connect legal requirements with the business objective behind the matter.
          </p>

          <div className="strengthList">
            {strengths.map((strength, index) => (
              <div className="strengthItem" key={strength}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section processSection">
        <div className="sectionHeader narrowHeader">
          <p className="eyebrow">How we work</p>
          <h2>A structured approach from first enquiry to execution.</h2>
        </div>

        <div className="processGrid">
          {process.map((step, index) => (
            <article className="processCard" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="team" className="section teamSection">
  <div className="sectionHeader">
    <h1 className="eyebrow">Meet our people behind your advice.</h1>
  </div>

  <div className="teamGrid">
    {teamMembers.map((member) => (
      <article className="teamMemberCard" key={member.name}>
        <div className="teamImageWrap">
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role} at DBALP`}
            width={700}
            height={875}
            className="teamImage"
          />
        </div>

        <div className="teamContent">
          <p className="teamRole">{member.role}</p>
          <h3>{member.name}</h3>
          <p>{member.focus}</p>
          <a href={`mailto:${member.email}`}>Contact</a>
        </div>
      </article>
    ))}
  </div>
</section>
      <section id="contact" className="contactSection">
        <div className="contactCopy">
          <p className="eyebrow">Contact us</p>
          <h2>Let’s discuss the legal support you need.</h2>
          <p>
            Send an enquiry and a member of the OKMLP team will respond. For urgent matters, include the nature of the transaction, the deadline and any key documents available.
          </p>
        </div>

        <form className="contactForm" action="mailto:info@dba-lp.com" method="post" encType="text/plain">
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" />
          </label>
          <label>
            Matter type
            <select name="matterType" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Technology / Startup</option>
              <option>Corporate / Secretarial</option>
              <option>Data Protection</option>
              <option>Real Estate</option>
              <option>Contracts</option>
              <option>Regulatory Advisory</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Briefly describe what you need help with." rows={4} />
          </label>
          <button className="button buttonGold" type="submit">
            Send enquiry
          </button>
        </form>
      </section>

      <footer className="footer">
        <div className="footerBrand">
          <Image src="/oakmount-logo.png" alt="DBA logo" width={48} height={48} />
          <div>
            <strong>OKMLP</strong>
            <span>Oakmount Legal Practitioners</span>
          </div>
        </div>

        <div className="footerColumns">
          <div>
            <h3>Office</h3>
            <p>26 Akin Leigh Crescent, Lekki Phase 1, Lagos State</p>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="mailto:info@oakmountlp.com">info@oakmountlp.com</a>
            <a href="https://www.oakmountlp.com">www.oakmountlp.com</a>
          </div>
          <div>
            <h3>Navigation</h3>
            <a href="#practice">Practice Areas</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <p className="copyright">© 2026 Oakmount Legal Practitioners. All rights reserved.</p>
      </footer>
    </main>
  );
}
