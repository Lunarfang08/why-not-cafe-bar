"use client";

import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export function Visit() {
  return (
    <section id="visit" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-acid">
            Visit
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-cream md:text-6xl">
            Find us in Boothstown.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-cream">
                  Address
                </h3>
                <p className="mt-2 text-cream-muted">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}
                </p>
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-acid hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-cream">
                  Call / book
                </h3>
                <a
                  href={site.phoneHref}
                  className="mt-2 block font-display text-3xl font-bold text-berry transition hover:text-acid"
                >
                  {site.phone}
                </a>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-cream">
                  Hours
                </h3>
                <ul className="mt-3 space-y-2">
                  {site.hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex max-w-xs justify-between border-b border-cream/10 pb-2 text-sm"
                    >
                      <span className="text-cream-muted">{row.day}</span>
                      <span className="font-medium text-cream">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-wider text-cream-muted transition hover:text-acid"
                >
                  Instagram
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-wider text-cream-muted transition hover:text-acid"
                >
                  Facebook
                </a>
                <a
                  href={site.social.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-wider text-cream-muted transition hover:text-acid"
                >
                  TripAdvisor
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative min-h-[360px] overflow-hidden border border-cream/10 bg-ink-soft md:min-h-[480px]">
              <iframe
                title="Why Not? Cafe-bar map"
                src={site.address.embedUrl}
                className="absolute inset-0 h-full w-full grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
