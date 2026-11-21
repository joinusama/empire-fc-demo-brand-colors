 "use client";

import { useState } from "react";

const news = [
  {
    tag: "CLUB NEWS",
    date: "NOVEMBER 18, 2026",
    title: "A new season. A new standard.",
    copy: "The squad is back on the training ground, focused on the work ahead and ready for the next challenge.",
    image: "https://images.unsplash.com/photo-1517466852-59e6f3c1f1a4?auto=format&fit=crop&w=1000&q=85"
  },
  {
    tag: "MATCH REPORT",
    date: "NOVEMBER 12, 2026",
    title: "Three points under the lights",
    copy: "A determined team performance delivered a memorable home result in front of our supporters.",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1000&q=85"
  },
  {
    tag: "COMMUNITY",
    date: "NOVEMBER 05, 2026",
    title: "More than a football club",
    copy: "Our community programme brings players, families and local football together throughout the year.",
    image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1000&q=85"
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <main>
      <div className="topline">
        <span>OFFICIAL CLUB WEBSITE</span>
        <span>EST. 2020&nbsp; · &nbsp;ONE CLUB. ONE COMMUNITY.</span>
      </div>

      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Empire FC home">
          <span className="crest">E<span>FC</span></span>
          <span className="brand-name">EMPIRE <b>FC</b><small>FOOTBALL CLUB</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? "CLOSE" : "MENU"} <span>{menuOpen ? "×" : "☰"}</span>
        </button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {["Home", "About", "Team", "Matches", "News", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>GET IN TOUCH ↗</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> THE HOME OF EMPIRE FOOTBALL</p>
          <h1>BUILT TO<br /><em>COMPETE.</em></h1>
          <p className="hero-copy">Pride in our badge. Passion in our game.<br />Together, we move forward.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#matches">EXPLORE THE CLUB <span>↗</span></a>
            <a className="text-link" href="#about">OUR STORY <span>→</span></a>
          </div>
        </div>
        <div className="hero-index"><b>01</b><span /> 03</div>
        <div className="hero-caption">PLAY WITH PURPOSE. REPRESENT WITH PRIDE.</div>
      </section>

      <section className="ticker" aria-label="Club motto">
        <div>ONE CLUB <span>✦</span> ONE COMMUNITY <span>✦</span> ONE AMBITION <span>✦</span> ONE CLUB <span>✦</span> ONE COMMUNITY <span>✦</span></div>
      </section>

      <section className="section intro" id="about">
        <div className="section-label"><span>01 / WHO WE ARE</span><i /></div>
        <div className="intro-grid">
          <div>
            <p className="eyebrow dark">MORE THAN A FOOTBALL CLUB</p>
            <h2>OUR GAME.<br /><em>OUR PEOPLE.</em></h2>
          </div>
          <div className="intro-copy">
            <p className="lead">We are Empire FC. A football club driven by ambition, built around community and united by a love for the game.</p>
            <p>From the first whistle to the final moment, we believe in hard work, respect and giving everything for the badge. This is our journey — and there is room for everyone.</p>
            <a className="under-link" href="#contact">DISCOVER OUR STORY <span>↗</span></a>
          </div>
        </div>
        <div className="photo-strip">
          <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1500&q=85" alt="Football pitch under stadium lights" />
          <div className="photo-note"><b>THE EMPIRE WAY</b><span>COMMITMENT · CHARACTER · COMMUNITY</span></div>
        </div>
      </section>

      <section className="matches" id="matches">
        <div className="section dark-section">
          <div className="section-label light-label"><span>02 / ON THE PITCH</span><i /></div>
          <div className="matches-heading">
            <div><p className="eyebrow">THE ACTION NEVER STOPS</p><h2>FIXTURES &amp;<br /><em>RESULTS.</em></h2></div>
            <a className="under-link light-link" href="#contact">FULL SCHEDULE <span>↗</span></a>
          </div>
          <div className="match-card">
            <div className="match-meta"><span>NEXT MATCH</span><span>DEMO FIXTURE · FRIENDLY</span></div>
            <div className="match-teams">
              <div className="team"><div className="team-crest">E</div><b>EMPIRE FC</b></div>
              <div className="versus"><span>VS</span><small>SATURDAY<br />3:00 PM</small></div>
              <div className="team"><div className="opponent-crest">R</div><b>RIVERSIDE FC</b></div>
            </div>
            <div className="match-footer"><span>EMPIRE COMMUNITY STADIUM</span><span>COMING SOON</span></div>
          </div>
          <p className="demo-note">* Sample fixture details for demonstration purposes.</p>
        </div>
      </section>

      <section className="section news-section" id="news">
        <div className="section-label"><span>03 / THE LATEST</span><i /></div>
        <div className="news-heading"><div><p className="eyebrow dark">INSIDE THE CLUB</p><h2>NEWS &amp; <em>STORIES.</em></h2></div><a className="under-link" href="#contact">ALL UPDATES <span>↗</span></a></div>
        <div className="news-grid">
          {news.map((item, index) => (
            <article className="news-card" key={item.title}>
              <a className="news-image" href="#contact"><img src={item.image} alt="" /><span>0{index + 1} ↗</span></a>
              <div className="news-meta"><b>{item.tag}</b><span>{item.date}</span></div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a className="read-link" href="#contact">READ STORY <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="community" id="team">
        <div className="community-image" />
        <div className="community-content">
          <p className="eyebrow">THE NEXT GENERATION</p>
          <h2>YOUR JOURNEY<br />STARTS <em>HERE.</em></h2>
          <p>Players, families, supporters and volunteers — there is a place for you in the Empire community.</p>
          <a className="button button-light" href="#contact">JOIN THE COMMUNITY <span>↗</span></a>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="section-label"><span>04 / SAY HELLO</span><i /></div>
        <div className="contact-grid">
          <div><p className="eyebrow dark">GET IN TOUCH</p><h2>LET'S TALK<br /><em>FOOTBALL.</em></h2><p className="contact-copy">Want to know more about the club, get involved or work with us? Send us a message.</p><p className="contact-email">hello@empirefc.example</p></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your name<input required name="name" placeholder="Enter your name" /></label>
            <label>Email address<input required type="email" name="email" placeholder="Enter your email" /></label>
            <label>Message<textarea required name="message" rows="4" placeholder="How can we help?" /></label>
            <button className="button button-dark" type="submit">SEND MESSAGE <span>↗</span></button>
            {sent && <p className="form-success">Thanks! This demo form is working locally. Connect a form service to receive messages.</p>}
            <p className="form-note">DEMO FORM — NO MESSAGE IS SENT TO A SERVER.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home"><span className="crest">E<span>FC</span></span><span className="brand-name">EMPIRE <b>FC</b><small>FOOTBALL CLUB</small></span></a>
          <p>ONE CLUB. ONE COMMUNITY.<br />ONE AMBITION.</p>
          <a className="back-top" href="#home">BACK TO TOP ↑</a>
        </div>
        <div className="footer-bottom"><span>© 2026 EMPIRE FC — DEMO WEBSITE</span><span>BUILT FOR TESTING &amp; EDUCATIONAL USE</span></div>
      </footer>
    </main>
  );
}