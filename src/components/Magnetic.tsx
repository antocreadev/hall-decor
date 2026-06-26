import { useRef, type ReactNode } from "react"

/**
 * Magnetic control — the child eases toward the cursor while hovered,
 * springs back on leave. Pointer-fine + reduced-motion safe.
 */
export function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = "translate(0, 0)"
  }

  return (
    <span
      ref={ref}
      className={`magnetic inline-flex ${className}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </span>
  )
}
