import { Link } from "@tanstack/react-router"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { collections } from "#/lib/catalogue"

export function Footer() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <footer className="mt-32 border-t border-line bg-surface">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10">
        {/* newsletter */}
        <div className="grid gap-12 border-b border-line pb-16 md:grid-cols-[1.1fr_1fr] md:gap-24">
          <div>
            <p className="eyebrow">Correspondance</p>
            <h2 className="font-display mt-4 max-w-md text-3xl font-light leading-[1.1] tracking-tight text-ink md:text-4xl">
              Les nouvelles pièces, l'avant‑première des éditions, rien d'autre.
            </h2>
          </div>
          <form
            className="flex flex-col justify-end"
            onSubmit={(e) => {
              e.preventDefault()
              if (email.includes("@")) setSent(true)
            }}
          >
            {sent ? (
              <p className="font-mono text-sm text-patina">— Inscription reçue. À très vite.</p>
            ) : (
              <div className="flex items-center gap-3 border-b border-ink pb-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@adresse.fr"
                  className="w-full bg-transparent text-lg text-ink placeholder:text-stone focus:outline-none"
                  aria-label="Adresse e-mail"
                />
                <button type="submit" className="text-ink transition-transform hover:translate-x-1" aria-label="S'inscrire">
                  <ArrowRight size={22} strokeWidth={1.5} />
                </button>
              </div>
            )}
            <p className="eyebrow mt-3">Une lettre par saison · désinscription libre</p>
          </form>
        </div>

        {/* link columns */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">
          <nav className="flex flex-col gap-3">
            <p className="eyebrow mb-2">Collections</p>
            {collections.map((c) => (
              <Link
                key={c.name}
                to="/boutique"
                search={{ collection: c.name }}
                className="link-quiet w-fit text-sm text-stone hover:text-ink"
              >
                {c.name}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col gap-3">
            <p className="eyebrow mb-2">Maison</p>
            <Link to="/atelier" className="link-quiet w-fit text-sm text-stone hover:text-ink">L'atelier</Link>
            <Link to="/atelier" className="link-quiet w-fit text-sm text-stone hover:text-ink">Savoir‑faire</Link>
            <Link to="/contact" className="link-quiet w-fit text-sm text-stone hover:text-ink">Nous écrire</Link>
          </nav>
          <nav className="flex flex-col gap-3">
            <p className="eyebrow mb-2">Service</p>
            <span className="text-sm text-stone">Click &amp; collect</span>
            <span className="text-sm text-stone">Livraison Corse &amp; continent</span>
            <span className="text-sm text-stone">Conseil décoration</span>
          </nav>
          <div className="flex flex-col gap-3">
            <p className="eyebrow mb-2">Magasin</p>
            <span className="text-sm text-stone">RN 193 · Rond‑point de Montesoro</span>
            <span className="text-sm text-stone">20600 Bastia</span>
            <a href="mailto:bonjour@halldecor.fr" className="link-quiet w-fit text-sm text-stone hover:text-ink">
              bonjour@halldecor.fr
            </a>
          </div>
        </div>

        {/* oversized wordmark */}
        <div className="overflow-hidden">
          <p className="font-display select-none whitespace-nowrap text-[16vw] font-light leading-[0.82] tracking-[-0.04em] text-ink/90 md:text-[12vw]">
            hall décor
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 text-stone sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs">© 2026 hall décor — Décoration, Bastia</p>
          <p className="font-mono text-xs">RN 193, Montesoro · Haute‑Corse</p>
        </div>
      </div>
    </footer>
  )
}
