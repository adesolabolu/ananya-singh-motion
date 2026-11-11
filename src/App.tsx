/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  offsetClass: string;
  client: string;
  year: string;
  duration: string;
  software: string[];
  fps: string;
  synopsis: string;
  breakdown: string[];
  accentColor: string;
}

const HERO_PORTRAIT = '/src/assets/images/lagos_creative_director_hero_1794319575789.jpg';
const ABOUT_EDITORIAL = '/src/assets/images/lagos_streetwear_editorial_1794319568791.jpg';
const WORK_DANFO_SKATE = '/src/assets/images/work_danfo_skate_culture_1794319570188.jpg';
const WORK_STREETWEAR_DROP = '/src/assets/images/work_lagos_streetwear_drop_1794319570270.jpg';
const WORK_ALTE_STAGE = '/src/assets/images/work_alte_nightlife_stage_1794319572184.jpg';
const LAGOS_SKYLINE_NIGHT = '/src/assets/images/lagos_skyline_night_bridge_1794319572668.jpg';

const PROJECTS: ProjectItem[] = [
  {
    id: 'ikeja-ojota-express',
    title: 'IKEJA–OJOTA EXPRESS',
    category: 'Street Campaign',
    image: WORK_DANFO_SKATE,
    offsetClass: '',
    client: 'Wafflesncream × Eko Skate Co.',
    year: '2026',
    duration: '01:45',
    software: ['16mm Film Scan', 'After Effects', 'DaVinci Resolve'],
    fps: '60 FPS',
    synopsis:
      'High-octane street documentary and capsule launch film following mainland skate crews weaving through Ikeja–Ojota Danfo traffic at rush hour. Shot on 16mm with custom kinetic paste-up typography.',
    breakdown: [
      'Live stunt tracking alongside moving yellow-and-black Korope & Danfo buses',
      'Hand-printed Xerox zine frames scanned and composited at 24/60 hybrid frame rates',
      'Original percussion-heavy Lagos drill & log-drum score mixed for club systems',
    ],
    accentColor: '#ff33cc',
  },
  {
    id: 'lagos-grind-aw26',
    title: 'LAGOS GRIND AW26',
    category: '3D & Lookbook',
    image: WORK_STREETWEAR_DROP,
    offsetClass: 'mt-0 md:mt-12',
    client: 'Ashluxe / Heavyweight Division',
    year: '2026',
    duration: '00:58',
    software: ['Marvelous Designer', 'Cinema 4D', 'Redshift'],
    fps: '60 FPS',
    synopsis:
      'Brutalist warehouse lookbook and 3D garment simulation for the AW26 technical outerwear drop. Built inside an abandoned Apapa concrete silo with razor-sharp sunlight cuts and kinetic spec sheets.',
    breakdown: [
      'Digital twin cloth simulation in Marvelous Designer for social AR try-ons',
      'High-contrast warehouse lighting rig matching midday Lagos tropical sun',
      'Rollout assets engineered for Lekki pop-up LED totems and Instagram Reels',
    ],
    accentColor: '#ccff00',
  },
  {
    id: 'detty-december-live',
    title: 'LAGOS LIVES! STAGE',
    category: 'Stage & Nightlife',
    image: WORK_ALTE_STAGE,
    offsetClass: '',
    client: 'Homecoming / Victoria Island Live',
    year: '2025',
    duration: '03:20',
    software: ['TouchDesigner', 'Notch VFX', 'Cinema 4D'],
    fps: '60 FPS',
    synopsis:
      'Monumental 40-foot concrete-framed LED monolith visuals for a 15,000-capacity waterfront show in Victoria Island. Real-time audio-reactive Afrobeats and Alté typography synced to FOH timecode.',
    breakdown: [
      'Custom TouchDesigner stem-splitter reacting live to log drums and shakers',
      'Brutalist Yoruba-English kinetic chants rendered at 8K vertical resolution',
      'Zero-latency SMPTE timecode integration for 14 guest headline performers',
    ],
    accentColor: '#ff33cc',
  },
  {
    id: 'surulere-rooftop-zine',
    title: 'ROOFTOP SYNDICATE',
    category: 'Brand Identity',
    image: ABOUT_EDITORIAL,
    offsetClass: 'lg:mt-12',
    client: 'Alte Culture Archive / Surulere',
    year: '2026',
    duration: '02:05',
    software: ['Cavalry', 'After Effects', 'Medium Format Film'],
    fps: '24 FPS',
    synopsis:
      'Golden-hour editorial campaign and motion identity celebrating custom patchwork denim artisans from Surulere to Yaba. Paired with a physical print newspaper distributed across Lagos coffee shops and studios.',
    breakdown: [
      'Bespoke upcycled Aso-Oke and vintage denim textile macro photography',
      'Variable kinetic headline system inspired by 1980s Lagos newspaper mastheads',
      'Interactive lookbook microsite that sold out the 500-piece run in 14 minutes',
    ],
    accentColor: '#ccff00',
  },
  {
    id: 'afro-futurism-drop',
    title: 'NEO-EKO SYNDICATE',
    category: 'Art Direction',
    image: HERO_PORTRAIT,
    offsetClass: '',
    client: 'Motherlan × Global Capsule',
    year: '2026',
    duration: '01:15',
    software: ['Cinema 4D', 'Octane Render', 'DaVinci Resolve'],
    fps: '60 FPS',
    synopsis:
      'Cross-continental campaign bridging Lagos street graphic heritage with London and New York flagship pop-ups. Custom illustrated Adire-inspired geometric flight jackets brought to life with 3D motion tags.',
    breakdown: [
      'Hand-drawn vector street iconography translated into woven jacquard patterns',
      '3D holographic authenticity tags animated for NFT & physical garment verification',
      'Seeded to 40+ cultural tastemakers across Lagos, Accra, and Peckham',
    ],
    accentColor: '#ff33cc',
  },
  {
    id: 'third-mainland-midnight',
    title: '3RD MAINLAND 2AM',
    category: 'Campaign Film',
    image: LAGOS_SKYLINE_NIGHT,
    offsetClass: 'mt-0 md:mt-12',
    client: 'Paystack × Night Runners Club',
    year: '2025',
    duration: '02:40',
    software: ['Houdini FX', 'After Effects', 'anamorphic 35mm'],
    fps: '60 FPS',
    synopsis:
      'Nocturnal brand anthem film shot across the 11.8km span of Third Mainland Bridge and the Lagos Lagoon. Celebrates the night-shift creators, coders, designers, and sound engineers powering the city.',
    breakdown: [
      'Long-exposure light-trail data visualization mapped onto lagoon reflections',
      'Aerial drone photogrammetry pass of the Marina and National Theatre skyline',
      'Over 4.2M organic views across X (Twitter) and Instagram in 72 hours',
    ],
    accentColor: '#ccff00',
  },
];

