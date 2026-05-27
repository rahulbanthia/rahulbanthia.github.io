"use client";

import { motion } from "framer-motion";
import { Music, Piano } from "lucide-react";

// Inline SVG brand icon (lucide-react does not include YouTube)
const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
import YouTubeVideoCarousel from "./YouTubeVideoCarousel";
import { genreTags } from "@/data/videos";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@rahulbanthia";

export default function MusicSection() {
  return (
    <section
      id="music"
      className="relative py-24 px-6 overflow-hidden"
      aria-labelledby="music-heading"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
            style={{
              background: "rgba(167,139,250,0.1)",
              borderColor: "rgba(167,139,250,0.25)",
              color: "#a78bfa",
            }}
          >
            <Music size={12} />
            Beyond the Code
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2
                id="music-heading"
                className="section-heading text-3xl sm:text-4xl md:text-5xl mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Piano &{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Music
                </span>
              </h2>
              <p className="text-base max-w-xl" style={{ color: "var(--color-text-secondary)" }}>
                When I&apos;m not architecting systems, I&apos;m at the KORG keyboard — playing
                Bollywood classics, soulful ghazals, and timeless western pieces. Music has been a
                creative constant throughout my life.
              </p>
            </div>

            {/* YouTube subscribe button */}
            <a
              id="music-youtube-subscribe"
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold shrink-0 transition-all duration-300"
              style={{
                background: "#FF0000",
                color: "#ffffff",
                boxShadow: "0 0 24px rgba(255,0,0,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 40px rgba(255,0,0,0.4), 0 10px 30px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(255,0,0,0.25)";
              }}
            >
              <YouTubeIcon />
              Subscribe on YouTube
            </a>
          </div>
        </motion.div>

        {/* Instrument / style card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 p-5 rounded-2xl border flex flex-wrap items-center gap-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(167,139,250,0.05) 0%, rgba(96,165,250,0.05) 100%)",
            borderColor: "rgba(167,139,250,0.2)",
          }}
        >
          {/* Instrument */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(167,139,250,0.15)" }}
              aria-hidden="true"
            >
              <Piano size={20} style={{ color: "#a78bfa" }} />
            </div>
            <div>
              <div className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                KORG Keyboard
              </div>
              <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                Primary Instrument
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden sm:block w-px h-10 self-center"
            style={{ background: "var(--color-border-subtle)" }}
            aria-hidden="true"
          />

          {/* Genre tags */}
          <div className="flex flex-wrap gap-2" aria-label="Music genres">
            {genreTags.map((tag) => (
              <span
                key={tag.label}
                className="px-3 py-1 rounded-full text-xs font-semibold border"
                style={{
                  background: `${tag.color}15`,
                  color: tag.color,
                  borderColor: `${tag.color}35`,
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Video carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <YouTubeVideoCarousel />
        </motion.div>

        {/* Closing note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-sm text-center"
          style={{ color: "var(--color-text-muted)" }}
        >
          New covers posted regularly —{" "}
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[var(--color-text-secondary)] transition-colors duration-200"
            style={{ color: "var(--color-text-muted)" }}
          >
            subscribe to stay updated
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
