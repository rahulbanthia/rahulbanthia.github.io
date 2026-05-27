"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";
import ExperienceCard from "./ExperienceCard";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  const featured = experience.filter((e) => e.isFeatured);
  const rest     = experience.filter((e) => !e.isFeatured);

  return (
    <section
      id="experience"
      className="relative py-24 px-6"
      aria-labelledby="experience-heading"
    >
      {/* Subtle section divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-border), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
            style={{
              background: "rgba(0,212,255,0.08)",
              borderColor: "rgba(0,212,255,0.2)",
              color: "var(--color-accent)",
            }}
          >
            <Briefcase size={12} />
            Professional Experience
          </div>

          <h2
            id="experience-heading"
            className="section-heading text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Career{" "}
            <span className="gradient-text">Trajectory</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--color-text-secondary)" }}>
            From building full-stack features to leading engineering teams — a journey of
            continuous growth in both technical depth and leadership.
          </p>
        </motion.div>

        {/* Career progression banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 p-4 rounded-xl border flex flex-wrap items-center gap-3"
          style={{
            background: "rgba(0,212,255,0.04)",
            borderColor: "rgba(0,212,255,0.15)",
          }}
          aria-label="PeopleGrove career progression"
        >
          <TrendingUp size={16} style={{ color: "var(--color-accent)" }} />
          <span className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
            PeopleGrove progression:
          </span>
          {["SDE II", "Senior SDE", "Engineering Manager", "Engineering Manager II"].map(
            (role, i, arr) => (
              <span key={role} className="flex items-center gap-2">
                <span
                  className="text-sm font-semibold px-2.5 py-0.5 rounded-md"
                  style={{
                    background: i === arr.length - 1 ? "var(--color-accent)" : "var(--color-surface-2)",
                    color: i === arr.length - 1 ? "var(--color-background)" : "var(--color-text-primary)",
                  }}
                >
                  {role}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: "var(--color-text-muted)" }} aria-hidden="true">→</span>
                )}
              </span>
            )
          )}
          <span
            className="ml-auto text-xs px-2 py-0.5 rounded-full"
            style={{ color: "var(--color-text-muted)", background: "var(--color-surface-2)" }}
          >
            Apr 2021 – Present
          </span>
        </motion.div>

        {/* Featured card */}
        <div className="mb-6">
          {featured.map((exp, i) => (
            <ExperienceCard key={exp.id} item={exp} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div
          className="flex items-center gap-4 my-8"
          aria-hidden="true"
        >
          <div className="flex-1 h-px" style={{ background: "var(--color-border-subtle)" }} />
          <span className="text-xs font-medium px-3" style={{ color: "var(--color-text-muted)" }}>
            Earlier Roles
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--color-border-subtle)" }} />
        </div>

        {/* Rest of experience */}
        <div className="flex flex-col gap-5">
          {rest.map((exp, i) => (
            <ExperienceCard key={exp.id} item={exp} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
