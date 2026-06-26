import { useEffect, useRef, type ReactNode } from "react"

/**
 * Scroll parallax — translates the child vertically as it passes the
 * viewport. Use on an oversized element inside an `overflow-hidden`
 * parent so edges never show. Reduced-motion safe.
 */
export function Parallax({
  children,
  speed = 0.12,
  className = "",
}: {
  children: ReactNode
  /** fraction of viewport height to drift across the full pass */
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let raf = 0
    let inView = true
    const io = new IntersectionObserver(([e]) => (inView = e.isIntersecting), { rootMargin: "150px" })
    io.observe(el)

    const update = () => {
      raf = 0
      if (!inView) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const progress = (r.top + r.height / 2 - vh / 2) / vh // -~1 .. ~1
      el.style.transform = `translate3d(0, ${(progress * speed * 100).toFixed(2)}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    update()
    return () => {
      io.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  )
}
