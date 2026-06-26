import { Link } from "@tanstack/react-router"
import { euro, type Product } from "#/lib/catalogue"

export function ProductCard({ product, ratio = "aspect-[4/5]" }: { product: Product; ratio?: string }) {
  return (
    <Link to="/objet/$slug" params={{ slug: product.slug }} className="specimen group block">
      <div className={`card-media relative ${ratio} overflow-hidden bg-white`}>
        <img
          src={product.image}
          alt={`${product.name} — ${product.type}`}
          loading="lazy"
          className="specimen-img h-full w-full object-cover"
        />
        <span className="absolute right-3 top-3 z-10 bg-paper/80 px-2 py-1 font-mono text-[10px] tracking-[0.18em] text-ink backdrop-blur-sm">
          {product.category.toUpperCase()}
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.18em] text-stone">{product.ref}</p>
        <span className="font-mono text-sm text-stone">{euro(product.price)}</span>
      </div>
      <h3 className="font-display mt-1 text-xl font-medium leading-tight tracking-tight text-ink">{product.name}</h3>
      <p className="mt-1 text-sm text-stone">
        {product.type} · {product.size}
      </p>
    </Link>
  )
}
