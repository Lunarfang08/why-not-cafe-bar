"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { menuHighlights } from "@/content/site";

export function Menu() {
  return (
    <section id="menu" className="relative bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-acid">
            On the menu
          </p>
          <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight text-cream md:text-6xl">
            Carbs, comfort & a bit of sass.
          </h2>
          <p className="mt-4 max-w-xl text-cream-muted">
            Highlights from the kitchen — tiger loaf legends, loaded naans,
            pies, breakfasts and drinks worth hanging around for.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {menuHighlights.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 bg-ink/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-acid backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-cream transition-colors group-hover:text-acid">
                  {item.name}
                </h3>
                <div className="mt-2 h-px w-10 bg-berry transition-all duration-300 group-hover:w-20 group-hover:bg-acid" />
                <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                  {item.description}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