const SHOWREEL_CHAPTERS = [
  { time: 0, label: '01. MAINLAND GRIT INTRO', project: 'IKEJA–OJOTA EXPRESS', fps: '60 FPS' },
  { time: 25, label: '02. HEAVYWEIGHT DROP', project: 'LAGOS GRIND AW26', fps: '60 FPS' },
  { time: 50, label: '03. DETTY DECEMBER MONOLITHS', project: 'LAGOS LIVES! STAGE', fps: '60 FPS' },
  { time: 75, label: '04. LAGOON NIGHT RUNNERS', project: '3RD MAINLAND 2AM', fps: '24 FPS' },
];

function ResilientImage({
  src,
  alt,
  className,
  fallbackLabel,
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`${className || ''} bg-brand-black flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-grid-pattern-fine opacity-30 pointer-events-none" />
        <div className="w-16 h-16 border-4 border-brand-acid flex items-center justify-center mb-3 rotate-6">
          <span className="text-brand-pink font-black text-2xl">3M</span>
        </div>
        <span className="text-brand-acid font-black uppercase tracking-tighter text-lg relative z-10">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/**
 * Procedural interactive motion canvas used inside the Archive Reel Player and Case Study Modal
 */
function MotionPreviewCanvas({
  mode,
  wireframe,
  isPlaying,
  progress,
  primaryHex,
  secondaryHex,
}: {
  mode: string;
  wireframe: boolean;
  isPlaying: boolean;
  progress: number;
  primaryHex: string;
  secondaryHex: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let tick = progress * 2;

    const render = () => {
      if (isPlaying) {
        tick += 0.035;
      }
      const w = canvas.width;
      const h = canvas.height;

      // Background
      ctx.fillStyle = '#111111';
      ctx.fillRect(0, 0, w, h);

      // Danfo Stripe / Brutalist Grid
      ctx.strokeStyle = wireframe ? `${primaryHex}55` : 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      const offset = (tick * 20) % gridSize;
      for (let x = offset; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = offset; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Dynamic geometric motion art
      const cx = w / 2;
      const cy = h / 2;

      ctx.save();
      ctx.translate(cx, cy);

      const count = 8;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + tick * 0.6;
        const radius = 55 + Math.sin(tick * 2 + i) * 35;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * (radius * 0.65);
        const size = 28 + Math.cos(tick * 1.5 + i) * 14;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(tick + i * 0.5);

        if (wireframe) {
          ctx.strokeStyle = i % 2 === 0 ? primaryHex : secondaryHex;
          ctx.lineWidth = 2.5;
          ctx.strokeRect(-size / 2, -size / 2, size, size);
        } else {
          // Brutalist hard shadow
          ctx.fillStyle = '#000000';
          ctx.fillRect(-size / 2 + 6, -size / 2 + 6, size, size);

          ctx.fillStyle = i % 2 === 0 ? primaryHex : secondaryHex;
          ctx.fillRect(-size / 2, -size / 2, size, size);
          ctx.strokeStyle = '#111111';
          ctx.lineWidth = 2.5;
          ctx.strokeRect(-size / 2, -size / 2, size, size);
        }
        ctx.restore();
      }

      // Center kinetic emblem
      ctx.beginPath();
      ctx.arc(0, 0, 32 + Math.sin(tick * 3) * 8, 0, Math.PI * 2);
      if (wireframe) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#111111';
        ctx.stroke();
      }

      ctx.restore();

      // Kinetic Typography Overlay
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 20px Inter, sans-serif';
      ctx.fillText(`LAGOS // ${mode.toUpperCase()}`, 20, h - 22);

      if (isPlaying) {
        animId = requestAnimationFrame(render);
      }
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [mode, wireframe, isPlaying, progress, primaryHex, secondaryHex]);

  return (
    <canvas
      ref={canvasRef}
      width={640}
      height={340}
      className="w-full h-full object-cover block"
    />
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [aboutTab, setAboutTab] = useState<'stack' | 'awards' | 'clients'>('stack');
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Palette mode: 'acid' (original Acid Green + Pink) or 'danfo' (Lagos Danfo Yellow + Eko Red)
  const [paletteMode, setPaletteMode] = useState<'acid' | 'danfo'>('acid');

  // Showreel state
  const [reelPlaying, setReelPlaying] = useState(true);
  const [reelProgress, setReelProgress] = useState(18);
  const [reelWireframe, setReelWireframe] = useState(false);

  // Project case study view mode
  const [caseStudyView, setCaseStudyView] = useState<'still' | 'motion'>('still');
  const [caseStudyWireframe, setCaseStudyWireframe] = useState(false);

  // Start a Project form state (with Naira & USD options)
  const [briefForm, setBriefForm] = useState({
    name: '',
    email: '',
    scope: 'Street Campaign',
    budget: '₦5M – ₦15M ($3k – $10k)',
    message: '',
  });
  const [briefSubmitted, setBriefSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ESC key handler for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowreelOpen(false);
        setActiveProject(null);
        setProjectModalOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Advance showreel progress bar when open & playing
  useEffect(() => {
    if (!showreelOpen || !reelPlaying) return;
    const interval = setInterval(() => {
      setReelProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 100);
    return () => clearInterval(interval);
  }, [showreelOpen, reelPlaying]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  const handleCopyContact = (value: string, label: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).catch(() => {});
    }
    triggerToast(`COPIED ${label}: ${value}`);
  };

  const categories = ['ALL', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const filteredProjects =
    selectedCategory === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const currentChapter =
    SHOWREEL_CHAPTERS.slice()
      .reverse()
      .find((c) => reelProgress >= c.time) || SHOWREEL_CHAPTERS[0];

  // Dynamic classes matching the original script's exact scroll/menu state logic
  const navClasses = mobileMenuOpen
    ? 'bg-transparent text-brand-acid'
    : isScrolled
      ? 'bg-brand-black text-brand-white shadow-lg'
      : 'bg-transparent text-brand-black';

  const handleBriefSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBriefSubmitted(true);
    setTimeout(() => {
      setProjectModalOpen(false);
      setBriefSubmitted(false);
      setBriefForm({
        name: '',
        email: '',
        scope: 'Street Campaign',
        budget: '₦5M – ₦15M ($3k – $10k)',
        message: '',
      });
      triggerToast('BRIEF LOCKED IN — WE WILL HIT YOU BACK WITHIN 24H');
    }, 1400);
  };

  const themeVars =
    paletteMode === 'danfo'
      ? ({
          '--color-brand-acid': '#ffd600',
          '--color-brand-pink': '#ff2a2a',
        } as React.CSSProperties)
      : undefined;

  const primaryHex = paletteMode === 'danfo' ? '#ffd600' : '#ccff00';
  const secondaryHex = paletteMode === 'danfo' ? '#ff2a2a' : '#ff33cc';

  return (
    <div
      style={themeVars}
      className="min-h-screen bg-brand-acid text-brand-black font-sans selection:bg-brand-black selection:text-brand-white overflow-x-hidden"
    >
      {/* Brutalist Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-black text-brand-acid border-4 border-brand-pink px-5 py-3 font-black uppercase text-sm tracking-wide shadow-brutal">
          {toastMessage}
        </div>
      )}

      {/* Navigation (Strict 3-zone Top Bar Contract) */}
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center gap-8 px-6 py-4 transition-all duration-300 ${navClasses}`}
      >
        <a
          href="#"
          className="text-xl font-black uppercase tracking-tighter relative z-50 whitespace-nowrap shrink-0"
        >
          THIRDMAINLAND.LAB
        </a>
        <div className="hidden md:flex gap-6 font-bold text-sm uppercase">
          <a href="#about" className="hover:underline underline-offset-4 whitespace-nowrap shrink-0">
            Manifesto
          </a>
          <a href="#work" className="hover:underline underline-offset-4 whitespace-nowrap shrink-0">
            Archive
          </a>
          <a href="#contact" className="hover:underline underline-offset-4 whitespace-nowrap shrink-0">
            Link Up
          </a>
        </div>
        <div className="flex items-center gap-3 relative z-50 shrink-0">
          <button
            type="button"
            onClick={() => setPaletteMode((m) => (m === 'acid' ? 'danfo' : 'acid'))}
            className="hidden md:inline-block bg-brand-black text-brand-white px-3 py-1.5 text-xs font-black uppercase border-2 border-brand-white hover:bg-brand-pink hover:text-brand-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            {paletteMode === 'acid' ? 'Switch: Danfo Yellow' : 'Switch: Acid Lime'}
          </button>
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden font-bold uppercase relative z-50 cursor-pointer whitespace-nowrap shrink-0"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-brand-black z-40 transform transition-transform duration-300 flex flex-col justify-center items-center ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Grid pattern for menu background texture */}
        <div className="absolute inset-0 bg-grid-pattern-fine opacity-20 pointer-events-none"></div>
        <nav className="flex flex-col gap-8 text-center relative z-10">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link text-brand-acid font-black text-6xl uppercase tracking-tighter hover:text-brand-white hover:italic transition-all"
          >
            Manifesto
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link text-brand-acid font-black text-6xl uppercase tracking-tighter hover:text-brand-white hover:italic transition-all"
          >
            Archive
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link text-brand-acid font-black text-6xl uppercase tracking-tighter hover:text-brand-white hover:italic transition-all"
          >
            Link Up
          </a>
          <button
            type="button"
            onClick={() => {
              setPaletteMode((m) => (m === 'acid' ? 'danfo' : 'acid'));
              setMobileMenuOpen(false);
            }}
            className="mt-4 bg-brand-pink text-brand-white px-6 py-2 font-black uppercase text-sm border-2 border-brand-white"
          >
            {paletteMode === 'acid' ? 'Switch to Danfo Yellow' : 'Switch to Acid Lime'}
          </button>
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-10 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-brand-acid bg-grid-pattern">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Text */}
            <div className="lg:col-span-4 text-left">
              <h1
                data-editable="text"
                data-path="hero.title"
                className="text-6xl md:text-8xl font-black leading-[0.9] uppercase tracking-tighter mb-4 text-brand-pink drop-shadow-[2px_2px_0px_#111]"
              >
                THE THIRD
                <br />
                MAINLAND
                <br />
                LAB
              </h1>
              <p
                data-editable="text"
                data-path="hero.location"
                className="font-bold text-xl uppercase tracking-widest mt-4 border-b-2 border-brand-black inline-block pb-1"
              >
                Surulere // Victoria Island
              </p>
            </div>

            {/* Center Image */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div
                onClick={() => setShowreelOpen(true)}
                title="Click to launch 2026 Lagos Culture Reel"
                className="relative z-10 border-4 border-brand-black p-2 bg-white transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer group"
              >
                <ResilientImage
                  src={HERO_PORTRAIT}
                  alt="Lagos Creative Director in Graphic Streetwear"
                  className="w-full h-[400px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-black text-white px-4 py-2 font-bold uppercase transform -rotate-3">
                  Eko Energy
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-4 text-right lg:text-left flex flex-col items-end lg:items-start">
              <h2
                data-editable="text"
                data-path="hero.subtitle"
                className="text-5xl md:text-7xl font-black leading-[0.9] uppercase tracking-tighter text-brand-black mb-6"
              >
                Culture &amp;
                <br />
                Campaigns
              </h2>
              <p
                data-editable="text"
                data-path="hero.description"
                className="font-medium text-sm md:text-base max-w-xs leading-tight mb-8"
              >
                We don't do boring agency decks. We craft raw campaign films, 3D lookbooks, and street-level brand activations for Nigeria's boldest youth brands.
              </p>
              <button
                type="button"
                onClick={() => {
                  setReelPlaying(true);
                  setShowreelOpen(true);
                }}
                className="bg-brand-black text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-white hover:text-brand-black border-2 border-brand-black transition-colors flex items-center gap-2 shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-200 cursor-pointer whitespace-nowrap shrink-0"
              >
                Peep The Archive
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 border-4 border-brand-black rounded-full opacity-20 animate-pulse"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 md:px-10 relative overflow-hidden bg-brand-pink">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-brand-black translate-x-4 translate-y-4"></div>
              <ResilientImage
                src={ABOUT_EDITORIAL}
                alt="Surulere Rooftop Streetwear Editorial"
                className="relative z-10 w-full h-[500px] object-cover border-4 border-brand-black"
              />
              <div className="absolute top-4 left-4 z-20 bg-white border-2 border-brand-black px-3 py-1 font-bold text-xs uppercase text-brand-black">
                Est. Lagos 2020
              </div>
            </div>

            <div className="order-1 md:order-2 text-white">
              <h2
                data-editable="text"
                data-path="about.heading"
                className="text-4xl md:text-6xl font-black uppercase mb-8 leading-none"
              >
                Who Are We? <br />
                <span className="text-brand-black text-2xl md:text-3xl block mt-2">
                  Mainland Grit × Island Polish
                </span>
              </h2>
              <p
                data-editable="text"
                data-path="about.quote"
                className="text-lg md:text-xl font-bold leading-relaxed mb-6"
              >
                "From Yaba tech startups to Lekki streetwear drops and Victoria Island festival stages—if it doesn't move the culture on the street, it doesn't leave our lab."
              </p>
              <p
                data-editable="text"
                data-path="about.desc"
                className="text-sm md:text-base font-medium opacity-90 leading-relaxed mb-8 max-w-md"
              >
                Born in Lagos, built for the global timeline. We blend Danfo-era graphic brutalism, 3D cloth simulation, kinetic typography, and raw 16mm documentary film to make Nigerian brands impossible to ignore.
              </p>
              <button
                type="button"
                onClick={() => setAboutExpanded((prev) => !prev)}
                className="bg-white text-brand-black px-6 py-2 rounded-full font-bold uppercase hover:bg-brand-black hover:text-white transition-colors border-2 border-transparent hover:border-white shadow-brutal hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                {aboutExpanded ? 'Close Dossier' : 'Studio Dossier'}
              </button>

              {/* Expandable Studio Dossier */}
              {aboutExpanded && (
                <div className="mt-8 bg-brand-black text-brand-white border-4 border-brand-black p-6 shadow-brutal-lg">
                  <div className="flex flex-wrap gap-2 border-b-2 border-gray-800 pb-4 mb-5">
                    <button
                      type="button"
                      onClick={() => setAboutTab('stack')}
                      className={`px-3 py-1 text-xs font-black uppercase tracking-wider cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                        aboutTab === 'stack'
                          ? 'bg-brand-acid text-brand-black'
                          : 'bg-gray-900 text-gray-300 hover:text-brand-acid'
                      }`}
                    >
                      Arsenal &amp; Services
                    </button>
                    <button
                      type="button"
                      onClick={() => setAboutTab('awards')}
                      className={`px-3 py-1 text-xs font-black uppercase tracking-wider cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                        aboutTab === 'awards'
                          ? 'bg-brand-acid text-brand-black'
                          : 'bg-gray-900 text-gray-300 hover:text-brand-acid'
                      }`}
                    >
                      Cultural Impact
                    </button>
                    <button
                      type="button"
                      onClick={() => setAboutTab('clients')}
                      className={`px-3 py-1 text-xs font-black uppercase tracking-wider cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                        aboutTab === 'clients'
                          ? 'bg-brand-acid text-brand-black'
                          : 'bg-gray-900 text-gray-300 hover:text-brand-acid'
                      }`}
                    >
                      Selected Collaborators
                    </button>
                  </div>

                  {aboutTab === 'stack' && (
                    <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                      <div>
                        <p className="text-brand-acid font-bold uppercase mb-1">Fashion &amp; 3D</p>
                        <p className="text-gray-300">Marvelous Designer · Cinema 4D · Redshift</p>
                      </div>
                      <div>
                        <p className="text-brand-acid font-bold uppercase mb-1">Film &amp; Editorial</p>
                        <p className="text-gray-300">16mm Film · DaVinci Resolve · After Effects</p>
                      </div>
                      <div>
                        <p className="text-brand-acid font-bold uppercase mb-1">Stage &amp; Experiential</p>
                        <p className="text-gray-300">TouchDesigner · Notch VFX · Arena LED Systems</p>
                      </div>
                      <div>
                        <p className="text-brand-acid font-bold uppercase mb-1">Drop Strategy</p>
                        <p className="text-gray-300">Pop-up Architecture · Zine Print · OOH Billboards</p>
                      </div>
                    </div>
                  )}

                  {aboutTab === 'awards' && (
                    <ul className="space-y-2 text-xs font-mono">
                      <li className="flex justify-between border-b border-gray-800 pb-1">
                        <span className="text-brand-acid font-bold">2026 · Homecoming Lagos</span>
                        <span className="text-gray-300">Lead Visual &amp; Stage Architecture Partner</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-800 pb-1">
                        <span className="text-brand-acid font-bold">2025 · Lagos Fashion Week</span>
                        <span className="text-gray-300">Best Digital Fashion Film &amp; Lookbook</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-brand-acid font-bold">2024 · Pitchfork / Crack Mag</span>
                        <span className="text-gray-300">Featured Visual Collective — West Africa</span>
                      </li>
                    </ul>
                  )}

                  {aboutTab === 'clients' && (
                    <div className="text-xs font-mono text-gray-300 leading-relaxed">
                      Ashluxe · Wafflesncream · Motherlan · Homecoming · Paystack · Mavin Global · Boiler Room Lagos · Chowdeck
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 px-4 md:px-10 bg-brand-acid bg-grid-pattern">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <h2
                data-editable="text"
                data-path="work.heading"
                className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-brand-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]"
              >
                Culture
                <br />
                Archive
              </h2>
              <div className="flex flex-col items-start md:items-end gap-4">
                <p className="font-bold uppercase tracking-widest border-b-2 border-brand-black">
                  Selected Drops &amp; Campaigns 2025–26
                </p>
                {/* Interactive Discipline Filter Controls */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 text-xs font-black uppercase border-2 border-brand-black transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        selectedCategory === cat
                          ? 'bg-brand-pink text-brand-white shadow-brutal -translate-y-0.5'
                          : 'bg-brand-white text-brand-black hover:bg-brand-black hover:text-brand-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-editable-list="work.items"
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => {
                    setCaseStudyView('still');
                    setActiveProject(project);
                  }}
                  className={`group relative cursor-pointer ${
                    selectedCategory === 'ALL' ? project.offsetClass : ''
                  }`}
                >
                  <div className="bg-brand-black p-1 pb-12 border-2 border-brand-black transform transition-transform hover:-translate-y-2 shadow-brutal group-hover:shadow-brutal-lg">
                    <ResilientImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-bold text-lg leading-none">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-xs uppercase">{project.category}</p>
                      </div>
                      <div className="bg-brand-pink text-brand-black p-1 rounded-full group-hover:bg-brand-acid transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 px-4 md:px-10 bg-brand-pink">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative border-4 border-brand-black inline-block p-1 bg-white">
                <ResilientImage
                  src={WORK_DANFO_SKATE}
                  alt="Lagos Danfo Street Skate Culture"
                  className="w-full max-w-sm h-auto grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 text-4xl text-brand-black bg-brand-acid px-2 border-2 border-brand-black">
                  ❝
                </div>
              </div>
            </div>
            <div className="text-white">
              <h3
                data-editable="text"
                data-path="quote.text"
                className="text-3xl md:text-5xl font-black leading-tight uppercase mb-6"
              >
                "Lagos doesn't whisper. If your brand wants to survive the timeline from Ikeja to Lekki, your visuals have to hit first."
              </h3>
              <p className="font-mono text-sm uppercase tracking-widest text-brand-black bg-white inline-block px-2 py-1">
                — Third Mainland Lab Manifesto, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-10 relative bg-brand-acid bg-grid-pattern">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase text-brand-pink mb-2 drop-shadow-[3px_3px_0px_#000]">
                Link Up
              </h2>
              <p className="text-xl font-bold uppercase tracking-wide mb-12">
                No dulling. Let's build something loud for the culture.
              </p>

              <div className="space-y-8 relative">
                {/* Decorative Path Line (SVG) */}
                <svg className="absolute top-0 left-4 h-full w-20 pointer-events-none hidden md:block -z-10">
                  <path
                    d="M 10 10 Q 50 50 10 100 T 10 200"
                    stroke="black"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                  ></path>
                </svg>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <a
                    href="mailto:holla@thirdmainland.lab"
                    onClick={(e) => handleCopyContact('holla@thirdmainland.lab', 'EMAIL', e)}
                    className="text-2xl font-black uppercase hover:text-brand-pink transition-colors"
                  >
                    holla@thirdmainland.lab
                  </a>
                </div>

                <div className="flex items-center gap-6 group ml-0 md:ml-8">
                  <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <a
                    href="#contact"
                    onClick={(e) => handleCopyContact('@thirdmainland.lab', 'INSTAGRAM', e)}
                    className="text-2xl font-black uppercase hover:text-brand-pink transition-colors"
                  >
                    @thirdmainland.lab
                  </a>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </div>
                  <a
                    href="#contact"
                    onClick={(e) => handleCopyContact('+234 809 330 0419', 'WHATSAPP / STUDIO LINE', e)}
                    className="text-2xl font-black uppercase hover:text-brand-pink transition-colors"
                  >
                    +234 (0) 809 330 0419
                  </a>
                </div>
              </div>

              <div className="mt-16">
                <button
                  type="button"
                  onClick={() => setProjectModalOpen(true)}
                  className="bg-brand-pink text-white px-10 py-4 rounded-full font-black uppercase text-lg hover:bg-brand-black hover:text-white border-4 border-brand-black shadow-brutal-lg hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  Book A Campaign
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-brand-pink transform rotate-3 translate-x-4 translate-y-4 border-4 border-brand-black"></div>
              <ResilientImage
                src={LAGOS_SKYLINE_NIGHT}
                className="relative z-10 w-full h-[600px] object-cover border-4 border-brand-black grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                alt="Third Mainland Bridge & Lagos Island Night Skyline"
              />
              {/* Overlay Text on Image */}
              <div className="absolute bottom-10 left-0 z-20 bg-brand-black text-white px-6 py-2 text-2xl font-black uppercase">
                Lagos // Global
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer structure from design */}
      <footer>
        {/* Stripe Separator before Footer */}
        <div className="w-full h-12 flex flex-col justify-between py-2 bg-brand-white border-y-4 border-brand-black">
          <div className="w-full h-1 bg-brand-black"></div>
          <div className="w-full h-1 bg-brand-black"></div>
          <div className="w-full h-1 bg-brand-black"></div>
        </div>

        <div className="bg-brand-black text-brand-white pt-20 pb-10 px-4 md:px-10 relative overflow-hidden bg-grid-pattern-fine">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative z-10">
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-bold uppercase tracking-widest text-gray-500 mb-6 text-xs">
                Manifesto
              </h4>
              <p className="text-xl md:text-2xl font-bold leading-relaxed max-w-md">
                Mainland grit meets Island polish. Creating campaign films, 3D drops, and stage visuals that own the timeline from Lagos to the world.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-gray-500 mb-6 text-xs">
                Channels
              </h4>
              <ul className="space-y-2 font-bold uppercase text-lg">
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleCopyContact('@thirdmainland.lab', 'INSTAGRAM', e)}
                    data-editable="text"
                    data-path="footer.socials.0"
                    className="hover:text-brand-pink transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    onClick={(e) => handleCopyContact('behance.net/thirdmainlandlab', 'BEHANCE', e)}
                    data-editable="text"
                    data-path="footer.socials.1"
                    className="hover:text-brand-pink transition-colors"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowreelOpen(true);
                    }}
                    data-editable="text"
                    data-path="footer.socials.2"
                    className="hover:text-brand-pink transition-colors"
                  >
                    Showreel
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleCopyContact('+234 809 330 0419', 'WHATSAPP', e)}
                    data-editable="text"
                    data-path="footer.socials.3"
                    className="hover:text-brand-pink transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-gray-500 mb-6 text-xs">
                Navigation
              </h4>
              <ul className="space-y-2 font-bold uppercase text-lg">
                <li>
                  <a href="#" className="hover:text-brand-pink transition-colors">
                    Top
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-brand-pink transition-colors">
                    Manifesto
                  </a>
                </li>
                <li>
                  <a href="#work" className="hover:text-brand-pink transition-colors">
                    Archive
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-brand-pink transition-colors">
                    Link Up
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Big Name */}
          <div className="border-t border-gray-800 pt-10 relative z-10">
            <h1 className="text-[9.5vw] leading-none font-black uppercase text-center md:text-left text-stroke tracking-tighter">
              THIRD MAINLAND LAB
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-xs font-mono text-gray-500 uppercase">
              <p>© 2026 Third Mainland Lab (Lagos, NG). All rights reserved.</p>
              <p>Surulere × Victoria Island · Brutalist Edition</p>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MODAL 1: INTERACTIVE ARCHIVE REEL LIGHTBOX
         ===================================================================== */}
      {showreelOpen && (
        <div
          className="fixed inset-0 z-50 bg-brand-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setShowreelOpen(false)}
        >
          <div
            className="bg-brand-acid border-4 border-brand-black max-w-4xl w-full p-4 md:p-6 shadow-brutal-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 border-b-4 border-brand-black pb-3">
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-brand-black">
                  THIRD MAINLAND LAB — 2026 ARCHIVE REEL
                </h3>
                <p className="text-xs font-mono uppercase text-brand-black">
                  {currentChapter.label} · {currentChapter.fps} · LAGOS, NIGERIA
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowreelOpen(false)}
                className="bg-brand-black text-brand-white hover:bg-brand-pink hover:text-brand-black border-2 border-brand-black px-4 py-1.5 font-black uppercase text-sm cursor-pointer transition-colors"
              >
                ESC / CLOSE ✕
              </button>
            </div>

            {/* Interactive Canvas Viewport */}
            <div className="relative border-4 border-brand-black bg-brand-black aspect-video overflow-hidden">
              <MotionPreviewCanvas
                mode={currentChapter.label}
                wireframe={reelWireframe}
                isPlaying={reelPlaying}
                progress={reelProgress}
                primaryHex={primaryHex}
                secondaryHex={secondaryHex}
              />
              <div className="absolute top-3 left-3 bg-brand-pink text-brand-white border-2 border-brand-black px-3 py-0.5 text-xs font-black uppercase">
                {reelWireframe ? 'WIREFRAME PASS' : 'FINAL MASTER PASS'}
              </div>
              <div className="absolute top-3 right-3 bg-brand-black text-brand-acid border border-brand-acid px-2.5 py-0.5 text-xs font-mono">
                TC 00:00:{String(Math.floor((reelProgress / 100) * 59)).padStart(2, '0')}:18
              </div>
            </div>

            {/* Scrubber & Controls */}
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setReelPlaying((p) => !p)}
                  className="bg-brand-black text-brand-white hover:bg-brand-pink hover:text-brand-white border-2 border-brand-black px-5 py-2 font-black uppercase text-xs cursor-pointer transition-colors whitespace-nowrap shrink-0"
                >
                  {reelPlaying ? 'PAUSE ❚❚' : 'PLAY ▶'}
                </button>

                <input
                  type="range"
                  min={0}
                  max={100}
                  value={reelProgress}
                  onChange={(e) => setReelProgress(Number(e.target.value))}
                  aria-label="Showreel timeline scrubber"
                  className="w-full accent-brand-pink cursor-pointer h-3 bg-brand-black border-2 border-brand-black"
                />

                <button
                  type="button"
                  onClick={() => setReelWireframe((w) => !w)}
                  className={`px-4 py-2 font-black uppercase text-xs border-2 border-brand-black cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                    reelWireframe
                      ? 'bg-brand-pink text-brand-white'
                      : 'bg-brand-white text-brand-black hover:bg-brand-black hover:text-brand-white'
                  }`}
                >
                  {reelWireframe ? 'SHADED VIEW' : 'WIREFRAME'}
                </button>
              </div>

              {/* Chapter jump buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {SHOWREEL_CHAPTERS.map((chap) => (
                  <button
                    key={chap.label}
                    type="button"
                    onClick={() => setReelProgress(chap.time)}
                    className={`text-left p-2 border-2 border-brand-black font-bold text-xs uppercase transition-colors cursor-pointer ${
                      currentChapter.label === chap.label
                        ? 'bg-brand-black text-brand-acid'
                        : 'bg-brand-white text-brand-black hover:bg-brand-pink hover:text-white'
                    }`}
                  >
                    <div className="truncate">{chap.label}</div>
                    <div className="text-[10px] opacity-75 font-mono">{chap.project}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 2: PROJECT CASE STUDY LIGHTBOX
         ===================================================================== */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-brand-black/90 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-brand-white border-4 border-brand-black max-w-4xl w-full p-5 md:p-8 shadow-brutal-lg relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap justify-between items-start gap-4 border-b-4 border-brand-black pb-4 mb-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-brand-pink font-bold">
                  {activeProject.category} · {activeProject.year} · {activeProject.fps}
                </p>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-black">
                  {activeProject.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setCaseStudyView((v) => (v === 'still' ? 'motion' : 'still'))
                  }
                  className="bg-brand-acid text-brand-black border-2 border-brand-black px-4 py-1.5 font-black uppercase text-xs cursor-pointer hover:bg-brand-pink hover:text-white transition-colors whitespace-nowrap shrink-0"
                >
                  {caseStudyView === 'still' ? 'LAUNCH MOTION RIG ▶' : 'SHOW CAMPAIGN STILL'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="bg-brand-black text-brand-white hover:bg-brand-pink hover:text-brand-white border-2 border-brand-black px-4 py-1.5 font-black uppercase text-xs cursor-pointer transition-colors whitespace-nowrap shrink-0"
                >
                  CLOSE ✕
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 border-4 border-brand-black bg-brand-black relative overflow-hidden">
                {caseStudyView === 'still' ? (
                  <ResilientImage
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-80 object-cover"
                  />
                ) : (
                  <div className="w-full h-80 relative">
                    <MotionPreviewCanvas
                      mode={`${activeProject.title} // ${activeProject.category}`}
                      wireframe={caseStudyWireframe}
                      isPlaying={true}
                      progress={35}
                      primaryHex={primaryHex}
                      secondaryHex={secondaryHex}
                    />
                    <button
                      type="button"
                      onClick={() => setCaseStudyWireframe((w) => !w)}
                      className="absolute top-3 right-3 bg-brand-acid text-brand-black border-2 border-brand-black px-3 py-1 text-xs font-black uppercase cursor-pointer"
                    >
                      {caseStudyWireframe ? 'SHADED PASS' : 'WIREFRAME PASS'}
                    </button>
                  </div>
                )}
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="bg-brand-acid border-2 border-brand-black p-4">
                  <div className="text-xs font-mono uppercase text-brand-black">
                    Brand: <strong className="font-black">{activeProject.client}</strong> · Runtime:{' '}
                    <strong className="font-black">{activeProject.duration}</strong>
                  </div>
                  <div className="text-xs font-mono uppercase text-brand-black mt-1">
                    Pipeline: {activeProject.software.join(' · ')}
                  </div>
                </div>

                <p className="text-sm font-medium leading-relaxed text-brand-black">
                  {activeProject.synopsis}
                </p>

                <div>
                  <h4 className="font-black uppercase text-xs tracking-wider mb-2 text-brand-black">
                    Execution Breakdown
                  </h4>
                  <ul className="space-y-1.5 text-xs font-medium text-brand-black">
                    {activeProject.breakdown.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-black text-brand-pink">0{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Prev/Next Navigation */}
            <div className="mt-6 pt-4 border-t-2 border-brand-black flex justify-between items-center">
              <button
                type="button"
                onClick={() => {
                  const idx = PROJECTS.findIndex((p) => p.id === activeProject.id);
                  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
                  setActiveProject(prev);
                }}
                className="font-black uppercase text-xs border-2 border-brand-black px-4 py-2 hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer"
              >
                ← Prev Drop
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveProject(null);
                  setBriefForm((f) => ({ ...f, scope: activeProject.category }));
                  setProjectModalOpen(true);
                }}
                className="bg-brand-pink text-white font-black uppercase text-xs border-2 border-brand-black px-5 py-2 shadow-brutal hover:shadow-none transition-all cursor-pointer"
              >
                Book Similar Campaign
              </button>
              <button
                type="button"
                onClick={() => {
                  const idx = PROJECTS.findIndex((p) => p.id === activeProject.id);
                  const next = PROJECTS[(idx + 1) % PROJECTS.length];
                  setActiveProject(next);
                }}
                className="font-black uppercase text-xs border-2 border-brand-black px-4 py-2 hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer"
              >
                Next Drop →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 3: BOOK A CAMPAIGN / COMMISSION BRIEF MODAL
         ===================================================================== */}
      {projectModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-brand-black/90 flex items-center justify-center p-4"
          onClick={() => setProjectModalOpen(false)}
        >
          <div
            className="bg-brand-acid border-4 border-brand-black max-w-xl w-full p-6 md:p-8 shadow-brutal-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b-4 border-brand-black pb-4 mb-6">
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-brand-black">
                  BOOK A CAMPAIGN
                </h3>
                <p className="text-xs font-mono uppercase text-brand-black">
                  SURULERE // VICTORIA ISLAND // WORLDWIDE
                </p>
              </div>
              <button
                type="button"
                onClick={() => setProjectModalOpen(false)}
                className="bg-brand-black text-white px-3 py-1 font-black uppercase text-xs cursor-pointer hover:bg-brand-pink"
              >
                ✕
              </button>
            </div>

            {briefSubmitted ? (
              <div className="bg-brand-black text-brand-acid p-8 border-4 border-brand-pink text-center space-y-3">
                <p className="text-3xl font-black uppercase">BRIEF LOCKED IN</p>
                <p className="text-sm font-mono text-white">
                  Respect, {briefForm.name || 'Fam'}! Our producers in Lagos will review your {briefForm.scope} brief and hit you back within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBriefSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase mb-1">
                      Your Name / Brand
                    </label>
                    <input
                      type="text"
                      required
                      value={briefForm.name}
                      onChange={(e) => setBriefForm({ ...briefForm, name: e.target.value })}
                      placeholder="Tunde / Eko Streetwear"
                      className="w-full bg-white border-2 border-brand-black px-3 py-2 text-sm font-bold focus:outline-none focus:bg-brand-pink/10"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase mb-1">
                      Email or WhatsApp
                    </label>
                    <input
                      type="text"
                      required
                      value={briefForm.email}
                      onChange={(e) => setBriefForm({ ...briefForm, email: e.target.value })}
                      placeholder="tunde@brand.ng / +234..."
                      className="w-full bg-white border-2 border-brand-black px-3 py-2 text-sm font-bold focus:outline-none focus:bg-brand-pink/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase mb-1">
                      Campaign Type
                    </label>
                    <select
                      value={briefForm.scope}
                      onChange={(e) => setBriefForm({ ...briefForm, scope: e.target.value })}
                      className="w-full bg-white border-2 border-brand-black px-3 py-2 text-sm font-bold"
                    >
                      <option>Street Campaign</option>
                      <option>3D &amp; Lookbook</option>
                      <option>Stage &amp; Nightlife</option>
                      <option>Brand Identity</option>
                      <option>Art Direction</option>
                      <option>Campaign Film</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase mb-1">
                      Budget Range (₦ / $)
                    </label>
                    <select
                      value={briefForm.budget}
                      onChange={(e) => setBriefForm({ ...briefForm, budget: e.target.value })}
                      className="w-full bg-white border-2 border-brand-black px-3 py-2 text-sm font-bold"
                    >
                      <option>₦2M – ₦5M ($1.5k – $3k)</option>
                      <option>₦5M – ₦15M ($3k – $10k)</option>
                      <option>₦15M – ₦40M ($10k – $25k)</option>
                      <option>₦40M+ ($25k+ Full Rollout)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase mb-1">
                    Drop Details &amp; Target Timeline
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={briefForm.message}
                    onChange={(e) => setBriefForm({ ...briefForm, message: e.target.value })}
                    placeholder="Tell us about the collection drop, Detty December show, or product launch..."
                    className="w-full bg-white border-2 border-brand-black px-3 py-2 text-sm font-bold focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setProjectModalOpen(false)}
                    className="bg-white text-brand-black border-2 border-brand-black px-5 py-2.5 font-black uppercase text-xs cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-brand-pink text-white border-2 border-brand-black px-8 py-2.5 font-black uppercase text-xs shadow-brutal hover:bg-brand-black transition-colors cursor-pointer"
                  >
                    Lock In Brief →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
