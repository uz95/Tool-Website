import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caption Generator – Social Media Caption Templates",
  description: "Create caption ideas from topic-based templates for Instagram, business, travel, fitness and motivational posts.",
  alternates: { canonical: "https://www.fastwebtoolshub.com/tools/ai-caption-generator" },
};

export default function CaptionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
