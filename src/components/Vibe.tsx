"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site, vibePoints } from "@/content/site";

export function Vibe() {
  return (
    <section id="vibe" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-teal">
            The vibe
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream md:text-6xl">
            Quirky. Cosy.
            <br />
            <span className="text-berry">Properly local.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream-muted">
            {site.bio}
          </p>
          <ul className="mt-10 space-y-6">
            {vibePoints.map((point) => (
              <li key={point.title} className="border-l-2 border-acid/70 pl-5">
                <h3 className="font-display text-xl font-semibold text-cream">
                  {point.title}
                </h3>
                <p className="mt-1 text-cream-muted">{point.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/vibe.jpg"
              alt="Intimate cafe-bar dining atmosphere"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-berry/20" />
          </div>
          <div className="absolute -bottom-6 -left-4 bg-acid px-5 py-4 text-ink md:-left-8">
            <p className="font-display text-3xl font-extrabold leading-none">
              {site.stats.rating}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider">
              Google rating
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
