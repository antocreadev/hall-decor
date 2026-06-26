import { Link, useRouterState } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"

const NAV = [
  { to: "/boutique", label: "Boutique" },
  { to: "/atelier", label: "Atelier" },
  { to: "/contact", label: "Contact" },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // light header content while floating over the home hero
  const overHero = pathname === "/" && !scrolled && !open

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-paper/85 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-5 md:px-10">
        {/* logo + tagline */}
        <Link to="/" className="group flex items-center gap-4" onClick={() => setOpen(false)}>
          <img
            src="/brand/logo.jpg"
            alt="hall décor"
            className={overHero ? "h-9 w-auto brightness-0 invert" : "logo-blend h-9 w-auto"}
          />
          <span className={`eyebrow hidden sm:block ${overHero ? "text-paper/70" : ""}`}>Décoration · Bastia</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`link-quiet label text-xs transition-colors ${
                overHero ? "text-paper/80 hover:text-paper" : "text-stone hover:text-ink"
              }`}
              activeProps={{ className: `link-quiet label text-xs ${overHero ? "text-paper" : "text-ink"}` }}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className={`link-quiet label flex items-center gap-2 text-xs ${overHero ? "text-paper" : "text-ink"}`}
            aria-label="Panier, 0 article"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            <span className="font-mono text-xs">(0)</span>
          </button>
        </nav>

        {/* mobile toggle */}
        <button
          type="button"
          className={`md:hidden ${overHero ? "text-paper" : "text-ink"}`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* mobile panel */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-0 z-40 flex h-[100dvh] flex-col justify-center bg-paper px-6">
          <nav className="flex flex-col gap-2">
            {NAV.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-ink"
                style={{ animationDelay: `${i * 60}ms` }}
                activeProps={{ className: "font-display text-4xl text-patina" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="eyebrow mt-12">hall décor · Bastia · Corse</p>
        </div>
      )}
    </header>
  )
}
