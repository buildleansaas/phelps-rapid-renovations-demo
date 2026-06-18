import { Hammer, Home, Paintbrush, Phone, ShieldCheck, ShowerHead, Truck, Wrench } from 'lucide-react';

const phoneDisplay = '(347) 327-2356';
const phoneHref = 'tel:+13473272356';
const email = 'supremesuccessful4@gmail.com';

const services = [
  { title: 'Repairs', copy: 'General home repairs, punch-list fixes, trim, doors, windows, toilets, vanities, and more.', Icon: Wrench },
  { title: 'Carpentry', copy: 'Cabinets, doors, trim, decks, deck staining, and practical wood repair work.', Icon: Hammer },
  { title: 'Plumbing', copy: 'Toilets, vanities, bathroom repairs, fixture help, and urgent plumbing-related service calls.', Icon: ShowerHead },
  { title: 'Roofing', copy: 'Roof repair help, gutter cleaning, exterior maintenance, and storm-response repair needs.', Icon: Home },
  { title: 'Painting', copy: 'Interior and exterior painting support for refreshes, repairs, and renovation projects.', Icon: Paintbrush },
  { title: 'Kitchen & Bathroom Remodeling', copy: 'Remodeling support for kitchens, bathrooms, flooring, fixtures, cabinets, and finish work.', Icon: ShieldCheck },
];

const moreServices = ['Flooring', 'Deck repairs', 'Pressure washing', 'Deck staining', 'Gutter cleaning', 'Demolitions', 'Junk removal', 'Delivery services', 'Cabinets', 'Doors', 'Windows', 'Trim'];

function RoofLogo() {
  return (
    <svg viewBox="0 0 120 72" aria-hidden="true" className="mark">
      <path d="M8 44 36 18l24 22 24-22 28 26" fill="none" stroke="#1d4ed8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 45 61 14l31 31" fill="none" stroke="#dc2626" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M53 46h20v18H53z" fill="#dc2626" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main>
      <div className="topbar">
        <div className="container">
          <span>24 Hour Service • Charlotte, North Carolina</span>
          <a href={phoneHref}>Call now: {phoneDisplay}</a>
        </div>
      </div>

      <nav className="nav">
        <div className="container">
          <a className="brand" href="#top" aria-label="Phelps Rapid Renovations home">
            <RoofLogo />
            <span>Phelps Rapid Renovations LLC</span>
          </a>
          <div className="navlinks">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#quote">Get a Quote</a>
          </div>
          <a className="btn primary" href={phoneHref}>Call 24/7</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="container">
          <div>
            <span className="eyebrow">Phelps Rapid Renovations • Charlotte NC</span>
            <h1>Repairs, remodeling, plumbing, roofing, painting, and more.</h1>
            <p>
              Fast, practical home-service help from DeAndre Phelps and Phelps Rapid Renovations LLC.
              Call for 24 hour service across Charlotte for urgent fixes, renovation punch lists, and property cleanups.
            </p>
            <div className="cta-row">
              <a className="btn primary" href={phoneHref}><Phone size={18} />&nbsp; Call {phoneDisplay}</a>
              <a className="btn secondary" href={`mailto:${email}?subject=Quote request for Phelps Rapid Renovations`}>Email for a Quote</a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Fast service summary">
            <h2>One call for the work that keeps a home moving.</h2>
            <ul className="quick-list">
              <li><span className="check">✓</span><span>24 hour service for urgent repair needs.</span></li>
              <li><span className="check">✓</span><span>Plumbing, carpentry, painting, roofing, flooring, decks, and remodels.</span></li>
              <li><span className="check">✓</span><span>Junk removal, demolition, delivery, pressure washing, and gutter cleaning.</span></li>
            </ul>
            <div className="card" style={{ background: '#111827', color: '#fff', boxShadow: 'none' }}>
              <strong>DeAndre Phelps</strong><br />
              <a href={phoneHref}>{phoneDisplay}</a><br />
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <h2>Repair and renovation services.</h2>
            <p className="section-lede">From repairs and plumbing to remodeling and cleanup, the service mix is organized so a homeowner can quickly understand what to call for.</p>
          </div>
          <div className="grid services">
            {services.map(({ title, copy, Icon }) => (
              <article className="card" key={title}>
                <Icon color="#dc2626" size={28} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div style={{ height: 24 }} />
          <div className="service-pill-wrap">
            {moreServices.map(service => <span className="pill" key={service}>{service}</span>)}
          </div>
        </div>
      </section>

      <section className="section band" id="about">
        <div className="container">
          <div className="section-head">
            <h2>Rapid help for repairs and renovations.</h2>
            <p className="section-lede">Homeowners do not always need a giant contracting company. Sometimes they need someone responsive who can handle the repair, the cleanup, and the next small project without making it complicated.</p>
          </div>
          <div className="grid services">
            <article className="card"><h3>Fast response</h3><p>24 hour service positioning makes the phone number the main action, especially for leak, fixture, gutter, roof, or urgent repair calls.</p></article>
            <article className="card"><h3>Broad repair coverage</h3><p>The service list covers the common homeowner jobs that fall between a handyman, plumber, remodeler, painter, and cleanup crew.</p></article>
            <article className="card"><h3>Charlotte focused</h3><p>Built for Charlotte, NC outreach with local copy, real contact buttons, and a simple conversion path from card to call.</p></article>
          </div>
        </div>
      </section>

      <section className="section" id="quote">
        <div className="container quote">
          <div>
            <h2>Need a repair or project estimate?</h2>
            <p className="section-lede">Call or email Phelps Rapid Renovations LLC with the job details, photos if available, and the Charlotte-area address.</p>
            <div className="cta-row" style={{ marginTop: 20 }}>
              <a className="btn primary" href={phoneHref}>Call {phoneDisplay}</a>
              <a className="btn secondary" href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
          <form className="card form" action={`mailto:${email}`} method="post" encType="text/plain">
            <input className="input" name="name" placeholder="Your name" />
            <input className="input" name="phone" placeholder="Phone number" />
            <input className="input" name="service" placeholder="What do you need help with?" />
            <textarea className="input" name="details" placeholder="Tell us about the repair, remodel, cleanup, or service request" rows={5} />
            <button className="btn primary" type="submit"><Truck size={18} />&nbsp; Request Service</button>
            <p className="small">Service requests open an email draft to Phelps Rapid Renovations LLC.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div>
            <strong>Phelps Rapid Renovations LLC</strong><br />
            Charlotte, North Carolina • 24 Hour Service
          </div>
          <div>
            <a href={phoneHref}>{phoneDisplay}</a><br />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
