const dossiers = [
  {
    codename: 'OMEGA',
    sector: 'AI COMMAND LAYERS',
    status: 'ACTIVE',
    phase: 'OMEGA STACK',
    objective: 'Unify operators, models, memory, and execution into one command surface.',
    description: 'A private control architecture where experiments are orchestrated as a single compounding system.'
  },
  {
    codename: 'SYMBIOTIC ROBOTICS',
    sector: 'ECOLOGICAL ROBOTICS',
    status: 'FIELD BUILD',
    phase: 'AUTONOMY TRIALS',
    objective: 'Deploy adaptive robotics for restoration, terrain intelligence, and stewardship operations.',
    description: 'Machine ecologies designed to collaborate with human crews in living landscapes.'
  },
  {
    codename: 'ELTHRIVEN',
    sector: 'GAME WORLDS',
    status: 'PROTOTYPE',
    phase: 'WORLD ENGINE',
    objective: 'Construct a persistent world simulation where story, systems, and agents evolve continuously.',
    description: 'A mythic simulation layer blending procedural generation, dramatic narrative, and AI entities.'
  },
  {
    codename: "O'LIXIR",
    sector: 'CONSUMER PRODUCTS',
    status: 'FORMULATION',
    phase: 'CHEMISTRY / FLAVOR',
    objective: 'Engineer a zero-sugar performance beverage with precise chemistry and premium identity.',
    description: 'A product laboratory for taste-forward energy systems and disciplined brand signal.'
  },
  {
    codename: 'PETRICHOR',
    sector: 'DESIGN ARTIFACTS',
    status: 'MATERIAL STUDY',
    phase: 'OBJECT LANGUAGE',
    objective: 'Translate gothic naturalism and industrial luxury into physical objects and wearables.',
    description: 'A classified archive of form, material, and ritual-driven design systems.'
  },
  {
    codename: 'NIGHTBORNE',
    sector: 'CREATIVE INFRASTRUCTURE',
    status: 'SIGNAL BUILD',
    phase: 'MEDIA ENGINE',
    objective: 'Scale a unified audiovisual myth stack across music, visual worlds, and live expression.',
    description: 'An identity machine where sound, symbol, and narrative compound into cultural leverage.'
  }
];

const artifactLog = [
  { id: 'ART-001', item: 'OMEGA CONTROL SURFACE', state: 'SIGNAL LOCKED' },
  { id: 'ART-002', item: 'SYMBIOTIC FIELD KIT', state: 'CALIBRATING' },
  { id: 'ART-003', item: 'ELTHRIVEN WORLD SNAPSHOT', state: 'ARCHIVED' }
];

export default function App() {
  return (
    <div className="thalcor-system">
      <div className="system-texture" aria-hidden="true" />
      <div className="system-grid" aria-hidden="true" />
      <div className="system-scanline" aria-hidden="true" />
      <div className="system-sweep" aria-hidden="true" />

      <header className="top-bar">
        <span>THALCOR ACCESS NODE</span>
        <span>PUBLIC CLEARANCE</span>
        <span>SIGNAL ACTIVE</span>
        <span>NODE: THALCOR.CA</span>
      </header>

      <main className="main-frame">
        <section className="hero-grid">
          <div className="hero-left">
            <p className="meta">BLACKSITE / PUBLIC TERMINAL</p>
            <h1>Building strange machines for the next world.</h1>
            <p className="hero-line">Build quietly. Release artifacts. Compound leverage.</p>
            <p className="core-description">
              Thalcor is a private venture studio and systems workshop building AI command layers, ecological robotics, game worlds, consumer products, design artifacts, and creative infrastructure.
            </p>
            <p className="statement">Not a startup. A forge for impossible ideas.</p>
            <p className="statement">Experiments become artifacts. Artifacts become systems. Systems become leverage.</p>
            <p className="statement">Built quietly until the signal is impossible to ignore.</p>
          </div>

          <aside className="status-panel">
            <p className="meta">TERMINAL STATUS / LIVE</p>
            <ul>
              <li><label>SYSTEM STATE</label><strong>COMPOUNDING</strong></li>
              <li><label>BUILD MODE</label><strong>QUIET</strong></li>
              <li><label>RELEASE TYPE</label><strong>ARTIFACT DROP</strong></li>
              <li><label>ACTIVE NODE</label><strong>OMEGA</strong></li>
            </ul>
          </aside>
        </section>

        <section className="dossier-section">
          <p className="meta">VENTURE DOSSIERS</p>
          {dossiers.map((item, index) => (
            <article className="dossier-file" key={item.codename}>
              <div className="file-head">
                <span>FILE-{String(index + 1).padStart(3, '0')}</span>
                <span>{item.status}</span>
              </div>
              <h2>{item.codename}</h2>
              <dl>
                <div><dt>SECTOR</dt><dd>{item.sector}</dd></div>
                <div><dt>STATUS</dt><dd>{item.status}</dd></div>
                <div><dt>PHASE</dt><dd>{item.phase}</dd></div>
                <div><dt>OBJECTIVE</dt><dd>{item.objective}</dd></div>
              </dl>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className="artifact-section">
          <p className="meta">ARTIFACT LOG / RELEASE ARCHIVE</p>
          <div className="artifact-table" role="table" aria-label="Artifact release archive">
            {artifactLog.map((entry) => (
              <div className="artifact-row" role="row" key={entry.id}>
                <span>{entry.id}</span>
                <span>{entry.item}</span>
                <span>{entry.state}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <p className="meta">CHANNEL HANDSHAKE</p>
          <h2>SEND A SIGNAL</h2>
          <p>Open a direct channel for aligned operators, collaborators, and serious builders.</p>
          <a href="mailto:hello@thalcor.ca">hello@thalcor.ca</a>
        </section>
      </main>

      <div className="build-badge">THALCOR VISUAL SYSTEM V1</div>
    </div>
  );
}
