import { Fragment } from "react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "#/components/Reveal"
import { ProductCard } from "#/components/ProductCard"
import { Parallax } from "#/components/Parallax"
import { Magnetic } from "#/components/Magnetic"
import { collections, products, univers } from "#/lib/catalogue"

export const Route = createFileRoute("/")({ component: Home })

const HEADLINE = ["La", "déco", "qui", "fait", "la", "maison."]

function Home() {
  const featured = products.filter((p) =>
    [
      "maia-orage-jete-de-lit-240x260",
      "gastounet-velours-plaid-camel-140x200",
      "maia-epicea-coussin-45x45",
      "fara-sesame-plaid-135x200",
    ].includes(p.slug),
  )

  return (
    <>
      {/* ── HERO — full-bleed fabric ─────────────────────────── */}
      <section className="relative -mt-[73px] flex h-[94vh] min-h-[580px] w-full items-end overflow-hidden bg-ink">
        <Parallax speed={0.16} className="absolute -top-[8%] left-0 h-[116%] w-full">
          <img
            src="/products/fara-rubis-couvre-lit-240x260.jpg"
            alt="Couvre-lit Fara Rubis — hall décor"
            className="kenburns absolute inset-0 h-full w-full object-cover object-[50%_58%]"
          />
        </Parallax>
        <div className="scrim absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10 md:pb-24">
          <p className="eyebrow word-rise text-paper/75" style={{ "--word-i": 0 } as React.CSSProperties}>
            <span>Décoration · Bastia · depuis 1985</span>
          </p>
          <h1 className="font-display mt-6 max-w-[15ch] text-[clamp(2.8rem,8vw,7rem)] font-light leading-[0.98] tracking-[-0.01em] text-paper">
            <span className="word-rise">
              {HEADLINE.map((w, i) => (
                <Fragment key={i}>
                  <span style={{ "--word-i": i + 1 } as React.CSSProperties}>{w}</span>
                  {i < HEADLINE.length - 1 ? " " : ""}
                </Fragment>
              ))}
            </span>
          </h1>
          <p
            className="word-rise mt-7 max-w-lg text-lg leading-relaxed text-paper/85"
            style={{ "--word-i": HEADLINE.length + 2 } as React.CSSProperties}
          >
            <span>
              Papier peint, tissus, peinture, parquets, stores et linge de maison — tout pour habiller un intérieur, du
              sol au plafond. En boutique à Bastia et en click &amp; collect.
            </span>
          </p>
          <div
            className="word-rise mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ "--word-i": HEADLINE.length + 4 } as React.CSSProperties}
          >
            <span className="contents">
              <Magnetic strength={0.4}>
                <Link
                  to="/boutique"
                  className="label group inline-flex items-center gap-3 bg-paper px-7 py-4 text-xs text-ink transition-colors hover:bg-patina hover:text-paper"
                >
                  Voir la boutique
                  <ArrowRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Link to="/atelier" className="link-quiet label text-xs text-paper">
                Le magasin
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS INDEX ────────────────────────────────── */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex items-baseline justify-between py-8">
            <p className="eyebrow">Le linge de maison</p>
            <p className="eyebrow">Trois rayons</p>
          </div>
          <ul>
            {collections.map((c, i) => (
              <Reveal as="li" key={c.name} delay={i}>
                <Link
                  to="/boutique"
                  search={{ collection: c.name }}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t border-line py-8 transition-colors hover:bg-surface md:gap-12 md:py-10"
                >
                  <span className="font-mono text-sm text-stone">{c.index}</span>
                  <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                    <span className="font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">{c.name}</span>
                    <span className="max-w-md text-sm text-stone">{c.blurb}</span>
                  </span>
                  <ArrowUpRight
                    size={28}
                    strokeWidth={1.25}
                    className="text-stone transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-patina"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
          <div className="border-t border-line" />
        </div>
      </section>

      {/* ── MANIFESTO ────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
        <Reveal className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-24">
          <p className="eyebrow md:pt-3">La maison</p>
          <p className="font-display max-w-4xl text-[clamp(1.8rem,4vw,3.4rem)] font-light leading-[1.18] tracking-[-0.01em] text-ink">
            Depuis Bastia, hall décor habille les intérieurs de toute la Corse. Du papier peint qu'on pose au plaid qu'on
            jette sur le canapé, <span className="text-stone">le même soin, du sol au plafond.</span>
          </p>
        </Reveal>
      </section>

      {/* ── FEATURED ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-baseline justify-between border-t border-line py-8">
          <h2 className="font-display text-2xl font-medium tracking-tight text-ink">Nos coups de cœur</h2>
          <Link to="/boutique" className="link-quiet text-sm text-stone hover:text-ink">
            Tout voir
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 pb-8 md:grid-cols-4 md:gap-x-8">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── UNIVERS DRIFT ────────────────────────────────────── */}
      <section className="drift-wrap mt-24 overflow-hidden border-y border-line py-10">
        <div className="flex w-max drift gap-12 whitespace-nowrap will-change-transform">
          {[0, 1].map((dup) => (
            <span key={dup} className="flex gap-12" aria-hidden={dup === 1}>
              {univers.map((m) => (
                <span key={m} className="font-display text-3xl font-light tracking-tight text-ink/80 md:text-5xl">
                  {m}
                  <span className="px-12 text-patina">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-36">
        <Reveal className="grid items-end gap-10 md:grid-cols-2">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-light leading-[1.04] tracking-[-0.02em] text-ink">
            <span className="mask-line">
              <span>Venez nous voir,</span>
            </span>
            <span className="mask-line">
              <span style={{ "--line-i": 1 } as React.CSSProperties}>le café est offert.</span>
            </span>
          </h2>
          <div className="md:pb-3">
            <p className="max-w-md text-lg leading-relaxed text-ink-soft">
              Le magasin du rond‑point de Montesoro, l'équipe, et la façon dont on accompagne vos projets déco.
            </p>
            <Magnetic strength={0.3} className="mt-8">
              <Link
                to="/atelier"
                className="group inline-flex items-center gap-3 border-b border-ink pb-2 text-sm tracking-wide text-ink"
              >
                Découvrir le magasin
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </>
  )
}
