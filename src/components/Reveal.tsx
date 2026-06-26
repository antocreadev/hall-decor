import { useEffect, useRef, type ReactNode } from "react"

/**
 * Scroll-triggered reveal. Each instance observes itself and flips
 * to `.is-visible` once. Restraint over spectacle (Kowalski): a
 * short, eased rise. Respects prefers-reduced-motion via CSS.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  /** stagger index — multiplied by 90ms in CSS */
  delay?: number
  as?: "div" | "section" | "li" | "article" | "header" | "figure"
}) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible")
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Comp = Tag as any
  return (
    <Comp
      ref={ref as any}
      data-reveal=""
      className={className}
      style={{ "--reveal-i": delay } as React.CSSProperties}
    >
      {children}
    </Comp>
  )
}
