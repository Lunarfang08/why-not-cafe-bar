"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { musicNotes, site } from "@/content/site";

export function LiveMusic() {
  return (
    <section id="music" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-berry/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-teal/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-berry">
            Live music
          </p>
          <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-cream md:text-6xl">
            Free gigs. Grassroots energy.{" "}
            <span className="text-acid">Why not?</span>
          </h2>
          <p className="mt-4 max-w-2xl text-cream-muted">
            From garden afternoon sets to vinyl lounge nights — message us for
            what&apos;s on. Table reservations highly recommended on gig days.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {musicNotes.map((note, i) => (
            <Reveal key={note.title} delay={i * 0.1}>
              <article className="relative min-h-[280px] overflow-hidden md:min-h-[360px]">
                <Image
                  src={note.image}
                  alt={note.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-cream">
                    {note.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/85">{note.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition hover:border-acid hover:text-acid"
          >
            See what&apos;s on @whynot_cafebar
          </a>
        </Reveal>
      </div>
    </section>
  );
}
