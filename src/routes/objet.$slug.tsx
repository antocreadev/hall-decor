import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react"
import { ProductCard } from "#/components/ProductCard"
import { Reveal } from "#/components/Reveal"
import { getProduct, products, euro } from "#/lib/catalogue"

export const Route = createFileRoute("/objet/$slug")({ component: ObjetPage })

function ObjetPage() {
  const { slug } = Route.useParams()
  const product = getProduct(slug)

  if (!product) {
    return (
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-6 px-6 py-40 md:px-10">
        <p className="eyebrow">Erreur · 404</p>
        <h1 className="font-display text-5xl font-light tracking-tight text-ink">Cet article n'existe pas (ou plus).</h1>
        <Link to="/boutique" className="link-quiet text-ink">
          Retour à la boutique
        </Link>
      </div>
    )
  }

  const specs: [string, string][] = [
    ["Référence", product.ref],
    ["Rayon", product.category],
    ["Type", product.type],
    ["Dimensions", product.size],
  ]
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3)

  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-10 md:px-10 md:pt-16">
      {/* breadcrumb */}
      <div className="flex items-center gap-3 border-b border-line py-5 font-mono text-xs tracking-wider text-stone">
        <Link to="/boutique" className="link-quiet flex items-center gap-2 hover:text-ink">
          <ArrowLeft size={13} strokeWidth={1.5} /> Boutique
        </Link>
        <span>/</span>
        <Link to="/boutique" search={{ collection: product.category }} className="link-quiet hover:text-ink">
          {product.category}
        </Link>
      </div>

      {/* main */}
      <div className="grid gap-10 py-12 md:grid-cols-2 md:gap-16 md:py-20">
        <div className="relative aspect-[4/5] overflow-hidden bg-white md:aspect-[3/4]">
          <img src={product.image} alt={`${product.name} — ${product.type}`} className="h-full w-full object-contain p-8" />
        </div>

        <div className="flex flex-col md:py-4">
          <p className="font-mono text-xs tracking-[0.2em] text-stone">{product.ref} · {product.category}</p>
          <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.5rem)] font-light leading-[1.0] tracking-[-0.02em] text-ink">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-stone">{product.type} · {product.size}</p>
          <p className="mt-5 max-w-md text-lg text-ink-soft">{product.note}</p>

          <p className="font-display mt-8 text-3xl font-light text-ink">{euro(product.price)}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm tracking-wide text-paper transition-colors hover:bg-patina"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              Ajouter au panier
            </button>
            <span className="font-mono text-xs tracking-wider text-stone">Disponible en click &amp; collect</span>
          </div>

          {/* spec table */}
          <dl className="mt-12 border-t border-line">
            {specs.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-b border-line py-4">
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-stone">{k}</dt>
                <dd className="text-right text-sm text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-stone">
            Retrait gratuit au magasin de Bastia, ou livraison en Corse et sur le continent. Conseil déco offert sur
            simple demande.
          </p>
        </div>
      </div>

      {/* related */}
      {related.length > 0 && (
        <section className="border-t border-line py-16">
          <div className="flex items-baseline justify-between pb-10">
            <h2 className="font-display text-2xl font-medium tracking-tight text-ink">Dans le même rayon</h2>
            <Link to="/boutique" search={{ collection: product.category }} className="link-quiet text-sm text-stone hover:text-ink">
              Voir {product.category}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-x-8">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
