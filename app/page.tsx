"use client";

import { useState, useEffect, useRef } from "react";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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

        .cursor {
          position: fixed;
          width: 12px; height: 12px;
          background: var(--gold);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
          mix-blend-mode: difference;
        }

        /* ── NAV ── */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3rem;
          transition: background 0.4s ease, padding 0.3s ease;
        }
        nav.scrolled {
          background: rgba(14,12,9,0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
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
          position: relative;
          z-index: 201;
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

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          z-index: 201;
          position: relative;
          background: none;
          border: none;
        }
        .hamburger span {
          display: block;
          width: 24px; height: 1px;
          background: var(--cream);
          transition: transform 0.3s ease, opacity 0.3s ease, background 0.2s;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); background: var(--gold); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); background: var(--gold); }

        /* Mobile nav overlay */
        .mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(14,12,9,0.98);
          z-index: 199;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-menu.open { opacity: 1; pointer-events: all; }
        .mobile-menu a {
          font-family: var(--serif);
          font-size: 2.8rem;
          font-weight: 300;
          color: var(--cream);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }
        .mobile-menu a:hover { color: var(--gold); }
        .mobile-menu-sub {
          font-family: var(--mono);
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          color: rgba(201,168,76,0.4);
          text-transform: uppercase;
          margin-top: 0.5rem;
        }

        /* ── HERO ── */
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
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 80% at 70% 50%, rgba(201,168,76,0.07) 0%, transparent 65%),
            radial-gradient(ellipse 50% 50% at 15% 80%, rgba(201,168,76,0.04) 0%, transparent 60%),
            var(--ink);
        }
        .hero-grain {
          position: absolute; inset: 0;
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
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 5rem;
          align-items: center;
          width: 100%; max-width: 1100px;
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
          font-weight: 300; font-style: italic;
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

        /* Portrait */
        .hero-portrait-wrap {
          position: relative;
          width: 320px;
          opacity: 0;
          animation: fadeUp 1s 0.5s ease forwards;
        }
        .hero-portrait-frame {
          position: relative;
          width: 320px; height: 430px;
        }
        .hero-portrait-frame::before {
          content: '';
          position: absolute;
          top: -14px; left: -14px; right: 14px; bottom: 14px;
          border: 1px solid rgba(201,168,76,0.35);
          z-index: 2; pointer-events: none;
        }
        .hero-portrait-frame::after {
          content: '';
          position: absolute;
          top: 14px; left: 14px; right: -14px; bottom: -14px;
          border: 1px solid rgba(201,168,76,0.12);
          z-index: 0; pointer-events: none;
        }
        .portrait-inner {
          width: 100%; height: 100%;
          background: linear-gradient(160deg, #1e1a13 0%, #141108 55%, #1c1710 100%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.8rem;
          position: relative; z-index: 1; overflow: hidden;
        }
        .portrait-inner::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 90% 55% at 50% 25%, rgba(201,168,76,0.08) 0%, transparent 70%);
        }
        .portrait-avatar-ring {
          position: relative; z-index: 1;
          width: 96px; height: 96px; border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.3);
          background: rgba(201,168,76,0.05);
          display: flex; align-items: center; justify-content: center;
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
          font-size: 0.52rem; letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.28);
          text-align: center; line-height: 2;
          position: relative; z-index: 1;
        }
        .portrait-upload-tag {
          position: absolute; bottom: 1.1rem; left: 50%;
          transform: translateX(-50%);
          font-family: var(--mono); font-size: 0.48rem;
          letter-spacing: 0.18em; text-transform: uppercase;
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
          position: absolute; bottom: 2rem; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
          opacity: 0; animation: fadeIn 1s 1.5s ease forwards;
        }
        .scroll-indicator span {
          font-family: var(--mono); font-size: 0.55rem;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted);
        }
        .scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollPulse 2s infinite;
        }

        /* ── SECTIONS ── */
        section {
          padding: 7rem 2rem;
          max-width: 1100px; margin: 0 auto;
        }
        .section-label {
          font-family: var(--mono); font-size: 0.6rem;
          letter-spacing: 0.35em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 1rem;
          display: flex; align-items: center; gap: 1rem;
        }
        .section-label::after {
          content: ''; flex: 1; max-width: 60px;
          height: 1px; background: var(--gold); opacity: 0.5;
        }
        .section-title {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 300; line-height: 1.1;
          color: var(--cream); margin-bottom: 3rem;
        }
        .section-title em { font-style: italic; color: var(--gold-light); }

        /* About */
        #about { border-top: 1px solid rgba(201,168,76,0.1); }
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: start;
        }
        .about-text {
          font-size: 1.1rem; font-weight: 300;
          line-height: 1.9; color: rgba(245,240,232,0.75);
        }
        .about-text p + p { margin-top: 1.5rem; }
        .about-details { display: flex; flex-direction: column; gap: 1.5rem; }
        .detail-item {
          display: flex; gap: 1rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(201,168,76,0.1);
        }
        .detail-label {
          font-family: var(--mono); font-size: 0.6rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); min-width: 100px; padding-top: 0.15rem;
        }
        .detail-value { font-size: 0.95rem; font-weight: 300; color: var(--cream); line-height: 1.6; }

        /* Education */
        .edu-strip {
          background: var(--ink-mid);
          border: 1px solid rgba(201,168,76,0.12);
          padding: 3rem; margin-top: 4rem;
          position: relative; overflow: hidden;
        }
        .edu-strip::before {
          content: ''; position: absolute;
          left: 0; top: 0; bottom: 0; width: 3px; background: var(--gold);
        }
        .edu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .edu-card h3 {
          font-size: 1.05rem; font-weight: 400;
          color: var(--cream); margin-bottom: 0.3rem; line-height: 1.4;
        }
        .edu-card p {
          font-family: var(--mono); font-size: 0.6rem;
          letter-spacing: 0.15em; color: var(--gold);
          text-transform: uppercase; margin-bottom: 0.3rem;
        }
        .edu-card small { font-size: 0.85rem; color: var(--muted); font-style: italic; }

        /* Experience */
        #experience { border-top: 1px solid rgba(201,168,76,0.1); }
        .exp-list { display: flex; flex-direction: column; gap: 2rem; }
        .exp-card {
          display: grid; grid-template-columns: 56px 1fr;
          gap: 1.5rem; padding: 2rem 2.5rem;
          background: var(--ink-mid);
          border: 1px solid rgba(201,168,76,0.08);
          transition: border-color 0.3s, transform 0.3s;
          position: relative; overflow: hidden;
        }
        .exp-card::after {
          content: ''; position: absolute;
          left: 0; top: 0; bottom: 0; width: 0;
          background: rgba(201,168,76,0.04);
          transition: width 0.4s ease;
        }
        .exp-card:hover { border-color: rgba(201,168,76,0.3); transform: translateX(4px); }
        .exp-card:hover::after { width: 100%; }
        .exp-icon {
          font-size: 1.8rem;
          display: flex; align-items: flex-start; padding-top: 0.25rem;
          position: relative; z-index: 1;
        }
        .exp-body { position: relative; z-index: 1; }
        .exp-role {
          font-size: 1rem; font-weight: 400; color: var(--cream);
          line-height: 1.5; margin-bottom: 0.3rem;
        }
        .exp-org {
          font-family: var(--mono); font-size: 0.6rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 0.7rem;
        }
        .exp-desc { font-size: 0.9rem; font-weight: 300; color: rgba(245,240,232,0.55); line-height: 1.7; }

        /* Skills */
        #skills { border-top: 1px solid rgba(201,168,76,0.1); }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
        }
        .skill-pill {
          display: flex; align-items: center; gap: 1rem;
          padding: 1.1rem 1.4rem;
          border: 1px solid rgba(201,168,76,0.12);
          background: var(--ink-mid);
          transition: border-color 0.3s, background 0.3s;
        }
        .skill-pill:hover { border-color: rgba(201,168,76,0.4); background: rgba(201,168,76,0.05); }
        .skill-icon { font-size: 1.3rem; flex-shrink: 0; }
        .skill-label { font-size: 0.85rem; font-weight: 300; color: var(--cream); line-height: 1.3; }

        /* Contact */
        #contact { border-top: 1px solid rgba(201,168,76,0.1); }
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: start;
        }
        .contact-info { display: flex; flex-direction: column; gap: 1.5rem; }
        .contact-item {
          display: flex; flex-direction: column; gap: 0.3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(201,168,76,0.1);
        }
        .contact-item-label {
          font-family: var(--mono); font-size: 0.6rem;
          letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold);
        }
        .contact-item-value { font-size: 1rem; color: var(--cream); font-weight: 300; word-break: break-word; }
        .refs-title { font-size: 1.6rem; font-weight: 300; color: var(--cream); margin-bottom: 2rem; font-style: italic; }
        .ref-card {
          padding: 1.5rem;
          border: 1px solid rgba(201,168,76,0.1);
          background: var(--ink-mid); margin-bottom: 1rem;
        }
        .ref-name { font-size: 1rem; font-weight: 400; color: var(--cream); margin-bottom: 0.2rem; }
        .ref-alias { font-size: 0.8rem; color: var(--gold); font-style: italic; margin-bottom: 0.2rem; }
        .ref-org {
          font-family: var(--mono); font-size: 0.6rem;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--muted); margin-bottom: 0.5rem;
        }
        .ref-contact { font-size: 0.8rem; color: rgba(245,240,232,0.5); font-weight: 300; word-break: break-all; }

        /* Footer */
        footer {
          border-top: 1px solid rgba(201,168,76,0.1);
          padding: 3rem 2rem; text-align: center;
        }
        footer p {
          font-family: var(--mono); font-size: 0.6rem;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted);
        }
        footer span { color: var(--gold); }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.3; }
        }

        /* ══════════════════════════════════════
           TABLET (≤ 900px)
        ══════════════════════════════════════ */
        @media (max-width: 900px) {
          nav { padding: 1.2rem 2rem; }
          nav.scrolled { padding: 0.9rem 2rem; }
          .nav-links { gap: 1.5rem; }
          #home { padding: 5.5rem 2rem 4rem; }
          .hero-split { grid-template-columns: 1fr 260px; gap: 3rem; }
          .hero-portrait-wrap { width: 260px; }
          .hero-portrait-frame { width: 260px; height: 360px; }
          .about-grid { gap: 3rem; }
          .contact-grid { gap: 3rem; }
        }

        /* ══════════════════════════════════════
           MOBILE (≤ 680px)
        ══════════════════════════════════════ */
        @media (max-width: 680px) {
          body { cursor: auto; }
          .cursor { display: none; }

          /* Nav */
          nav { padding: 1rem 1.25rem; }
          nav.scrolled { padding: 0.85rem 1.25rem; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: flex; }

          /* Hero — portrait on top, text below */
          #home { padding: 5rem 1.25rem 3rem; min-height: 100svh; }
          .hero-split {
            grid-template-columns: 1fr;
            gap: 0;
            justify-items: center;
          }
          .hero-portrait-wrap {
            order: -1;
            width: min(240px, 68vw);
            margin-bottom: 2.5rem;
          }
          .hero-portrait-frame { width: 100%; height: clamp(240px, 55vw, 320px); }
          .hero-content { text-align: center; width: 100%; }
          .hero-eyebrow { font-size: 0.52rem; letter-spacing: 0.22em; margin-bottom: 1rem; }
          .hero-name { font-size: clamp(2.5rem, 10.5vw, 4rem); }
          .hero-title { font-size: 0.88rem; margin-bottom: 1.8rem; }
          .hero-divider { margin: 0 auto 1.8rem; }
          .hero-tagline { margin: 0 auto 2.5rem; max-width: 100%; font-size: 0.88rem; line-height: 1.8; }
          .hero-line-left { display: none; }
          .hero-cta { padding: 0.85rem 2rem; font-size: 0.65rem; }
          .scroll-indicator { bottom: 1rem; }
          .scroll-line { height: 28px; }

          /* Sections */
          section { padding: 4rem 1.25rem; }
          .section-title { margin-bottom: 2rem; }

          /* About */
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .about-text { font-size: 0.98rem; }
          .detail-item { gap: 0.75rem; }
          .detail-label { min-width: 76px; font-size: 0.55rem; }
          .detail-value { font-size: 0.88rem; }

          /* Education */
          .edu-strip { padding: 1.75rem 1.25rem; }
          .edu-grid { grid-template-columns: 1fr; gap: 1.75rem; }

          /* Experience */
          .exp-list { gap: 1rem; }
          .exp-card {
            grid-template-columns: 34px 1fr;
            gap: 0.9rem; padding: 1.25rem;
          }
          .exp-icon { font-size: 1.3rem; }
          .exp-role { font-size: 0.9rem; }
          .exp-org { font-size: 0.55rem; }
          .exp-desc { font-size: 0.82rem; }
          .exp-card:hover { transform: none; }

          /* Skills */
          .skills-grid { grid-template-columns: 1fr 1fr; gap: 0.65rem; }
          .skill-pill { padding: 0.85rem 0.9rem; gap: 0.65rem; }
          .skill-icon { font-size: 1.1rem; }
          .skill-label { font-size: 0.75rem; }

          /* Contact */
          .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .contact-item-value { font-size: 0.9rem; }
          .refs-title { font-size: 1.3rem; margin-bottom: 1.25rem; }
          .ref-card { padding: 1rem; }
          .ref-name { font-size: 0.9rem; }
          .ref-contact { font-size: 0.72rem; }

          /* Footer */
          footer { padding: 2rem 1.25rem; }
          footer p { font-size: 0.52rem; letter-spacing: 0.1em; }
        }

        /* ══════════════════════════════════════
           SMALL MOBILE (≤ 380px)
        ══════════════════════════════════════ */
        @media (max-width: 380px) {
          .hero-name { font-size: 2.2rem; }
          .section-title { font-size: 1.75rem; }
          .skills-grid { grid-template-columns: 1fr; }
          .exp-icon { display: none; }
          .exp-card { grid-template-columns: 1fr; }
        }

        /* Touch devices: remove hover side-effects */
        @media (hover: none) {
          .exp-card:hover { transform: none; border-color: rgba(201,168,76,0.08); }
          .exp-card:hover::after { width: 0; }
          .skill-pill:hover { border-color: rgba(201,168,76,0.12); background: var(--ink-mid); }
          .hero-cta:hover { background: transparent; color: var(--gold); }
          .nav-links a:hover { opacity: 0.7; color: var(--cream); }
        }
      `}</style>

      {/* Cursor (desktop only) */}
      <div ref={cursorRef} className="cursor" />

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <span className="mobile-menu-sub">carelgregala@gmail.com</span>
      </div>

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
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <div id="home">
        <div className="hero-bg" />
        <div className="hero-grain" />
        <div className="hero-line-left" />
        <div className="hero-split">
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
          <div className="hero-portrait-wrap">
            <div className="hero-portrait-frame">
              <img
                src="/pic.jpg" className="opacity-50"
                alt="Carel G. Regala"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", position: "relative", zIndex: 1, display: "block" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const fb = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = "flex";
                }}
              />
              <div className="portrait-inner" style={{ display: "none", position: "absolute", inset: 0, zIndex: 1 }}>
                <div className="portrait-avatar-ring">
                  <svg className="portrait-svg" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                </div>
                <div className="portrait-initials">C · G · R</div>
                <div className="portrait-hint">Add your photo here<br />Replace this placeholder</div>
                <div className="portrait-upload-tag">Upload Photo</div>
              </div>
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
          <div className="about-text">
            <p>At 22, I bring a rare combination of technical craft and creative instinct shaped by hands-on roles across radio broadcasting, investigative journalism, and digital media.</p>
            <p>From live radio production at 106.7 Energy FM to archival research at The Probe, I thrive in environments that demand adaptability, precision, and a strong creative voice.</p>
            <p>Whether I'm behind a microphone, in a sound suite, behind a camera, or crafting a social media strategy — I show up with intention and craft.</p>
          </div>
          <div className="about-details">
            {[
              { label: "Location", value: "City of Muntinlupa, Metro Manila" },
              { label: "Email", value: "carelgregala@gmail.com" },
              { label: "Phone", value: "0970 519 9720\n0994 564 7831" },
              { label: "Date of Birth", value: "March 14, 2003" },
              { label: "Citizenship", value: "Filipino" },
              { label: "Status", value: "Single" },
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
            {[
              { label: "Email", value: "carelgregala@gmail.com" },
              { label: "Mobile", value: "0970 519 9720" },
              { label: "Alternate", value: "0994 564 7831" },
              { label: "Location", value: "City of Muntinlupa, Metro Manila, PH" },
              { label: "Availability", value: "Open to any position · Eager to grow" },
            ].map((c, i) => (
              <div key={i} className="contact-item" style={i === 4 ? { border: "none" } : {}}>
                <span className="contact-item-label">{c.label}</span>
                <span className="contact-item-value">{c.value}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="refs-title">Character References</p>
            {references.map((ref, i) => (
              <div key={i} className="ref-card">
                <div className="ref-name">{ref.name}</div>
                <div className="ref-alias">{ref.alias}</div>
                <div className="ref-org">{ref.org}</div>
                <div className="ref-contact">
                  {ref.email}{ref.phone && <> · {ref.phone}</>}
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