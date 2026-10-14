"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

const firm = {
  shortName: "OLP",
  name: "Oakmount Legal Practitioners",
  email: "info@oakmountlp.com",
  website: "www.oakmountlp.com",
  address: "26 Akin Leigh Crescent, Lekki Phase 1, Lagos State",
};

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
    image: "/team/ife.png",
    email: "ife@oakmountlp.com",
  },
  {
    name: "Ileriolwa Aina",
    role: "Partner",
    focus: "Real estate, corporate services, regulatory advisory and dispute-sensitive transactions.",
    image: "/team/ileri.png",
    email: "ileri@oakmountlp.com",
  },
  {
    name: "Damilola Olaleye",
    role: "Of Counsel - Corporate, Commercial and Compliance ",
    focus: "Corporate services, regulatory advisory and regulatory compliance.",
    image: "/team/dami.png",
    email: "dami@oakmountlp.com",
  },

  {
    name: "Ayomikun Familua",
    role: "Managing Associate",
    focus: "Litigation, Family Law, Company secretarial support, contract review and compliance documentation.",
    image: "/team/piri.jpg",
    email: "ayomikun@oakmount.com",
  },
  {
    name: "Toluwanimi Okunade",
    role: "Senior Associate",
    focus: " Succession Law, Company secretarial support, contract review and compliance documentation.",
    image: "/team/tolu.png",
    email: "toluwanimi@oakmount.com",
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

const navigation = [
  { label: "Practice Areas", href: "#practice" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menuIcon ${open ? "isOpen" : ""}`} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMember, setActiveMember] = useState(0);
  const [teamPaused, setTeamPaused] = useState(false);
  const teamButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("isVisible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("isVisible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || teamPaused) return;

    const timer = window.setInterval(() => {
      setActiveMember((current) => (current + 1) % teamMembers.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [teamPaused]);

  useEffect(() => {
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const consultationHref = `mailto:${firm.email}?subject=Oakmount%20Legal%20Enquiry`;
  const selectedMember = teamMembers[activeMember];

  const handleTeamKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % teamMembers.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + teamMembers.length) % teamMembers.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = teamMembers.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveMember(nextIndex);
    teamButtonRefs.current[nextIndex]?.focus();
  };

  return (
    <main className="pageShell">
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>

      <header className="siteHeader">
        <a className="brand" href="#home" aria-label={`${firm.name} home`} onClick={() => setMobileMenuOpen(false)}>
          <span className="brandMark">
            <Image src="/oakmount-logo.png" alt="" width={54} height={54} priority />
          </span>
          <span className="brandText">
            <strong>{firm.shortName}</strong>
            <small>{firm.name}</small>
          </span>
        </a>

        <nav className="navLinks" aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="headerActions">
          <a className="headerButton" href={consultationHref}>
            Book consultation
          </a>
          <button
            className="menuButton"
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={`mobileNavigation ${mobileMenuOpen ? "isOpen" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!mobileMenuOpen}
        >
          {navigation.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setMobileMenuOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
          <a className="mobileContact" href={consultationHref} onClick={() => setMobileMenuOpen(false)}>
            Start a conversation <ArrowIcon />
          </a>
        </nav>
      </header>

      <div id="main-content">
        <section id="home" className="heroSection">
          <div className="heroAmbient heroAmbientOne" aria-hidden="true" />
          <div className="heroAmbient heroAmbientTwo" aria-hidden="true" />

          <div className="heroGrid">
            <div className="heroCopy">
              <p className="heroKicker heroIntroAnimation">
              </p>
              <h1 className="heroTitle">
                <span className="heroLine heroLineOne">Strategic legal</span>
                <span className="heroLine heroLineTwo">counsel for</span>
                <span className="heroLine heroLineThree">
                  <em>modern business.</em>
                </span>
              </h1>
              <p className="heroText heroIntroAnimation heroDelayOne">
                {firm.name} advises founders, companies, business owners and individuals on the legal issues that affect how they build, operate and grow.
              </p>

              <div className="heroActions heroIntroAnimation heroDelayTwo">
                <a className="button buttonGold" href={consultationHref}>
                  Speak with {firm.shortName} <ArrowIcon />
                </a>
                <a className="textLink" href="#practice">
                  Explore our expertise <span aria-hidden="true">↘</span>
                </a>
              </div>
            </div>

            <aside className="heroVisual" aria-label={`${firm.name} profile`}>
              <div className="heroVisualFrame heroIntroAnimation heroDelayOne">
                <div className="heroVisualMeta">
                </div>
                <div className="heroMonogram" aria-hidden="true">
                  <span>O</span>
                  <span>M</span>
                </div>
                <div className="heroLogoPlate">
                  <Image src="/oakmount-logo2.png" alt={`${firm.name} logo`} width={260} height={260} priority />
                </div>
                
              </div>
              <div className="heroFloatingNote heroIntroAnimation heroDelayThree">
                <span>Focused practice</span>
                <p>Technology · Corporate Law · Real Estate · Data Protection</p>
              </div>
            </aside>
          </div>

          <div className="heroStats" data-reveal>
            <p className="heroStatsLabel">What clients can expect</p>
            <div className="heroStatItems">
              <article>
                <span>01</span>
                <strong>Business-facing counsel</strong>
                <p>Practical advice for founders, companies and decision-makers.</p>
              </article>
              <article>
                <span>02</span>
                <strong>Digital economy focus</strong>
                <p>Support for technology, data, platform and regulated businesses.</p>
              </article>
              <article>
                <span>03</span>
                <strong>Clear documentation</strong>
                <p>Contracts, policies and legal records drafted for real-world use.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="practice" className="section sectionLight">
          <header className="sectionHeader" data-reveal>
            <div>
              <p className="eyebrow">Our expertise</p>
              <h2>Focused advice for the decisions that move business forward.</h2>
            </div>
          </header>

          <div className="practiceGrid">
            {practiceAreas.map((area, index) => (
              <article className="practiceCard" key={area.title} data-reveal style={{ "--delay": `${index * 70}ms` } as CSSProperties}>
                <div className="practiceTopline">
                  <span className="practiceNumber">{area.number}</span>
                  <span className="practiceArrow" aria-hidden="true">↗</span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <a href="#contact" aria-label={`Contact ${firm.name} about ${area.title}`}>
                  Discuss this area <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="aboutSection">
          <div className="aboutStatement" data-reveal>
            <div className="aboutTopLine">
              <span>{firm.shortName}</span>
              
            </div>
            <p className="aboutStatementNumber">01</p>
            <h2>Legal advisors who understand both the law and the transaction.</h2>
            <p>
              {firm.shortName} is built for clients who need legal support that is precise, responsive and commercially grounded.
            </p>
          </div>

          <div className="aboutCopy" data-reveal>
            <p className="eyebrow">Why choose us</p>
            <h2>An advisor that works inside your business, not just on paper.</h2>
            <p>
              Legal advice should help clients move with confidence. Our work connects legal requirements with the business objective behind each matter.
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

        <section id="process" className="processSection">
          <header className="processHeader" data-reveal>
            <p className="eyebrow eyebrowLight">How we work</p>
            <h2>A clear route from first conversation to completed work.</h2>
          </header>

          <div className="processGrid">
            {process.map((step, index) => (
              <article className="processCard" key={step.title} data-reveal style={{ "--delay": `${index * 100}ms` } as CSSProperties}>
                <span className="processNumber">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="teamSection" onMouseEnter={() => setTeamPaused(true)} onMouseLeave={() => setTeamPaused(false)}>
          <div className="teamHeading" data-reveal>
            <p className="eyebrow eyebrowLight">The people</p>
            <h2>Meet our team.</h2>
            <p>Direct access to the people responsible for your advice.</p>
          </div>

          <div className="teamStage" data-reveal>
            <div
              className="teamPortraitPanel"
              key={`portrait-${activeMember}`}
              role="tabpanel"
              id="team-panel"
              aria-labelledby={`team-tab-${activeMember}`}
              tabIndex={0}
            >
              <div className="teamPortraitIndex" aria-hidden="true">
                {String(activeMember + 1).padStart(2, "0")}
              </div>
              <div className="teamPortraitFrame">
                <Image
                  src={selectedMember.image}
                  alt={`${selectedMember.name}, ${selectedMember.role} at ${firm.name}`}
                  fill
                  sizes="(max-width: 760px) 92vw, (max-width: 1100px) 48vw, 520px"
                  className="teamPortraitImage"
                  priority={activeMember === 0}
                />
              </div>
              <div className="teamPortraitCaption">
                <span>{selectedMember.role}</span>
                <span>{firm.shortName}</span>
              </div>
            </div>

            <div className="teamProfile" key={`profile-${activeMember}`}>
              <p className="teamProfileCount">
                {String(activeMember + 1).padStart(2, "0")} <span>/ {String(teamMembers.length).padStart(2, "0")}</span>
              </p>
              <h3>{selectedMember.name}</h3>
              <p className="teamProfileRole">{selectedMember.role}</p>
              <p className="teamProfileFocus">{selectedMember.focus}</p>
              <a href={`mailto:${selectedMember.email}`} className="button buttonOutlineLight">
                Contact {selectedMember.name.split(" ")[0]} <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="teamSelector" role="tablist" aria-label="Select a team member" data-reveal>
            {teamMembers.map((member, index) => (
              <button
                key={member.name}
                ref={(element) => {
                  teamButtonRefs.current[index] = element;
                }}
                id={`team-tab-${index}`}
                className={`teamSelectorItem ${activeMember === index ? "isActive" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeMember === index}
                aria-controls="team-panel"
                tabIndex={activeMember === index ? 0 : -1}
                onClick={() => setActiveMember(index)}
                onFocus={() => setTeamPaused(true)}
                onBlur={() => setTeamPaused(false)}
                onKeyDown={(event) => handleTeamKeyDown(event, index)}
              >
                <span className="teamThumb">
                  <Image src={member.image} alt="" fill sizes="88px" className="teamThumbImage" />
                </span>
                <span className="teamSelectorText">
                  <strong>{member.name}</strong>
                  <small>{member.role}</small>
                </span>
                <span className="teamSelectorProgress" aria-hidden="true" />
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="contactWrap">
          <div className="contactSection" data-reveal>
            <div className="contactCopy">
              <p className="eyebrow eyebrowLight">Contact us</p>
              <h2>Let’s discuss the legal support you need.</h2>
              <p>
                Send an enquiry and a member of the {firm.shortName} team will respond. For urgent matters, include the nature of the transaction, the deadline and any key documents available.
              </p>
              <div className="contactDetails">
                <a href={`mailto:${firm.email}`}>{firm.email}</a>
                <p>{firm.address}</p>
              </div>
            </div>

            <form
  className="contactForm"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        matterType: formData.get("matterType"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      alert("Thank you. Your enquiry has been sent.");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }}
>
  <div className="formRow">
    <label>
      <span>Name</span>
      <input
        name="name"
        type="text"
        placeholder="Your name"
        autoComplete="name"
        required
      />
    </label>

    <label>
      <span>Email</span>
      <input
        name="email"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
        required
      />
    </label>
  </div>

  <label>
    <span>Matter type</span>
    <select name="matterType" defaultValue="" required>
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
    <span>Message</span>
    <textarea
      name="message"
      placeholder="Briefly describe what you need help with."
      rows={5}
      required
    />
  </label>

  <button className="button buttonGold formButton" type="submit">
    Send enquiry <ArrowIcon />
  </button>
</form>
          </div>
        </section>

        <footer className="footer">
          <div className="footerLead">
            <a className="footerBrand" href="#home" aria-label={`${firm.name} home`}>
              <Image src="/oakmount-logo.png" alt="" width={58} height={58} />
              <span>
                <strong>{firm.shortName}</strong>
                <small>{firm.name}</small>
              </span>
            </a>
            <p>Clear legal thinking for modern commercial decisions.</p>
          </div>

          <div className="footerColumns">
            <div>
              <h3>Office</h3>
              <p>{firm.address}</p>
            </div>
            <div>
              <h3>Contact</h3>
              <a href={`mailto:${firm.email}`}>{firm.email}</a>
              <a href={`https://${firm.website}`}>{firm.website}</a>
            </div>
            <div>
              <h3>Navigation</h3>
              {navigation.slice(0, 4).map((item) => (
                <a href={item.href} key={item.href}>{item.label}</a>
              ))}
            </div>
          </div>

          <div className="footerBottom">
            <p>© 2026 {firm.name}. All rights reserved.</p>
            <a href="#home">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
