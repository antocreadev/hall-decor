import { createFileRoute, Link } from "@tanstack/react-router"
import { Reveal } from "#/components/Reveal"
import { getProduct } from "#/lib/catalogue"

export const Route = createFileRoute("/atelier")({ component: Atelier })

const PRINCIPLES = [
  { n: "01", t: "Conseiller", d: "Venez avec vos photos et vos mesures ; on repart ensemble avec un vrai projet déco." },
  { n: "02", t: "Sélectionner", d: "Papier peint, tissus, peinture, sols : on ne référence que des marques qui tiennent dans le temps." },
  { n: "03", t: "Poser & livrer", d: "Découpe, conseils de pose, livraison en Corse comme sur le continent." },
  { n: "04", t: "Click & collect", d: "Commandez en ligne, retirez au magasin du rond‑point de Montesoro quand ça vous arrange." },
]

function Atelier() {
  const a = getProduct("gastounet-velours-plaid-camel-140x200")!
  const b = getProduct("maia-orage-jete-de-lit-240x260")!

  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-16 md:px-10 md:pt-24">
      {/* intro */}
      <header className="grid gap-10 border-b border-line pb-20 md:grid-cols-[auto_1fr] md:gap-24">
        <p className="eyebrow md:pt-3">Le magasin</p>
        <h1 className="font-display max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.06] tracking-[-0.02em] text-ink">
          hall décor, c'est le magasin de décoration de Bastia : un endroit où l'on vient chercher une couleur autant
          qu'un conseil.
        </h1>
      </header>

      {/* narrative */}
      <section className="grid items-start gap-12 py-24 md:grid-cols-2 md:gap-24">
        <Reveal className="relative aspect-[4/5] overflow-hidden bg-white">
          <img src={a.image} alt={a.name} className="h-full w-full object-contain p-6" />
          <div className="absolute -right-4 bottom-6 bg-paper/90 px-5 py-3 backdrop-blur-sm md:-right-10">
            <p className="font-mono text-[11px] tracking-[0.18em] text-stone">{a.ref}</p>
            <p className="font-display text-xl font-medium tracking-tight text-ink">{a.name}</p>
          </div>
        </Reveal>
        <Reveal className="flex flex-col gap-6 text-lg leading-relaxed text-ink-soft md:pt-6" delay={1}>
          <p>
            Au rond‑point de Montesoro, hall décor accompagne les intérieurs corses depuis des années : du papier peint
            d'un mur d'accent à la peinture d'une chambre d'enfant, des tissus au mètre aux parquets et aux stores.
          </p>
          <p>
            On aime les projets entiers comme les petits coups de cœur — un coussin, un plaid, un jeté qui change une
            pièce. Et on prend le temps de conseiller : c'est ce qui fait la différence entre un magasin et un bon
            magasin.
          </p>
          <p className="font-display text-2xl font-light leading-snug tracking-tight text-ink">
            « Une maison bien décorée, ça commence par une bonne conversation. »
          </p>
        </Reveal>
      </section>

      {/* principles */}
      <section className="border-t border-line py-8">
        <p className="eyebrow py-8">Notre façon de faire</p>
        <ul>
          {PRINCIPLES.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i}>
              <div className="grid grid-cols-[auto_1fr] items-start gap-6 border-t border-line py-10 md:grid-cols-[auto_0.4fr_1fr] md:gap-12">
                <span className="font-mono text-sm text-stone">{p.n}</span>
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">{p.t}</h3>
                <p className="col-span-2 max-w-md text-stone md:col-span-1">{p.d}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </ul>
      </section>

      {/* closing */}
      <section className="grid items-end gap-12 py-28 md:grid-cols-2 md:gap-24">
        <Reveal className="relative aspect-[5/4] overflow-hidden bg-white" delay={1}>
          <img src={b.image} alt={b.name} className="h-full w-full object-contain p-6" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.06] tracking-[-0.02em] text-fir">
            Le reste se passe en magasin.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Passez voir les collections en vrai, ou commandez en ligne et venez retirer — on vous attend à Montesoro.
          </p>
          <div className="mt-8 flex gap-8">
            <Link to="/boutique" className="bg-ink px-7 py-4 text-sm tracking-wide text-paper transition-colors hover:bg-patina">
              Voir la boutique
            </Link>
            <Link to="/contact" className="link-quiet self-center text-sm text-ink">
              Nous trouver
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
