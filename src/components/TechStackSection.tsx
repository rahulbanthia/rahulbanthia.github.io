"use client";

import { motion } from "framer-motion";
import { Code2, Layers } from "lucide-react";
import TechBadge from "./TechBadge";
import { techStack } from "@/data/tech";

const categories = [
  { key: "language",  label: "Languages"         },
  { key: "frontend",  label: "Frontend"          },
  { key: "backend",   label: "Backend"           },
  { key: "database",  label: "Data & Storage"    },
  { key: "devops",    label: "DevOps & Cloud"    },
] as const;

export default function TechStackSection() {
  return (
    <section
      id="tech"
      className="relative py-24 px-6"
      style={{ background: "var(--color-surface)" }}
      aria-labelledby="tech-heading"
    >
      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-background), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-background), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
            style={{
              background: "rgba(99,102,241,0.1)",
              borderColor: "rgba(99,102,241,0.25)",
              color: "var(--color-secondary)",
            }}
          >
            <Code2 size={12} />
            Core Proficiencies
          </div>

          <h2
            id="tech-heading"
            className="section-heading text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Tech{" "}
            <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            A full-stack toolkit spanning languages, frameworks, databases, and cloud infrastructure —
            wielded to build reliable, high-scale systems.
          </p>
        </motion.div>

        {/* Grouped grids */}
        <div className="flex flex-col gap-10">
          {categories.map((cat) => {
            const items = techStack.filter((t) => t.category === cat.key);
            if (items.length === 0) return null;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Layers size={13} style={{ color: "var(--color-text-muted)" }} aria-hidden="true" />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {cat.label}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "var(--color-border-subtle)" }}
                    aria-hidden="true"
                  />
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {items.map((tech, i) => (
                    <TechBadge key={tech.id} tech={tech} index={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
