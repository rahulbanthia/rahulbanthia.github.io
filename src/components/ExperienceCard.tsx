"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, ChevronRight } from "lucide-react";
import type { ExperienceItem } from "@/types";

interface Props {
  item: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ item, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl p-6 card-hover ${
        item.isFeatured ? "border-2" : "border"
      }`}
      style={{
        background: item.isFeatured
          ? "linear-gradient(135deg, rgba(13,20,36,0.95) 0%, rgba(0,212,255,0.03) 100%)"
          : "var(--color-surface)",
        borderColor: item.isFeatured ? "var(--color-accent-dim)" : "var(--color-border)",
        boxShadow: item.isFeatured ? "0 0 40px rgba(0,212,255,0.06)" : undefined,
      }}
    >
      {/* Featured ribbon */}
      {item.isFeatured && (
        <div
          className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{
            background: "rgba(0,212,255,0.12)",
            color: "var(--color-accent)",
            border: "1px solid rgba(0,212,255,0.25)",
          }}
          aria-label="Featured role"
        >
          <Star size={10} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <h3
            className="text-lg font-semibold leading-snug section-heading"
            style={{ color: "var(--color-text-primary)" }}
          >
            {item.role}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            {item.companyUrl ? (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`exp-company-link-${item.id}`}
                className="inline-flex items-center gap-1 text-sm font-medium hover:underline transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                {item.company}
                <ExternalLink size={11} />
              </a>
            ) : (
              <span className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
                {item.company}
              </span>
            )}
            <span style={{ color: "var(--color-border)" }}>·</span>
            <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              {item.location}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
          <span
            className="text-sm font-medium px-3 py-1 rounded-full border"
            style={{
              color: "var(--color-text-secondary)",
              borderColor: "var(--color-border-subtle)",
              background: "var(--color-surface-2)",
              whiteSpace: "nowrap",
            }}
          >
            {item.period}
          </span>
          <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            {item.duration}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>
        {item.description}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-2.5 mb-5" aria-label={`Key highlights at ${item.company}`}>
        {item.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <ChevronRight
              size={14}
              className="shrink-0 mt-0.5"
              style={{ color: "var(--color-accent)" }}
              aria-hidden="true"
            />
            <span style={{ color: "var(--color-text-secondary)" }}>{highlight}</span>
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div
        className="flex flex-wrap gap-2 pt-4 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
        aria-label="Technologies used"
      >
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-xs font-medium border"
            style={{
              background: "var(--color-surface-2)",
              color: "var(--color-text-secondary)",
              borderColor: "var(--color-border-subtle)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
