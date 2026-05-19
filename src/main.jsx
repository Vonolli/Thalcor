import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const nodeState = [
  { label: 'THALCOR ACCESS NODE', value: 'PUBLIC CLEARANCE' },
  { label: 'SIGNAL ACTIVE', value: 'TRUE' },
  { label: 'NODE', value: 'THALCOR.CA' },
  { label: 'BUILD MODE', value: 'QUIET' },
  { label: 'COMPOUND ENGINE', value: 'ONLINE' },
  { label: 'TIMESTAMP', value: 'UTC / LIVE' }
];

const dossiers = [
  {
    codename: 'OMEGA',
    sector: 'AI Systems',
    status: 'Active Build',
    phase: 'Command Layer',
    objective: 'Deploy a persistent command intelligence for operators, code, memory, and execution.',
    artifactType: 'Command Interface',
    description: 'A private intelligence shell where models, tools, and workflows become one operating surface.'
  },
  {
    codename: 'SYMBIOTIC ROBOTICS',
    sector: 'Robotics + Ecology',
    status: 'Field Concept',
    phase: 'Stewardship Ops',
    objective: 'Merge human direction, sensors, drones, and autonomous systems for living terrain repair.',
    artifactType: 'Field Notes / Platform',
    description: 'Robotic restoration protocols for reforestation, wildfire recovery, and ecological observation.'
  },
  {
    codename: 'ELTHRIVEN',
    sector: 'Simulation + Games',
    status: 'Prototype',
    phase: 'World Engine',
    objective: 'Build a living simulated world where story, systems, and machine agents evolve in real time.',
    artifactType: 'World Snapshot',
    description: 'A sea-island simulation stack shaped by procedural design, AI entities, and atmosphere-first rendering.'
  },
  {
    codename: "O'LIXIR",
    sector: 'CPG + Performance',
    status: 'Formulation Path',
    phase: 'Flavor / Formula',
    objective: 'Engineer a clean performance beverage with strong taste and sustained energy characteristics.',
    artifactType: 'Formula Record',
    description: 'A zero-sugar product exploration with strong identity, precise chemistry, and taste-forward design.'
  },
  {
    codename: 'PETRICHOR',
    sector: 'Design + Objects',
    status: 'Artifact Studies',
    phase: 'Physical R&D',
    objective: 'Translate gothic nature, armoury detail, and industrial luxury into wearable and tangible objects.',
    artifactType: 'Material Study',
    description: 'A design archive investigating clothing, jewelry, and physical product language under one thesis.'
  },
  {
    codename: 'NIGHTBORNE',
    sector: 'Music + Media',
    status: 'Signal Building',
    phase: 'Myth Engine',
    objective: 'Construct a multimedia myth stack where sound, image, voice, and performance scale together.',
    artifactType: 'Signal Archive',
    description: 'The media vessel behind corvus!, built as a high-identity signal architecture.'
  }
];

const artifactLog = [
  'Omega command interface',
  'Symbiotic robotics field notes',
  'Elthriven world snapshots',
  "O'LIXIR formulation path",
  'Petrichor artifact studies',
  'Nightborne signal archive'
];

function App() {
  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
      <div className="signal-sweep" aria-hidden="true" />

      <header className="masthead panel">
        <span>THALCOR / PUBLIC-FACING NODE</span>
        <span>VENTURE INTELLIGENCE TERMINAL</span>
      </header>

      <main className="layout">
        <section className="access-node panel" id="top">
          <div className="boot-feed">
            {nodeState.map((item) => (
              <p key={item.label}><label>{item.label}</label><strong>{item.value}</strong></p>
            ))}
          </div>

          <div className="node-copy">
            <p className="eyebrow">ACCESS GATE / OPEN CHANNEL</p>
            <h1>Not a startup. A forge for impossible ideas.</h1>
            <p>
              A venture studio for strange machines, living systems, and compounding intelligence.
              Built quietly until the signal is impossible to ignore.
            </p>
            <p className="terminal-line">Experiments become artifacts. Artifacts become systems. Systems become leverage.</p>
            <div className="actions">
              <a href="#dossiers" className="btn solid">Enter dossiers</a>
              <a href="#signal" className="btn ghost">Open signal channel</a>
            </div>
          </div>

          <aside className="node-map" aria-label="Node map">
            <p>GRID / NORTHWEST COMPOUND</p>
            <div className="map-graphic">
              <span /><span /><span /><span /><span />
            </div>
          </aside>
        </section>

        <section className="thesis panel">
          <p className="eyebrow">THALCOR THESIS</p>
          <h2>One engine, many fronts.</h2>
          <p>
            Thalcor is the system binding AI, robotics, games, CPG, design, music, media, and future infrastructure into one compounding machine.
            The projects are not random. They are coordinated experiments in leverage.
          </p>
        </section>

        <section id="dossiers" className="dossier-zone">
          <div className="zone-head panel">
            <p className="eyebrow">CLASSIFIED DOSSIERS</p>
            <h2>Founder venture map / artifact intelligence records.</h2>
          </div>
          <div className="dossier-grid">
            {dossiers.map((item, index) => (
              <article className="dossier panel" key={item.codename}>
                <div className="dossier-head">
                  <span>FILE {String(index + 1).padStart(3, '0')}</span>
                  <span>{item.status}</span>
                </div>
                <h3>{item.codename}</h3>
                <p>{item.description}</p>
                <ul>
                  <li><label>SECTOR</label><span>{item.sector}</span></li>
                  <li><label>PHASE</label><span>{item.phase}</span></li>
                  <li><label>OBJECTIVE</label><span>{item.objective}</span></li>
                  <li><label>ARTIFACT</label><span>{item.artifactType}</span></li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="archive panel">
          <p className="eyebrow">LIVE ARCHIVE / ARTIFACT LOG</p>
          <h2>Transmission queue for future releases.</h2>
          <div className="archive-list">
            {artifactLog.map((entry, index) => (
              <div key={entry}>
                <span>ARCHIVE.{String(index + 1).padStart(2, '0')}</span>
                <p>{entry}</p>
                <time>05.19.2026 / SIGNAL QUEUED</time>
              </div>
            ))}
          </div>
        </section>

        <section id="signal" className="signal panel">
          <p className="eyebrow">SEND A SIGNAL</p>
          <h2>Open channel for serious collaborators.</h2>
          <p>
            For collaborators, builders, operators, investors, researchers, designers,
            and people who want to help build impossible things.
          </p>
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
