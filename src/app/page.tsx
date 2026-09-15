import Image from "next/image";

const services = [
  {
    number: "01",
    title: "High-Load Systems & Gaming Tech",
    description:
      "Resilient backend architecture for systems where throughput, uptime, and regulatory requirements are non-negotiable.",
    tags: ["Real-time data", "Fraud prevention", "iGaming", "Scalable backends"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7.5h16M4 12h16M4 16.5h10" />
        <circle cx="18" cy="16.5" r="2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Payment Processing Solutions",
    description:
      "Secure payment rails and transaction workflows built around your product, compliance model, and operational needs.",
    tags: ["Stripe & Adyen", "Apple / Google Pay", "POS", "S2S webhooks"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 15h4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Enterprise Mobile Development",
    description:
      "Production-grade native and cross-platform applications engineered for conversion, maintainability, and growth.",
    tags: ["Flutter", "iOS", "Android", "E-commerce & EdTech"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M10 5h4M11 18.5h2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Hardware & Wireless Integration",
    description:
      "Reliable communication layers connecting mobile products to devices, sensors, and enterprise hardware.",
    tags: ["Bluetooth LE", "NFC", "IoT", "Device protocols"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 7 8 10V7L8 17l8-10M4.5 8.5a5 5 0 0 0 0 7M19.5 8.5a5 5 0 0 1 0 7" />
      </svg>
    ),
  },
];

const clients = [
  {
    name: "FAVBET",
    detail: "High-load systems & platforms",
    logo: "/logos/favbet.png",
    width: 447,
    height: 447,
  },
  {
    name: "TEMA UA",
    detail: "Software engineering",
    logo: "/logos/tema.png",
    width: 200,
    height: 77,
    // Transparent artwork in dark navy; needs a light surface to stay legible.
    surface: "light" as const,
  },
  {
    name: "PANDA TEAM",
    detail: "Outsource & custom development",
    logo: "/logos/panda-team.png",
    width: 447,
    height: 447,
  },
  {
    name: "OoNt LTD",
    detail: "UK · E-commerce ecosystem",
    logo: "/logos/oont.png",
    width: 447,
    height: 447,
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tymur Tereshchenko, home">
          <span className="brand-mark" aria-hidden="true">TT</span>
          <span className="brand-copy">
            <strong>Tymur Tereshchenko</strong>
            <small>Engineering Consultancy</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#expertise">Expertise</a>
          <a href="#engagements">Engagements</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:sales@tereshchenko-software.net">
          Start a conversation <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            Independent consultancy · Vienna, Austria
          </div>
          <h1 id="hero-title">
            High-Performance
            <span>Software Engineering</span>
            & Enterprise Systems Integration.
          </h1>
          <p className="hero-lede">
            Delivering scalable mobile applications, complex payment
            infrastructures, and real-time enterprise architecture.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:sales@tereshchenko-software.net">
              Contact Me <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#expertise">
              Explore expertise
            </a>
          </div>
          <div className="hero-proof" aria-label="Core capabilities">
            <span>Senior-led delivery</span>
            <span>Architecture to production</span>
            <span>EU-based consultancy</span>
          </div>
        </div>

        <div className="system-visual" aria-hidden="true">
          <div className="visual-topbar">
            <div className="visual-dots"><i /><i /><i /></div>
            <span>infrastructure.live</span>
            <b>Operational</b>
          </div>
          <div className="visual-grid">
            <div className="metric-card">
              <span>EVENT STREAM</span>
              <strong>Real-time</strong>
              <div className="sparkline">
                {[18, 30, 22, 48, 37, 60, 52, 76, 65, 88, 70, 92].map((h, i) => (
                  <i key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="metric-card latency">
              <span>LATENCY</span>
              <strong>42<small>ms</small></strong>
              <em>↓ 18.4%</em>
            </div>
            <div className="flow-card">
              <span>TRANSACTION FLOW</span>
              <div className="flow">
                <i className="node">APP</i><b /><i className="node active">API</i><b /><i className="node">PSP</i>
              </div>
              <div className="flow-labels">
                <small>Client</small><small>Secure gateway</small><small>Provider</small>
              </div>
            </div>
            <div className="log-card">
              <span>LIVE SYSTEM LOG</span>
              <p><i>12:44:08</i> payment.authorized <b>200</b></p>
              <p><i>12:44:08</i> webhook.delivered <b>200</b></p>
              <p><i>12:44:09</i> ledger.committed <b>200</b></p>
            </div>
          </div>
          <div className="visual-footer">
            <span><i /> 12 services connected</span>
            <span>99.99% availability</span>
          </div>
        </div>
      </section>

      <section className="expertise section" id="expertise" aria-labelledby="expertise-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Core expertise</p>
            <h2 id="expertise-title">Engineering the critical layer.</h2>
          </div>
          <p>
            Focused technical leadership and hands-on implementation for
            ambitious digital products and business-critical platforms.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-top">
                <div className="service-icon">{service.icon}</div>
                <span>{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul aria-label={`${service.title} technologies`}>
                {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section" aria-labelledby="approach-title">
        <div className="approach-copy">
          <p className="section-kicker">Built for complexity</p>
          <h2 id="approach-title">One senior technical partner. No delivery gap.</h2>
          <p>
            From architecture decisions through production rollout, work stays
            grounded in measurable business outcomes, clean communication, and
            systems that remain operable after launch.
          </p>
          <a href="mailto:sales@tereshchenko-software.net">Discuss your system <ArrowIcon /></a>
        </div>
        <ol className="approach-list">
          <li><span>01</span><div><strong>Discover</strong><p>Clarify constraints, risk, and the highest-value technical path.</p></div></li>
          <li><span>02</span><div><strong>Engineer</strong><p>Build secure, observable systems with pragmatic technology choices.</p></div></li>
          <li><span>03</span><div><strong>Integrate</strong><p>Connect infrastructure, providers, devices, and product workflows.</p></div></li>
          <li><span>04</span><div><strong>Scale</strong><p>Harden performance and operations for sustained production growth.</p></div></li>
        </ol>
      </section>

      <section className="engagements section" id="engagements" aria-labelledby="engagements-title">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">Trusted by & past engagements</p>
            <h2 id="engagements-title">Experience across demanding environments.</h2>
          </div>
        </div>
        <div className="client-grid">
          {clients.map((client) => (
            <article key={client.name}>
              <div className={`client-logo${client.surface === "light" ? " on-light" : ""}`}>
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                />
              </div>
              <strong>{client.name}</strong>
              <p>{client.detail}</p>
            </article>
          ))}
        </div>
        <p className="engagement-note">
          Engagement references indicate past project involvement and do not
          necessarily imply current endorsement.
        </p>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-orb" aria-hidden="true" />
        <p className="section-kicker">Start a conversation</p>
        <h2 id="contact-title">Have a complex system to build or improve?</h2>
        <p>
          Share the context, technical challenge, and desired outcome. I&apos;ll
          respond with focused next steps.
        </p>
        <a className="button button-light" href="mailto:sales@tereshchenko-software.net">
          sales@tereshchenko-software.net <ArrowIcon />
        </a>
      </section>

      <footer>
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark" aria-hidden="true">TT</span>
              <span className="brand-copy"><strong>Tymur Tereshchenko</strong><small>Engineering Consultancy</small></span>
            </a>
            <p>Independent software engineering and IT infrastructure consultancy in Vienna.</p>
          </div>
          <div className="footer-links">
            <div><span>Navigate</span><a href="#expertise">Expertise</a><a href="#engagements">Engagements</a><a href="#contact">Contact</a></div>
            <div><span>Contact</span><a href="mailto:sales@tereshchenko-software.net">Email</a><a href="tel:+4915738343727">+49 157 38343727</a></div>
            <div><span>Legal</span><a href="#impressum">Impressum</a><a href="#privacy">Privacy Notice</a></div>
          </div>
        </div>

        <div className="legal-grid">
          <section id="impressum" aria-labelledby="impressum-title">
            <p className="section-kicker">§ 5 ECG / UGB</p>
            <h2 id="impressum-title">Impressum / Legal Notice</h2>
            <dl>
              <div><dt>Business owner</dt><dd>Tymur Tereshchenko</dd></div>
              <div><dt>Business form</dt><dd>Einzelunternehmen (IT-Dienstleistungen)</dd></div>
              <div><dt>Business address</dt><dd>Leitermayergasse 30, 1180 Wien, Austria</dd></div>
              <div><dt>Contact</dt><dd><a href="mailto:sales@tereshchenko-software.net">sales@tereshchenko-software.net</a><br /><a href="tel:+4915738343727">+49 157 38343727</a></dd></div>
              <div><dt>Chamber membership</dt><dd>Mitglied der Wirtschaftskammer Wien (Fachgruppe Unternehmensberatung, Buchhaltung und Informationstechnologie – UBIT)</dd></div>
              <div><dt>Gewerbewortlaut</dt><dd>Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik</dd></div>
              <div><dt>GISA-Zahl</dt><dd>40118185</dd></div>
              <div><dt>UID / Steuernummer</dt><dd>In Aufstellung (Pending issuance by Finanzamt Österreich)</dd></div>
              <div><dt>Applicable legislation</dt><dd>Gewerbeordnung, available at <a href="https://www.ris.bka.gv.at/" target="_blank" rel="noreferrer">ris.bka.gv.at</a></dd></div>
              <div><dt>Supervisory authority</dt><dd>Magistratisches Bezirksamt des XVIII. Bezirkes</dd></div>
            </dl>
          </section>

          <section id="privacy" aria-labelledby="privacy-title">
            <p className="section-kicker">EU GDPR</p>
            <h2 id="privacy-title">Privacy Notice</h2>
            <p>
              This website does not use third-party tracking cookies, analytics,
              advertising pixels, or embedded third-party content. Basic
              technical access data may be processed temporarily by the hosting
              provider to securely deliver this website.
            </p>
            <p>
              If you contact me by email or telephone, the information you
              provide is processed solely to respond to your enquiry and, where
              applicable, to take steps prior to entering into a contract
              (Art. 6(1)(b) GDPR) or on the basis of legitimate interest in
              business communication (Art. 6(1)(f) GDPR).
            </p>
            <p>
              You have rights of access, rectification, erasure, restriction,
              objection, and data portability where applicable. For privacy
              enquiries, contact <a href="mailto:sales@tereshchenko-software.net">sales@tereshchenko-software.net</a>.
              You may also lodge a complaint with the Austrian Data Protection
              Authority (Datenschutzbehörde).
            </p>
          </section>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tymur Tereshchenko</span>
          <span>Vienna, Austria · Built with precision</span>
        </div>
      </footer>
    </main>
  );
}
