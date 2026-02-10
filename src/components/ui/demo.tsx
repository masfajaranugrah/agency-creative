import * as React from "react";

import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const rowOne = [
  { src: "/dayana/Asset 104542212.png", alt: "Sentral Cargo" },
  { src: "/dayana/Asset 114542212.png", alt: "Euromedica" },
  { src: "/dayana/Asset 124542212.png", alt: "Ekle's" },
  { src: "/dayana/Asset 134542212.png", alt: "ASRI" },
  { src: "/dayana/Asset 144542212.png", alt: "NSS" },
  { src: "/dayana/Asset 154542212.png", alt: "Scarlett" },
  { src: "/dayana/Asset 164542212.png", alt: "Samsonite" },
];

const rowTwo = [
  { src: "/dayana/Asset 174542212.png", alt: "D'Grosir" },
  { src: "/dayana/Asset 184542212.png", alt: "Yummy Choice" },
  { src: "/dayana/Asset 194542212.png", alt: "KB Insurance" },
  { src: "/dayana/Asset 204542212.png", alt: "HokBen" },
  { src: "/dayana/Asset 214542212.png", alt: "Yupi" },
  { src: "/dayana/Asset 224542212.png", alt: "Aice" },
  { src: "/dayana/Asset 234542212.png", alt: "Realfood" },
];

const rowThree = [
  { src: "/dayana/Asset 244542212.png", alt: "Menara BPJAMSOSTEK" },
  { src: "/dayana/Asset 24542212.png", alt: "Dinas Pariwisata" },
  { src: "/dayana/Asset 254542212.png", alt: "Dinas Kominfo" },
  { src: "/dayana/Asset 264542212.png", alt: "Institut" },
  { src: "/dayana/Asset 274542212.png", alt: "ITB" },
  { src: "/dayana/Asset 284542212.png", alt: "Telkom University" },
  { src: "/dayana/Asset 294542212.png", alt: "UMN" },
  { src: "/dayana/Asset 304542212.png", alt: "Sekolah Ciputra" },
];

function LogoRow({ logos, reverse = false, speed = 50 }: { logos: { src: string; alt: string }[]; reverse?: boolean; speed?: number }) {
  return (
    <InfiniteSlider gap={40} reverse={reverse} duration={speed} durationOnHover={25}>
      {logos.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          className="pointer-events-none h-8 select-none md:h-10"
          loading="lazy"
        />
      ))}
    </InfiniteSlider>
  );
}

export default function DemoOne() {
  return (
    <div className="relative min-h-[60vh] w-full place-content-center bg-white py-10">
      <div
        aria-hidden="true"
        className={cn(
          "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
          "blur-[30px]"
        )}
      />

      <section className="relative mx-auto max-w-5xl px-6">
        <h2 className="mb-6 text-center text-lg font-medium text-foreground md:text-2xl">
          Dipercaya oleh 3000+ bisnis dan brands terbesar di Indonesia
        </h2>

        <div className="space-y-6">
          <LogoRow logos={rowOne} reverse speed={60} />
          <LogoRow logos={rowTwo} speed={55} />
          <LogoRow logos={rowThree} reverse speed={65} />
        </div>
      </section>
    </div>
  );
}
