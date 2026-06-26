const SLIDES = [
  "/scene/papier-peint-posidonie.jpg",
  "/scene/papier-peint-trenza.jpg",
  "/scene/papier-peint-sibia.jpg",
  "/scene/papier-peint-tigris.jpg",
  "/scene/papier-peint-sabal.jpg",
]

/** Full-bleed crossfading slideshow of decor scenes, each with Ken Burns. */
export function HeroSlideshow() {
  const cycle = 45
  const slot = cycle / SLIDES.length
  return (
    <div className="absolute inset-0">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="hero-slide absolute inset-0 overflow-hidden"
          style={{ animationDelay: `${-(i * slot)}s` }}
        >
          <img
            src={src}
            alt=""
            aria-hidden="true"
            loading={i === 0 ? "eager" : "lazy"}
            className="kenburns absolute inset-0 h-full w-full object-cover object-center"
            style={{ animationDelay: `${-(i * 5)}s` }}
          />
        </div>
      ))}
    </div>
  )
}
