import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const accessMeta = [
  { label: 'ACCESS LEVEL', value: 'PUBLIC' },
  { label: 'SIGNAL STATUS', value: 'ACTIVE' },
  { label: 'NODE', value: 'THALCOR.CA' },
  { label: 'BUILD MODE', value: 'QUIET' },
  { label: 'RELEASE TYPE', value: 'ARTIFACT DROP' },
  { label: 'SYSTEM STATE', value: 'COMPOUNDING' }
];

const dossiers = [
  {
    codename: 'OMEGA',
    sector: 'Artificial Intelligence',
    status: 'Active Build',
    phase: 'Command Layer',
    signal: 'High',
    artifactType: 'System Core',
    description:
      'A personal AI command layer with memory, tools, learning systems, code execution, and automation.'
  },
  {
    codename: 'SYMBIOTIC ROBOTICS',
    sector: 'Robotics / Ecology',
    status: 'Field Concept',
    phase: 'Stewardship Ops',
    signal: 'Rising',
    artifactType: 'Field Platform',
    description:
      'Human-guided robots, drones, and sensors for reforestation, wildfire recovery, land stewardship, invasive species control, and ecological monitoring.'
  },
  {
    codename: 'ELTHRIVEN',
    sector: 'Simulation / Games',
    status: 'Prototype',
    phase: 'World Engine',
    signal: 'Persistent',
    artifactType: 'Simulation Stack',
    description:
      'A living sea-island world engine blending games, agents, procedural systems, and high-resolution ASCII rendering.'
  },
  {
    codename: "O’LIXIR",
    sector: 'Functional Beverage',
    status: 'Formulation Path',
    phase: 'Flavor + Formula',
    signal: 'Calibrating',
    artifactType: 'Consumer Product',
    description:
      'A clean energy drink concept built around sustained energy, strong taste, zero sugar, low calories, and natural functional ingredients.'
  },
  {
    codename: 'PETRICHOR',
    sector: 'Design / Objects',
    status: 'Artifact Studies',
    phase: 'Physical R&D',
    signal: 'Stable',
    artifactType: 'Design House',
    description:
      'A design house for clothing, jewelry, gothic nature, armoury details, and physical product experiments.'
  },
  {
    codename: 'NIGHTBORNE',
    sector: 'Music / Media',
    status: 'Signal Building',
    phase: 'Myth Engine',
    signal: 'Amplifying',
    artifactType: 'Creative Label',
    description:
      'The creative label behind corvus!, built around music, visuals, voice, myth, and dark performance identity.'
  }
];

const doctrine = [
  'Build quietly. Release artifacts.',
  'Prototype before permission.',
  'Use AI as leverage, not decoration.',
  'Prefer systems over hype.',
  'Turn taste into infrastructure.',
  'Compound skill, capital, code, and distribution.',
  'Make impossible ideas testable.'
];

const drops = [
  'Omega command interface',
  'Ecological robotics field notes',
  'Elthriven world snapshots',
  'O’LIXIR formulation path',
  'Petrichor product studies',
  'Nightborne signal archive'
];

function App() {
  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <header className="top-node">
        <span>THALCOR / ACCESS NODE</span>
        <span>VENTURE STUDIO / SYSTEMS WORKSHOP</span>
      </header>

      <main>
        <section className="access-hero" id="top">
          <div className="hero-left">
            <p className="small-label">CLASSIFIED ENTRY / PUBLIC MIRROR</p>
            <h1>Building strange machines for the next world.</h1>
            <p className="hero-copy">
              Thalcor is a private venture studio and systems workshop building AI command layers, ecological robotics, game worlds, consumer products, design artifacts, and creative infrastructure.
            </p>
            <p className="microcopy">
              Build quietly. Release artifacts. Compound leverage. <br />
              Not a startup. A forge for impossible ideas.
            </p>
            <div className="hero-actions">
              <a href="#dossiers" className="btn btn-solid">Enter venture dossiers</a>
              <a href="#signal" className="btn btn-outline">Send a signal</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="System status">
            {accessMeta.map((item) => (
              <p key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </p>
            ))}
          </aside>
        </section>

        <section className="thesis split-panel">
          <div>
            <p className="small-label">THE THESIS</p>
            <h2>A command layer for ideas.</h2>
          </div>
          <p>
            Thalcor turns scattered projects into one compounding engine of AI, design, code, media, products, and capital. Experiments become artifacts. Artifacts become systems. Systems become leverage.
          </p>
        </section>

        <section id="dossiers">
          <p className="small-label">VENTURE DOSSIERS</p>
          <h2>Classified builds in active circulation.</h2>
          <div className="dossier-grid">
            {dossiers.map((item, index) => (
              <article className="dossier" key={item.codename}>
                <div className="dossier-top">
                  <span>ARTIFACT #{String(index + 1).padStart(3, '0')}</span>
                  <span>{item.status}</span>
                </div>
                <h3>{item.codename}</h3>
                <p>{item.description}</p>
                <ul>
                  <li><label>SECTOR</label><span>{item.sector}</span></li>
                  <li><label>PHASE</label><span>{item.phase}</span></li>
                  <li><label>SIGNAL</label><span>{item.signal}</span></li>
                  <li><label>TYPE</label><span>{item.artifactType}</span></li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="venture-map split-panel">
          <div>
            <p className="small-label">VENTURE MAP</p>
            <h2>System graph / cross-domain engine.</h2>
          </div>
          <div className="map-lines" aria-label="Venture map visualization">
            {dossiers.map((item) => <span key={item.codename}>{item.codename}</span>)}
          </div>
        </section>

        <section>
          <p className="small-label">OPERATING DOCTRINE</p>
          <h2>Internal command doctrine.</h2>
          <ol className="doctrine-list">
            {doctrine.map((point) => <li key={point}>{point}</li>)}
          </ol>
        </section>

        <section>
          <p className="small-label">ARTIFACT DROPS</p>
          <h2>Release log / classified archive.</h2>
          <div className="drop-log">
            {drops.map((item, index) => (
              <div key={item}>
                <span>LOG {String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="signal" className="signal-box">
          <p className="small-label">SIGNAL / CONTACT</p>
          <h2>Send a signal.</h2>
          <p>For collaborators, operators, and builders aligned with long-horizon systems work.</p>
          <a href="mailto:hello@thalcor.ca">hello@thalcor.ca</a>
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
