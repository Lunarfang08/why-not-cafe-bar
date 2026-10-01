import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-ink-soft">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-4xl font-extrabold tracking-tight text-cream md:text-5xl">
            Why Not<span className="text-acid">?</span>
          </p>
          <p className="mt-2 text-sm text-cream-muted">
            Cafe-bar · Boothstown · Manchester
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-cream-muted">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-acid"
          >
            @whynot_cafebar
          </a>
          <a href={site.phoneHref} className="hover:text-acid">
            {site.phone}
          </a>
        </div>
      </div>
      <div className="border-t border-cream/5 px-5 py-4 text-center text-xs text-cream-muted/70 md:px-8">
        © {year} Why Not? Cafe-bar. All rights reserved.
      </div>
    </footer>
  );
}
