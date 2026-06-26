import { createFileRoute, Link } from "@tanstack/react-router"
import { Reveal } from "#/components/Reveal"
import { ProductCard } from "#/components/ProductCard"
import { products, collections, type Category } from "#/lib/catalogue"

type BoutiqueSearch = { collection?: Category }

const VALID: Category[] = ["Linge de lit", "Coussins", "Plaids"]

export const Route = createFileRoute("/boutique")({
  validateSearch: (search: Record<string, unknown>): BoutiqueSearch => {
    const c = search.collection
    return { collection: typeof c === "string" && VALID.includes(c as Category) ? (c as Category) : undefined }
  },
  component: Boutique,
})

function Boutique() {
  const { collection } = Route.useSearch()
  const list = collection ? products.filter((p) => p.category === collection) : products

  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-16 md:px-10 md:pt-24">
      {/* heading */}
      <header className="border-b border-line pb-10">
        <p className="eyebrow">Boutique · {String(list.length).padStart(2, "0")} articles</p>
        <h1 className="font-display mt-5 text-[clamp(2.6rem,7vw,5.5rem)] font-light leading-[0.98] tracking-[-0.02em] text-flow">
          {collection ?? "Le linge de maison"}
        </h1>
        {collection && (
          <p className="mt-4 max-w-xl text-stone">{collections.find((c) => c.name === collection)?.blurb}</p>
        )}
      </header>

      {/* filters */}
      <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 py-7">
        <Link to="/boutique" className="text-sm tracking-wide">
          <span className={!collection ? "link-quiet text-ink" : "link-quiet text-stone hover:text-ink"}>Tout</span>
        </Link>
        {collections.map((c) => (
          <Link key={c.name} to="/boutique" search={{ collection: c.name }} className="text-sm tracking-wide">
            <span className={collection === c.name ? "link-quiet text-ink" : "link-quiet text-stone hover:text-ink"}>
              {c.name}
            </span>
          </Link>
        ))}
      </nav>

      {/* grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={i % 4}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
