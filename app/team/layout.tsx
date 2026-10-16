import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import "./team.css";

export default function TeamLayout({ children }: { children: ReactNode }) {
  return <div className="olpPeopleSite">
    <a className="skipLink" href="#people-main">Skip to content</a>
    <header className="olpPeopleHeader">
      <Link className="olpPeopleBrand" href="/" aria-label="Oakmount Legal Practitioners home">
        <Image src="/oakmount-logo.png" alt="" width={48} height={48} />
        <span><strong>OLP</strong><small>Oakmount Legal Practitioners</small></span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#practice">Practice areas</Link>
        <Link href="/team" aria-current="true">Our team</Link>
        <Link href="/#contact">Contact us <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
    <main id="people-main">{children}</main>
    <footer className="olpPeopleFooter">
      <div><p className="olpEyebrow">Start a conversation</p><h2>Let’s talk about<br />what comes next.</h2>
      <a className="olpContactLink" href="mailto:info@oakmountlp.com">info@oakmountlp.com <span aria-hidden="true">↗</span></a></div>
      <div className="olpFooterDetails"><strong>Oakmount Legal Practitioners</strong><p>26 Akin Leigh Crescent,<br />Lekki Phase 1, Lagos State</p><Link href="/">Back to home ↗</Link></div>
    </footer>
  </div>;
}
