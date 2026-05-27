"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Mail } from "lucide-react";

// Inline SVG brand icons (lucide-react does not ship social brand icons)
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function HeroSection() {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      aria-label="Hero — Introduction"
    >
      {/* Dot-grid background */}
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Floating accent orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 7s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          filter: "blur(30px)",
          animation: "float 9s ease-in-out infinite reverse",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Avatar placeholder */}
          <motion.div variants={item} className="relative">
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold border-2 select-none"
              style={{
                background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)",
                borderColor: "var(--color-border)",
                fontFamily: "var(--font-heading)",
                color: "var(--color-accent)",
                boxShadow: "0 0 40px var(--color-accent-glow), inset 0 0 20px rgba(0,212,255,0.03)",
              }}
              aria-label="Rahul Banthia avatar placeholder — add your photo later"
            >
              RB
            </div>
            {/* Status badge */}
            <div
              className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border"
              style={{
                background: "rgba(16, 217, 138, 0.1)",
                borderColor: "rgba(16, 217, 138, 0.3)",
                color: "var(--color-success)",
              }}
              aria-label="Currently open to new opportunities"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Open to Opportunities
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={item}
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            <MapPin size={13} />
            <span>India · Remote-first</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight"
          >
            <span style={{ color: "var(--color-text-primary)" }}>Rahul Banthia</span>
            <br />
            <span className="gradient-text">Engineering Manager</span>
            <br />
            <span style={{ color: "var(--color-text-secondary)", fontSize: "0.72em" }}>
              &amp; Full-Stack Architect
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="max-w-2xl text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            I drive technical strategy, architect scalable multi-tenant systems, and build
            high-performance engineering teams. Currently{" "}
            <span style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>
              Engineering Manager II at PeopleGrove
            </span>{" "}
            — empowering 500+ higher-education institutions through world-class software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 mt-2"
          >
            <a
              id="hero-linkedin-cta"
              href="https://www.linkedin.com/in/rahul-banthia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-background)",
                boxShadow: "0 0 30px var(--color-accent-glow-strong)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 50px var(--color-accent-glow-strong), 0 10px 30px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 30px var(--color-accent-glow-strong)";
              }}
            >
              <LinkedInIcon />
              LinkedIn Profile
            </a>

            <a
              id="hero-github-cta"
              href="https://github.com/rahulbanthia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-300"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-primary)",
                background: "var(--color-surface)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-accent)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 20px var(--color-accent-glow)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <GitHubIcon />
              GitHub
            </a>

            <a
              id="hero-email-cta"
              href="mailto:rahul@banthia.in"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-300"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-secondary)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-primary)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-surface)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-secondary)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              <Mail size={16} />
              rahul@banthia.in
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-8 mt-6 pt-6 border-t w-full max-w-lg"
            style={{ borderColor: "var(--color-border-subtle)" }}
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "500+", label: "Institutions Served" },
              { value: "EM II", label: "Current Level" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl font-bold section-heading"
                  style={{ color: "var(--color-accent)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          onClick={scrollToExperience}
          className="mt-16 flex flex-col items-center gap-2 mx-auto group"
          style={{ color: "var(--color-text-muted)" }}
          aria-label="Scroll to experience section"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Explore</span>
          <ArrowDown
            size={16}
            className="group-hover:translate-y-1 transition-transform duration-300"
            style={{ animation: "float 2s ease-in-out infinite" }}
          />
        </motion.button>
      </div>
    </section>
  );
}
