"use client";

import React from "react";
import { Mail, Heart } from "lucide-react";

// Inline SVG brand icons
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

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const MailIcon = () => <Mail size={16} aria-hidden="true" />;

const socials: { id: string; label: string; href: string; icon: () => React.ReactNode; color: string }[] = [
  {
    id: "footer-linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-banthia",
    icon: LinkedInIcon,
    color: "#0A66C2",
  },
  {
    id: "footer-github",
    label: "GitHub",
    href: "https://github.com/rahulbanthia",
    icon: GitHubIcon,
    color: "#e0e0e0",
  },
  {
    id: "footer-youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@rahulbanthia",
    icon: YouTubeIcon,
    color: "#FF0000",
  },
  {
    id: "footer-email",
    label: "Email",
    href: "mailto:rahul@banthia.in",
    icon: MailIcon,
    color: "var(--color-accent)",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t py-12 px-6"
      style={{ borderColor: "var(--color-border-subtle)" }}
      aria-label="Footer"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-background)",
                fontFamily: "var(--font-heading)",
              }}
              aria-hidden="true"
            >
              RB
            </span>
            <span
              className="font-semibold text-sm"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)" }}
            >
              Rahul Banthia
            </span>
          </div>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Engineering Manager II · Full-Stack Architect
          </p>
        </div>

        {/* Social Links */}
        <nav aria-label="Social links">
          <ul className="flex items-center gap-3" role="list">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.id}>
                  <a
                    id={social.id}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-muted)",
                      background: "var(--color-surface)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = social.color;
                      el.style.borderColor = `${social.color}55`;
                      el.style.background = `${social.color}15`;
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--color-text-muted)";
                      el.style.borderColor = "var(--color-border)";
                      el.style.background = "var(--color-surface)";
                      el.style.transform = "translateY(0)";
                    }}
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Copyright */}
        <p
          className="text-xs flex items-center gap-1"
          style={{ color: "var(--color-text-muted)" }}
        >
          &copy; {year} Rahul Banthia · Built with{" "}
          <Heart size={11} className="inline" style={{ color: "var(--color-accent)" }} aria-label="love" />
          {" "}using Next.js
        </p>
      </div>
    </footer>
  );
}
