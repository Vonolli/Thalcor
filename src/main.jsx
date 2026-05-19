import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const ventureMap = [
  {
    name: 'Omega',
    description:
      'Personal AI command layer for memory, tools, code, learning, and automation.'
  },
  {
    name: 'Symbiotic Robotics',
    description:
      'Robots, drones, and sensor systems for land stewardship, reforestation, wildfire recovery, and ecological monitoring.'
  },
  {
    name: 'Elthriven',
    description: 'Experimental living simulation and game world.'
  },
  {
    name: "O’LIXIR",
    description: 'Clean functional energy drink concept.'
  },
  {
    name: 'Petrichor',
    description:
      'Design house for clothing, jewelry, and objects with gothic nature and armoury details.'
  },
  {
    name: 'Nightborne',
    description:
      'Music label and home of corvus!, broadcasting a dark creative signal.'
  }
];

const doctrine = [
  'Build quietly. Release artifacts.',
  'Turn strange ideas into testable systems.',
  'Use AI as leverage, not decoration.',
  'Prefer infrastructure over hype.',
  'Compound skill, distribution, capital, and code.'
];

const drops = [
  'Omega command interface',
  'Ecological robotics field notes',
  'O’LIXIR formulation path',
  'Elthriven world snapshots',
  'Petrichor product studies'
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <header className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
}

function App() {
  return (
    <div className="site-shell">
      <main>
        <section className="hero">
          <p className="eyebrow">THALCOR / PRIVATE LAB</p>
          <h1>Building strange machines for the next world.</h1>
          <p className="lead">
            Thalcor is an independent venture studio, private idea lab, and systems workshop. We build quietly, release artifacts, and compound leverage.
          </p>
          <div className="hero-actions">
            <a href="#venture-map" className="btn btn-primary">Explore the map</a>
            <a href="#contact" className="btn btn-ghost">Send a signal</a>
          </div>
          <aside className="status-panel" aria-label="Build status panel">
            <p>Active build phase</p>
            <p>Prototype-first</p>
            <p>Quiet but inevitable</p>
            <p>Build → Prove → Compound</p>
          </aside>
        </section>

        <section>
          <SectionTitle
            eyebrow="MANIFESTO"
            title="Artifacts instead of announcements."
            subtitle="Thalcor is not built to look like every startup. It is a command layer for ideas: experiments become artifacts, artifacts become systems, systems become leverage."
          />
        </section>

        <section id="venture-map">
          <SectionTitle
            eyebrow="VENTURE MAP"
            title="Current initiatives"
          />
          <div className="card-grid">
            {ventureMap.map((item) => (
              <article className="glass-card" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="OPERATING DOCTRINE" title="Build → Prove → Compound" />
          <ul className="doctrine-list">
            {doctrine.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </section>

        <section>
          <SectionTitle
            eyebrow="DROPS"
            title="Public proof-of-work"
            subtitle="Drops are public releases: prototypes, essays, renders, research notes, demos, field concepts, and proof-of-work."
          />
          <div className="drops-row">
            {drops.map((drop) => <span key={drop}>{drop}</span>)}
          </div>
        </section>

        <section id="contact" className="contact">
          <SectionTitle
            eyebrow="CONTACT"
            title="Send a signal"
            subtitle="For collaborators, builders, investors, operators, designers, researchers, and people who want to help build impossible things."
          />
          <a className="btn btn-primary" href="mailto:hello@thalcor.ca">hello@thalcor.ca</a>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
