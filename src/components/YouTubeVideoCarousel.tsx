"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Music2 } from "lucide-react";
import { videos } from "@/data/videos";
import type { VideoItem } from "@/types";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@rahulbanthia";

const genreColors: Record<string, string> = {
  Bollywood: "#FF6B6B",
  Acoustic: "#FBBF24",
  Western: "#34D399",
  Ghazal: "#A78BFA",
};

function VideoCard({ video }: { video: VideoItem }) {
  const channelUrl = YOUTUBE_CHANNEL;

  return (
    <a
      href={channelUrl}
      target="_blank"
      rel="noopener noreferrer"
      id={`video-card-${video.id}`}
      className="flex-shrink-0 w-64 sm:w-72 rounded-xl overflow-hidden border card-hover block group"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
      aria-label={`Watch ${video.title} on YouTube`}
    >
      {/* Thumbnail placeholder */}
      <div
        className="relative w-full aspect-video flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--color-surface-2) 0%, #0a1628 100%)" }}
      >
        {/* Animated music visualiser bars */}
        <div className="flex items-end gap-1" aria-hidden="true">
          {[3, 5, 4, 6, 3, 5, 4, 3, 5].map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full"
              style={{
                height: `${h * 4}px`,
                background: "var(--color-accent)",
                opacity: 0.6,
                animation: `float ${1.2 + i * 0.15}s ease-in-out infinite ${i % 2 === 0 ? "" : "reverse"}`,
              }}
            />
          ))}
        </div>

        {/* Play button overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "var(--color-accent)" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 ml-0.5"
              style={{ color: "var(--color-background)" }}
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Genre badge */}
        <div
          className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-semibold"
          style={{
            background: `${genreColors[video.genre] ?? "#8ba3c4"}22`,
            color: genreColors[video.genre] ?? "var(--color-text-secondary)",
            border: `1px solid ${genreColors[video.genre] ?? "#8ba3c4"}44`,
          }}
        >
          {video.genre}
        </div>

        {/* External link icon */}
        <div
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <ExternalLink size={14} />
        </div>
      </div>

      {/* Card content */}
      <div className="p-4">
        <h3
          className="text-sm font-semibold leading-snug mb-1 group-hover:text-[var(--color-accent)] transition-colors duration-200"
          style={{ color: "var(--color-text-primary)" }}
        >
          {video.title}
        </h3>
        {video.description && (
          <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            {video.description}
          </p>
        )}
      </div>
    </a>
  );
}

export default function YouTubeVideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Prev button */}
      <button
        id="carousel-prev"
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none"
        style={{
          background: "var(--color-surface-2)",
          borderColor: "var(--color-border)",
          color: "var(--color-text-secondary)",
        }}
        aria-label="Scroll left"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        role="list"
        aria-label="Piano cover videos"
      >
        {videos.map((video) => (
          <div key={video.id} role="listitem">
            <VideoCard video={video} />
          </div>
        ))}

        {/* "See all" card */}
        <a
          href={YOUTUBE_CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          id="carousel-see-all"
          className="flex-shrink-0 w-64 sm:w-72 rounded-xl border flex flex-col items-center justify-center gap-3 p-6 card-hover"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(99,102,241,0.04) 100%)",
            borderColor: "rgba(0,212,255,0.2)",
            borderStyle: "dashed",
          }}
          aria-label="Visit YouTube channel to see all videos"
          role="listitem"
        >
          <Music2 size={28} style={{ color: "var(--color-accent)" }} />
          <span className="text-sm font-semibold text-center" style={{ color: "var(--color-text-primary)" }}>
            See all videos
          </span>
          <span className="text-xs text-center" style={{ color: "var(--color-text-muted)" }}>
            Visit the YouTube channel
          </span>
        </a>
      </div>

      {/* Next button */}
      <button
        id="carousel-next"
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none"
        style={{
          background: "var(--color-surface-2)",
          borderColor: "var(--color-border)",
          color: "var(--color-text-secondary)",
        }}
        aria-label="Scroll right"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
