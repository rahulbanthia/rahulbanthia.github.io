import type { VideoItem, GenreTag } from "@/types";

export const videos: VideoItem[] = [
  {
    id: "v1",
    title: "Tum Hi Ho — Piano Cover",
    videoId: "channel",
    genre: "Bollywood",
    description: "Aashiqui 2 classic on KORG keyboard",
  },
  {
    id: "v2",
    title: "Dil Diyan Gallan — Piano Cover",
    videoId: "channel",
    genre: "Bollywood",
    description: "Tiger Zinda Hai soundtrack on piano",
  },
  {
    id: "v3",
    title: "Chaudhary — Piano Cover",
    videoId: "channel",
    genre: "Acoustic",
    description: "Mame Khan classic acoustic interpretation",
  },
  {
    id: "v4",
    title: "Perfect — Ed Sheeran Piano Cover",
    videoId: "channel",
    genre: "Western",
    description: "A heartfelt piano rendition",
  },
  {
    id: "v5",
    title: "Ghazal Medley — KORG Performance",
    videoId: "channel",
    genre: "Ghazal",
    description: "Timeless Urdu ghazals on KORG keyboard",
  },
];

export const genreTags: GenreTag[] = [
  { label: "Bollywood",        color: "#FF6B6B" },
  { label: "Ghazals",          color: "#A78BFA" },
  { label: "Western Classics", color: "#34D399" },
  { label: "Acoustic Covers",  color: "#FBBF24" },
];
