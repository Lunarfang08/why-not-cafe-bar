"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { gallery, site } from "@/content/site";

export function Gallery() {
  return (
    <section id="gallery" className="bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-teal">
              Gallery
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-cream md:text-6xl">
              The look. The plates. The nights.
            </h2>
          </div>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-wider text-acid transition hover:text-cream"
          >
            Follow on Instagram →
          </a>
        </Reveal>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.05} className="mb-4 break-inside-avoid">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`relative overflow-hidden ${
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
