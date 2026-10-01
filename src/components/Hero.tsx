"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0 grain">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.12 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Warm bar interior at Why Not? Cafe-bar"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,255,71,0.18),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-4 text-sm uppercase tracking-[0.28em] text-acid"
        >
          Boothstown · Manchester
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(4.2rem,16vw,10.5rem)] font-extrabold leading-[0.85] tracking-[-0.04em] text-cream"
          >
            Why Not
            <span className="text-acid">?</span>
          </motion.h1>
        </div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-5 max-w-xl text-lg text-cream/90 md:text-xl"
        >
          {site.headline}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#menu"
            className="rounded-full bg-acid px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink transition hover:bg-cream"
          >
            See the menu
          </a>
          <a
            href={site.phoneHref}
            className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition hover:border-acid hover:text-acid"
          >
            Book a table
          </a>
        </motion.div>
      </div>
    </section>
  );
}
