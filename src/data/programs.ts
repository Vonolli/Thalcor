export type Program = {
  name: string;
  label: string;
  description: string;
  copy: string;
};

export type ProgramCategory = {
  title: string;
  slug: string;
  thesis: string;
  programs: Program[];
};

export const programCategories: ProgramCategory[] = [
  {
    title: 'Intelligence Systems',
    slug: 'intelligence',
    thesis: 'Memory, analysis, decision systems, and founder tooling that turn raw thinking into leverage.',
    programs: [
      {
        name: 'O.M.E.G.A',
        label: 'Personal AI / Digital Twin / Intelligence Layer',
        description:
          'Omega is Thalcor’s internal intelligence system: a memory-based AI designed to learn the founder’s thinking patterns, projects, frameworks, decisions, and long-term goals.',
        copy: 'An evolving intelligence layer built to remember, reason, organize, and compound knowledge across every Thalcor project.',
      },
      {
        name: 'Thalcor Idea Engine',
        label: 'Project filtering, grading, and venture selection system',
        description:
          'An internal evaluation system for originality, feasibility, funding potential, defensibility, market need, execution cost, and founder fit.',
        copy: 'Before a project becomes a company, it passes through Thalcor’s internal idea filter: a decision system built to separate noise from real opportunity.',
      },
      {
        name: 'VentureIQ',
        label: 'Startup analysis / investor intelligence tool',
        description:
          'A software concept for analyzing pitch decks, startup opportunities, market quality, founder signals, and investment logic.',
        copy: 'An intelligence tool for decoding venture opportunities faster, deeper, and with clearer investment logic.',
      },
      {
        name: 'Startup Clarity Sprint',
        label: 'Founder consulting / early-stage strategy product',
        description:
          'A focused offer to help early founders clarify their idea, business model, positioning, first customers, and next actions.',
        copy: 'A practical founder sprint for turning vague ideas into sharper offers, clearer strategy, and usable next actions.',
      },
    ],
  },
  {
    title: 'Future Hardware',
    slug: 'future-hardware',
    thesis: 'Physical interfaces, human augmentation, robotics, food systems, and flight concepts built around practical frontiers.',
    programs: [
      {
        name: 'Wrist Neuromotor Interface',
        label: 'Muscle-signal command device',
        description:
          'A wrist-worn interface that reads subtle forearm activity and turns human intention into digital commands.',
        copy: 'A wearable command layer for controlling digital systems through subtle human movement.',
      },
      {
        name: 'Smart Arm Device',
        label: 'Wearable AI controller / physical interface',
        description:
          'A left-arm command device concept combining buttons, rotary controls, display, sensors, and eventually AI integration.',
        copy: 'A physical command device for interacting with AI, tools, and digital environments without being trapped behind a normal screen.',
      },
      {
        name: 'Assistive Perception Hardware',
        label: 'Human augmentation tools',
        description:
          'A family of devices for better hearing, low-vision assistance, environmental awareness, discreet guidance, and simplified device control.',
        copy: 'Hardware systems designed to extend human perception, independence, and control.',
      },
      {
        name: 'Human-Guided Robotics / Exosystems',
        label: 'Robotic strength guided by human judgment',
        description:
          'A long-term platform for exoskeletons, human-directed robot arms, industrial support tools, and remote physical work systems.',
        copy: 'Robotic systems that keep humans in the loop: combining machine strength with human judgment.',
      },
      {
        name: 'Symbiotic Nature Robotics',
        label: 'Robots for environmental stewardship',
        description:
          'Robots that plant trees, restore land, monitor ecosystems, clean areas, and help humans become better stewards of nature.',
        copy: 'Robotics designed not to replace nature, but to help repair and protect it.',
      },
      {
        name: 'Vonaeroponics',
        label: 'Advanced growing systems / controlled agriculture',
        description:
          'A future agriculture concept at the intersection of hardware, food systems, automation, and controlled-environment agriculture.',
        copy: 'A controlled-growing system exploring cleaner food production, efficient plant growth, and the future of compact agriculture.',
      },
      {
        name: 'Personal Flight / VTOL Concepts',
        label: 'Small aircraft and flying vehicle research',
        description:
          'A speculative design program exploring safer, simpler, more economical personal flight systems with redundancy and emergency descent.',
        copy: 'An exploratory aviation lab studying what personal flight would need to become safer, simpler, and more practical.',
      },
    ],
  },
  {
    title: 'Consumer Brands',
    slug: 'consumer-brands',
    thesis: 'Focused product brands around energy, design, candy, wellness routines, and everyday rituals.',
    programs: [
      {
        name: 'O’LIXIR ENERGY',
        label: 'Clean functional energy drink',
        description:
          'A clean energy drink concept focused on sustained energy, zero sugar, low calories, natural caffeine, functional ingredients, and hydration support.',
        copy: 'A functional energy drink concept built for clean energy, sharper focus, and a better daily ritual.',
      },
      {
        name: 'Petrichor',
        label: 'Clothing, jewelry, and design brand',
        description:
          'A personal design brand for clothing, jewelry, accessories, rings, hoodies, sneakers, wallets, keychains, and future physical experiments.',
        copy: 'A design house for atmospheric clothing, jewelry, objects, and wearable artifacts.',
      },
      {
        name: 'Clean Sour Strap Candy',
        label: 'Better-for-you rainbow candy',
        description:
          'A candy concept focused on sour rainbow straps without artificial colours, artificial flavours, gelatin, or cheap filler ingredients.',
        copy: 'A cleaner sour candy experiment built around real colour, real flavour, and the same addictive rainbow-strip experience.',
      },
      {
        name: 'Wellness Routine Products',
        label: 'AM/PM functional consumer products',
        description:
          'Daily routine product concepts for morning and night rituals, focus, calm, energy, and sleep support.',
        copy: 'A daily rhythm product concept exploring how simple consumer rituals can support energy, calm, sleep, and focus.',
      },
    ],
  },
  {
    title: 'Interactive Worlds',
    slug: 'interactive-worlds',
    thesis: 'Game systems and playful worlds where atmosphere, discovery, mechanics, and IP can compound together.',
    programs: [
      {
        name: 'Elthriven',
        label: 'Open-world fantasy / survival game system',
        description:
          'An experimental worldbuilding and game-systems project with procedural islands, survival, ocean travel, and player-driven discovery.',
        copy: 'An experimental worldbuilding and game-systems project exploring procedural islands, survival, ocean travel, and player-driven discovery.',
      },
      {
        name: 'Candy Island',
        label: 'Candy-land RPG / cozy adventure world',
        description:
          'A colourful candy-themed game concept with exploration, minigames, mystery, strange creatures, gathering, grappling, collecting, and magic.',
        copy: 'A playful fantasy island where candy landscapes, cozy adventure, strange creatures, and minigames become the foundation for a larger RPG world.',
      },
      {
        name: 'Laughingstock',
        label: 'Colourful playful IP / design world',
        description:
          'A bright, weird, playful creative world for characters, products, animation, short content, game assets, and visual drops.',
        copy: 'A colourful IP playground for characters, strange products, visual experiments, and playful worldbuilding.',
      },
    ],
  },
  {
    title: 'Creative IP',
    slug: 'creative-ip',
    thesis: 'Music, story worlds, animation concepts, and media execution treated as durable intellectual property.',
    programs: [
      {
        name: 'Nightborne',
        label: 'Music, performance, and cinematic identity',
        description:
          'The music label and creative world around the artist project, holding songs, visuals, videos, performances, cover art, and short-form content.',
        copy: 'A music and visual label for songs, performances, atmosphere, and cinematic identity.',
      },
      {
        name: 'Forgotten Thorn',
        label: 'Dark fantasy novel / story world',
        description:
          'A dark fantasy story about survival, transformation, nature, violence, and becoming something harder than the world that broke you.',
        copy: 'A dark fantasy story world about survival, myth, nature, violence, and the making of an anti-hero.',
      },
      {
        name: 'Dead Western / Cyberpunk Anime',
        label: 'Animated story concept',
        description:
          'A stylized anime concept blending western myth, death, cyberpunk, revenge, strange landscapes, and cinematic worldbuilding.',
        copy: 'A cinematic anime concept where western myth, death, technology, and revenge collide.',
      },
      {
        name: 'Thalcor Media Lab',
        label: 'Film, editing, performance, and execution proof',
        description:
          'A proof-of-execution arm for acting, editing, storytelling, short films, skits, founder content, strange documentaries, and low-budget cinematic production.',
        copy: 'A media lab proving that strong execution, editing, performance, and story can beat budget.',
      },
    ],
  },
  {
    title: 'Built Environment',
    slug: 'built-environment',
    thesis: 'Practical infrastructure for housing, land, location strategy, and real-world deployment.',
    programs: [
      {
        name: 'Thalcor Habitat',
        label: 'Cold-climate modular housing',
        description:
          'Modular cabins and small homes for real climates, including ADUs, workforce housing, resort units, utilities, permitting support, and partner models.',
        copy: 'Beautiful modular housing systems designed for real climates, scalable deployment, and practical land use.',
      },
      {
        name: 'Land Systems Lab',
        label: 'Undervalued land and development strategy',
        description:
          'A research area around hidden land value, location logic, subdivision potential, housing demand, infrastructure access, and development pathways.',
        copy: 'A real-assets research track studying land, housing, location advantage, and overlooked development opportunities.',
      },
    ],
  },
  {
    title: 'Venture Infrastructure',
    slug: 'venture-infrastructure',
    thesis: 'The operating layer for turning ambitious concepts into proof, then into packaged opportunities.',
    programs: [
      {
        name: 'Thalcor Venture Studio',
        label: 'Parent studio / venture-building model',
        description:
          'The main model: build ideas internally, create proof, spin out the strongest projects, and let investors or partners back specific ventures.',
        copy: 'Thalcor builds, tests, and packages early-stage concepts into clearer venture opportunities.',
      },
      {
        name: 'Thalcor Drops',
        label: 'Public artifacts and proof releases',
        description:
          'Demos, concept pages, product renders, research briefs, mockups, landing pages, prototype videos, supplier maps, pitch one-pagers, and small tools.',
        copy: 'Drops are proof artifacts: small public releases showing what Thalcor is thinking, building, testing, or preparing.',
      },
      {
        name: 'Research Briefs',
        label: 'Public-facing thinking documents',
        description:
          'Short documents explaining markets, technologies, product opportunities, first-principles breakdowns, and why a project matters.',
        copy: 'Research briefs turn raw thinking into readable signals: market logic, technical notes, opportunity maps, and founder analysis.',
      },
      {
        name: 'Investor / Talent Portal',
        label: 'People who want to help build',
        description:
          'A way for investors, builders, designers, engineers, manufacturers, operators, and collaborators to express interest in specific projects.',
        copy: 'Thalcor is built to attract capital, skill, and aligned people around specific projects instead of vague networking.',
      },
    ],
  },
];

export const featuredProgramNames = [
  'O.M.E.G.A',
  'Wrist Neuromotor Interface',
  'O’LIXIR ENERGY',
  'Elthriven',
  'Thalcor Habitat',
  'Thalcor Venture Studio',
];

export const allPrograms = programCategories.flatMap((category) =>
  category.programs.map((program) => ({ ...program, category: category.title, slug: category.slug }))
);
