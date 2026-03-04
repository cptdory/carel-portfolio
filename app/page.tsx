"use client";

import { useState, useEffect, useRef } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const navItems = ["Home", "About", "Experience", "Skills", "Contact"];

  const experiences = [
    {
      role: "Office Staff / Filing & Records Clerk",
      org: "Law Firm Notary Public",
      icon: "⚖️",
      desc: "Managed legal documentation, records management, and administrative operations with precision.",
    },
    {
      role: "Social Media Manager · Writer · Content Creator · Editor · Voice Actress · Production Crew",
      org: "106.7 Energy FM",
      icon: "📻",
      desc: "Multi-faceted role spanning on-air voice work, digital content creation, social media strategy, and behind-the-scenes production.",
    },
    {
      role: "Researcher · Transcriptionist · Production Crew",
      org: "The Probe Archives",
      icon: "🎬",
      desc: "Supported investigative journalism through deep research, accurate transcription, and production assistance.",
    },
    {
      role: "Social Media Ad Evaluator · Text & Image Evaluator · Transcriptionist",
      org: "Appen Crowdgen",
      icon: "💻",
      desc: "Evaluated digital advertising content and media accuracy with keen analytical attention.",
    },
    {
      role: "Content Creator · Script Writer · Editor · Social Media Manager · Digital Marketer · Graphic Designer",
      org: "BOIE Inc.",
      icon: "🏢",
      desc: "Drove brand presence through content creation, scriptwriting, graphic design, and digital marketing — including Facebook ad boosting, campaign management, and performance analytics.",
    },
  ];

  const skills = [
    { label: "Singer & Songwriter / Producer", icon: "🎵" },
    { label: "Film Maker", icon: "🎥" },
    { label: "Script Writer", icon: "✍️" },
    { label: "Photography", icon: "📸" },
    { label: "Audio & Video Editor", icon: "🎚️" },
    { label: "Sound Designer / Engineer", icon: "🎛️" },
    { label: "Social Media Manager", icon: "📱" },
    { label: "Graphic Designer", icon: "🎨" },
    { label: "Digital Marketing", icon: "📣" },
    { label: "Facebook Ads & Boosting", icon: "📊" },
    { label: "Tech Savvy", icon: "⚙️" },
  ];

  const references = [
    {
      name: "Andrew Villanueva",
      alias: "DJ Toby",
      org: "106.7 Energy FM",
      email: "babytoby@1067@gmail.com",
      phone: "09491039049",
    },
    {
      name: "Ritzhel Nicholai Santos",
      alias: "DJ / Social Media Production Manager",
      org: "106.7 Energy FM",
      email: "nicholeeesantos@gmail.com",
      phone: "",
    },
    {
      name: "Julie Nealega",
      alias: "Head & Business Development",
      org: "The Probe Archives",
      email: "julienealega@probe.ph",
      phone: "",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Space+Mono:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --gold: #c9a84c;
          --gold-light: #e8c97a;
          --cream: #f5f0e8;
          --ink: #0e0c09;
          --ink-mid: #1c1812;
          --ink-soft: #2e2a22;
          --muted: #7a7060;
          --serif: 'Cormorant Garamond', Georgia, serif;
          --mono: 'Space Mono', monospace;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--ink);
          color: var(--cream);
          font-family: var(--serif);
          overflow-x: hidden;
          cursor: none;
        }

        /* Custom cursor */
        .cursor {
          position: fixed;
          width: 12px;
          height: 12px;
          background: var(--gold);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
          mix-blend-mode: difference;
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3rem;
          transition: background 0.4s ease, padding 0.3s ease;
        }
        nav.scrolled {
          background: rgba(14,12,9,0.92);
          backdrop-filter: blur(12px);
          padding: 1rem 3rem;
          border-bottom: 1px solid rgba(201,168,76,0.15);
        }
        .nav-logo {
          font-family: var(--serif);
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 0.15em;
          color: var(--gold);
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-links a {
          font-family: var(--mono);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cream);
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.2s, color 0.2s;
        }
        .nav-links a:hover { opacity: 1; color: var(--gold); }

        /* HERO */
        #home {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 6rem 4rem 4rem;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 70% 80% at 70% 50%, rgba(201,168,76,0.07) 0%, transparent 65%),
            radial-gradient(ellipse 50% 50% at 15% 80%, rgba(201,168,76,0.04) 0%, transparent 60%),
            var(--ink);
        }
        .hero-grain {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px;
        }
        .hero-line-left {
          position: absolute;
          left: 2.5rem; top: 50%;
          width: 1px; height: 30vh;
          background: linear-gradient(to bottom, transparent, var(--gold), transparent);
          transform: translateY(-50%);
        }
        .hero-split {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 5rem;
          align-items: center;
          width: 100%;
          max-width: 1100px;
        }
        .hero-content { text-align: left; }
        .hero-eyebrow {
          font-family: var(--mono);
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeUp 0.8s 0.2s ease forwards;
        }
        .hero-name {
          font-size: clamp(3rem, 6.5vw, 6rem);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: var(--cream);
          margin-bottom: 0.3em;
          opacity: 0;
          animation: fadeUp 0.8s 0.4s ease forwards;
        }
        .hero-name em { font-style: italic; color: var(--gold-light); }
        .hero-title {
          font-size: clamp(0.85rem, 1.8vw, 1.1rem);
          font-weight: 300;
          font-style: italic;
          color: var(--muted);
          letter-spacing: 0.05em;
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: fadeUp 0.8s 0.6s ease forwards;
        }
        .hero-divider {
          width: 60px; height: 1px;
          background: var(--gold);
          margin: 0 0 2.5rem;
          opacity: 0;
          animation: fadeUp 0.8s 0.7s ease forwards;
        }
        .hero-tagline {
          font-size: clamp(0.85rem, 1.3vw, 1rem);
          font-weight: 300;
          color: rgba(245,240,232,0.6);
          max-width: 460px;
          margin: 0 0 3rem;
          line-height: 1.9;
          opacity: 0;
          animation: fadeUp 0.8s 0.8s ease forwards;
        }
        .hero-cta {
          display: inline-block;
          font-family: var(--mono);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid var(--gold);
          padding: 1rem 2.5rem;
          text-decoration: none;
          transition: background 0.3s, color 0.3s;
          opacity: 0;
          animation: fadeUp 0.8s 1s ease forwards;
        }
        .hero-cta:hover { background: var(--gold); color: var(--ink); }
        /* PORTRAIT */
        .hero-portrait-wrap {
          position: relative;
          width: 320px;
          opacity: 0;
          animation: fadeUp 1s 0.5s ease forwards;
        }
        .hero-portrait-frame {
          position: relative;
          width: 320px;
          height: 430px;
        }
        .hero-portrait-frame::before {
          content: '';
          position: absolute;
          top: -14px; left: -14px;
          right: 14px; bottom: 14px;
          border: 1px solid rgba(201,168,76,0.35);
          z-index: 2; pointer-events: none;
        }
        .hero-portrait-frame::after {
          content: '';
          position: absolute;
          top: 14px; left: 14px;
          right: -14px; bottom: -14px;
          border: 1px solid rgba(201,168,76,0.12);
          z-index: 0; pointer-events: none;
        }
        .portrait-inner {
          width: 100%; height: 100%;
          background: linear-gradient(160deg, #1e1a13 0%, #141108 55%, #1c1710 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .portrait-inner::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 90% 55% at 50% 25%, rgba(201,168,76,0.08) 0%, transparent 70%);
        }
        .portrait-avatar-ring {
          position: relative; z-index: 1;
          width: 96px; height: 96px;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.3);
          background: rgba(201,168,76,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.4rem;
        }
        .portrait-svg { width: 50px; height: 50px; opacity: 0.3; fill: var(--gold); }
        .portrait-initials {
          font-family: var(--serif);
          font-size: 2rem; font-weight: 300;
          letter-spacing: 0.15em;
          color: rgba(201,168,76,0.45);
          position: relative; z-index: 1;
        }
        .portrait-hint {
          font-family: var(--mono);
          font-size: 0.52rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.28);
          text-align: center;
          line-height: 2;
          position: relative; z-index: 1;
        }
        .portrait-upload-tag {
          position: absolute;
          bottom: 1.1rem; left: 50%;
          transform: translateX(-50%);
          font-family: var(--mono);
          font-size: 0.48rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.45);
          border: 1px solid rgba(201,168,76,0.2);
          padding: 0.35rem 1rem;
          background: rgba(14,12,9,0.75);
          white-space: nowrap; z-index: 3;
        }
        .pcorner { position: absolute; width: 18px; height: 18px; z-index: 4; }
        .pcorner.tl { top: 0; left: 0; border-top: 2px solid var(--gold); border-left: 2px solid var(--gold); }
        .pcorner.br { bottom: 0; right: 0; border-bottom: 2px solid var(--gold); border-right: 2px solid var(--gold); }
        .scroll-indicator {
          position: absolute;
          bottom: 2.5rem; left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          animation: fadeIn 1s 1.5s ease forwards;
        }
        .scroll-indicator span {
          font-family: var(--mono);
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollPulse 2s infinite;
        }

        /* SECTIONS */
        section {
          padding: 7rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-label {
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .section-label::after {
          content: '';
          flex: 1;
          max-width: 60px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
        }
        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          line-height: 1.1;
          color: var(--cream);
          margin-bottom: 3rem;
        }
        .section-title em { font-style: italic; color: var(--gold-light); }

        /* ABOUT */
        #about {
          border-top: 1px solid rgba(201,168,76,0.1);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        .profile-photo-wrap {
          position: relative;
          width: 220px;
          margin: 0 auto 3.5rem;
          flex-shrink: 0;
        }
        .profile-photo-wrap::before {
          content: '';
          position: absolute;
          inset: -8px;
          border: 1px solid rgba(201,168,76,0.35);
          pointer-events: none;
          z-index: 1;
        }
        .profile-photo-wrap::after {
          content: '';
          position: absolute;
          bottom: -14px;
          right: -14px;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(201,168,76,0.15);
          pointer-events: none;
        }
        .profile-photo-placeholder {
          width: 220px;
          height: 270px;
          background: linear-gradient(160deg, #1c1812 0%, #2e2720 60%, #1a1510 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          position: relative;
          overflow: hidden;
        }
        .profile-photo-placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.1) 0%, transparent 70%);
        }
        .profile-initials {
          font-family: var(--serif);
          font-size: 3.8rem;
          font-weight: 300;
          font-style: italic;
          color: var(--gold);
          letter-spacing: 0.05em;
          line-height: 1;
          position: relative;
          z-index: 1;
        }
        .profile-hint {
          font-family: var(--mono);
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 0 1rem;
          line-height: 1.8;
        }
        .profile-upload-badge {
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gold);
          color: var(--ink);
          font-family: var(--mono);
          font-size: 0.5rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.35rem 0.9rem;
          white-space: nowrap;
          z-index: 2;
        }
        .about-text {
          font-size: 1.15rem;
          font-weight: 300;
          line-height: 1.9;
          color: rgba(245,240,232,0.75);
        }
        .about-text p + p { margin-top: 1.5rem; }
        .about-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .detail-item {
          display: flex;
          gap: 1rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(201,168,76,0.1);
        }
        .detail-label {
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          min-width: 100px;
          padding-top: 0.15rem;
        }
        .detail-value {
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--cream);
          line-height: 1.6;
        }

        /* EDUCATION STRIP */
        .edu-strip {
          background: var(--ink-mid);
          border: 1px solid rgba(201,168,76,0.12);
          padding: 3rem;
          margin-top: 4rem;
          position: relative;
          overflow: hidden;
        }
        .edu-strip::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--gold);
        }
        .edu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .edu-card h3 {
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--cream);
          margin-bottom: 0.3rem;
        }
        .edu-card p {
          font-family: var(--mono);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--gold);
          text-transform: uppercase;
        }
        .edu-card small {
          font-size: 0.85rem;
          color: var(--muted);
          font-style: italic;
        }

        /* EXPERIENCE */
        #experience { border-top: 1px solid rgba(201,168,76,0.1); }
        .exp-list { display: flex; flex-direction: column; gap: 2rem; }
        .exp-card {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 1.5rem;
          padding: 2.5rem;
          background: var(--ink-mid);
          border: 1px solid rgba(201,168,76,0.08);
          transition: border-color 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        .exp-card::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0;
          background: rgba(201,168,76,0.05);
          transition: width 0.4s ease;
        }
        .exp-card:hover { border-color: rgba(201,168,76,0.3); transform: translateX(4px); }
        .exp-card:hover::after { width: 100%; }
        .exp-icon {
          font-size: 2rem;
          display: flex;
          align-items: flex-start;
          padding-top: 0.25rem;
          position: relative;
          z-index: 1;
        }
        .exp-body { position: relative; z-index: 1; }
        .exp-role {
          font-size: 1.05rem;
          font-weight: 400;
          color: var(--cream);
          line-height: 1.4;
          margin-bottom: 0.3rem;
        }
        .exp-org {
          font-family: var(--mono);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.8rem;
        }
        .exp-desc {
          font-size: 0.92rem;
          font-weight: 300;
          color: rgba(245,240,232,0.55);
          line-height: 1.7;
        }

        /* SKILLS */
        #skills { border-top: 1px solid rgba(201,168,76,0.1); }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }
        .skill-pill {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 1.5rem;
          border: 1px solid rgba(201,168,76,0.12);
          background: var(--ink-mid);
          transition: border-color 0.3s, background 0.3s;
        }
        .skill-pill:hover {
          border-color: rgba(201,168,76,0.4);
          background: rgba(201,168,76,0.05);
        }
        .skill-icon { font-size: 1.3rem; }
        .skill-label {
          font-size: 0.88rem;
          font-weight: 300;
          color: var(--cream);
          line-height: 1.3;
        }

        /* CONTACT */
        #contact { border-top: 1px solid rgba(201,168,76,0.1); }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        .contact-info { display: flex; flex-direction: column; gap: 1.5rem; }
        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(201,168,76,0.1);
        }
        .contact-item-label {
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .contact-item-value {
          font-size: 1rem;
          color: var(--cream);
          font-weight: 300;
        }
        .refs-title {
          font-size: 1.6rem;
          font-weight: 300;
          color: var(--cream);
          margin-bottom: 2rem;
          font-style: italic;
        }
        .ref-card {
          padding: 1.5rem;
          border: 1px solid rgba(201,168,76,0.1);
          background: var(--ink-mid);
          margin-bottom: 1rem;
        }
        .ref-name {
          font-size: 1rem;
          font-weight: 400;
          color: var(--cream);
          margin-bottom: 0.2rem;
        }
        .ref-alias {
          font-size: 0.8rem;
          color: var(--gold);
          font-style: italic;
          margin-bottom: 0.2rem;
        }
        .ref-org {
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.5rem;
        }
        .ref-contact { font-size: 0.8rem; color: rgba(245,240,232,0.5); font-weight: 300; }

        /* FOOTER */
        footer {
          border-top: 1px solid rgba(201,168,76,0.1);
          padding: 3rem;
          text-align: center;
        }
        footer p {
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
        }
        footer span { color: var(--gold); }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          nav { padding: 1.2rem 1.5rem; }
          nav.scrolled { padding: 0.8rem 1.5rem; }
          .nav-links { display: none; }
          .about-grid, .contact-grid, .edu-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          section { padding: 5rem 1.5rem; }
          .hero-line-left { display: none; }
          .hero-split { grid-template-columns: 1fr; gap: 3rem; }
          .hero-portrait-wrap { width: 100%; }
          .hero-portrait-frame { width: 100%; height: 320px; }
          .hero-content { text-align: center; }
          .hero-divider { margin: 0 auto 2.5rem; }
          .hero-tagline { margin: 0 auto 3rem; }
          .exp-card { grid-template-columns: 40px 1fr; }
        }
      `}</style>

      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor" />

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-logo">C · G · R</div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <div id="home">
        <div className="hero-bg" />
        <div className="hero-grain" />
        <div className="hero-line-left" />
        <div className="hero-split">
          {/* Left: Text */}
          <div className="hero-content">
            <p className="hero-eyebrow">Media Professional · Creative · Manila, PH</p>
            <h1 className="hero-name">
              Carel G.<br /><em>Regala</em>
            </h1>
            <p className="hero-title">Broadcaster · Content Creator · Sound Artist · Storyteller</p>
            <div className="hero-divider" />
            <p className="hero-tagline">
              Passionate media professional with a voice that carries — on-air, on set, and in the studio. Turning complex narratives into clear, resonant stories.
            </p>
            <a href="#experience" className="hero-cta">View My Work</a>
          </div>
          {/* Right: Portrait */}
          <div className="hero-portrait-wrap">
            <div className="hero-portrait-frame">
              {/* <div className="portrait-inner">
                <div className="portrait-avatar-ring">
                  <svg className="portrait-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                </div>
                <div className="portrait-initials">C · G · R</div>
                <div className="portrait-hint">
                  Add your photo here<br />
                  Replace this placeholder
                </div>
                <div className="portrait-upload-tag">Upload Photo</div>
              </div> */}
              <img src="/pic.jpg" alt="Carel G. Regala" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              <div className="pcorner tl" />
              <div className="pcorner br" />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <p className="section-label">01 — About</p>
        <h2 className="section-title">A Creative <em>Built</em> for<br />the Media World</h2>
        <div className="about-grid">
          <div>
            <div className="about-text">
              <p>
                At 22, I bring a rare combination of technical craft and creative instinct shaped by hands-on roles across radio broadcasting, investigative journalism, and digital media.
              </p>
              <p>
                From live radio production at 106.7 Energy FM to archival research at The Probe, I thrive in environments that demand adaptability, precision, and a strong creative voice.
              </p>
              <p>
                Whether I'm behind a microphone, in a sound suite, behind a camera, or crafting a social media strategy — I show up with intention and craft.
              </p>
            </div>
          </div>
          <div className="about-details">
            {[
              { label: "Location", value: "City of Muntinlupa, Metro Manila" },
              { label: "Email", value: "carelgregala@gmail.com" },
              { label: "Phone", value: "0970 519 9720\n0994 564 7831" },
              { label: "Date of Birth", value: "March 14, 2003" },
              { label: "Citizenship", value: "Filipino" },
              { label: "Status", value: "Single · Open to opportunities" },
            ].map((d) => (
              <div key={d.label} className="detail-item">
                <span className="detail-label">{d.label}</span>
                <span className="detail-value" style={{ whiteSpace: "pre-line" }}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="edu-strip">
          <p className="section-label" style={{ marginBottom: "2rem" }}>Education</p>
          <div className="edu-grid">
            <div className="edu-card">
              <p>Bachelor of Arts in Broadcasting</p>
              <h3>Polytechnic University of the Philippines</h3>
              <small>Sta. Mesa Campus, Manila</small>
            </div>
            <div className="edu-card">
              <p>General Academic Strand (GAS)</p>
              <h3>Muntinlupa National High School</h3>
              <small>Main Campus</small>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <p className="section-label">02 — Experience</p>
        <h2 className="section-title">Where I've <em>Made</em><br />an Impact</h2>
        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-card">
              <div className="exp-icon">{exp.icon}</div>
              <div className="exp-body">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-org">{exp.org}</div>
                <div className="exp-desc">{exp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <p className="section-label">03 — Skills</p>
        <h2 className="section-title">What I <em>Bring</em><br />to the Table</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-pill">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-label">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <p className="section-label">04 — Contact</p>
        <h2 className="section-title">Let's <em>Work</em><br />Together</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">carelgregala@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Mobile</span>
              <span className="contact-item-value">0970 519 9720</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Alternate</span>
              <span className="contact-item-value">0994 564 7831</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Location</span>
              <span className="contact-item-value">City of Muntinlupa, Metro Manila, PH</span>
            </div>
            <div className="contact-item" style={{ border: "none" }}>
              <span className="contact-item-label">Availability</span>
              <span className="contact-item-value">Open to any position · Eager to grow</span>
            </div>
          </div>
          <div>
            <p className="refs-title">Character References</p>
            {references.map((ref, i) => (
              <div key={i} className="ref-card">
                <div className="ref-name">{ref.name}</div>
                <div className="ref-alias">{ref.alias}</div>
                <div className="ref-org">{ref.org}</div>
                <div className="ref-contact">
                  {ref.email}
                  {ref.phone && <> · {ref.phone}</>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 <span>Carel G. Regala</span> · Media Professional · All rights reserved</p>
      </footer>
    </>
  );
}