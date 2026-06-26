export type Category = "Linge de lit" | "Coussins" | "Plaids"

export type Product = {
  slug: string
  ref: string
  name: string
  type: string
  category: Category
  size: string
  price: number
  image: string
  note: string
}

export const collections: { name: Category; index: string; blurb: string }[] = [
  { name: "Linge de lit", index: "01", blurb: "Couvre‑lits, jetés et édredons — la chambre, habillée." },
  { name: "Coussins", index: "02", blurb: "Velours, brodés, à motifs : la touche qui change la pièce." },
  { name: "Plaids", index: "03", blurb: "Mailles et velours, pour les soirées qui s'étirent." },
]

/** the full breadth of the house — shown as a ticker */
export const univers = [
  "Papier peint",
  "Tissus",
  "Peinture",
  "Parquet & sols",
  "Stores intérieurs",
  "Coussins",
  "Plaids",
  "Linge de lit",
]

export const products: Product[] = [
  {
    slug: "fara-rubis-couvre-lit-240x260",
    ref: "HD-743",
    name: "Fara Rubis",
    type: "Couvre‑lit",
    category: "Linge de lit",
    size: "240 × 260 cm",
    price: 209,
    image: "/products/fara-rubis-couvre-lit-240x260.jpg",
    note: "Un rouge profond, matelassé, qui pose immédiatement l'ambiance d'une chambre.",
  },
  {
    slug: "maia-orage-jete-de-lit-240x260",
    ref: "HD-719",
    name: "Maia Orage",
    type: "Jeté de lit",
    category: "Linge de lit",
    size: "240 × 260 cm",
    price: 162,
    image: "/products/maia-orage-jete-de-lit-240x260.jpg",
    note: "Le gris orage de la collection Maia, à jeter d'un geste sur le lit.",
  },
  {
    slug: "zeff-masai-bronze-edredon-80x180",
    ref: "HD-2178",
    name: "Zeff Masai Bronze",
    type: "Édredon",
    category: "Linge de lit",
    size: "80 × 180 cm",
    price: 105,
    image: "/products/zeff-masai-bronze-edredon-80x180.jpg",
    note: "Un bandeau d'édredon bronze, posé en bout de lit comme une signature.",
  },
  {
    slug: "maia-agave-coussin-30x50",
    ref: "HD-670",
    name: "Maia Agave",
    type: "Coussin",
    category: "Coussins",
    size: "30 × 50 cm",
    price: 29,
    image: "/products/maia-agave-coussin-30x50.jpg",
    note: "Le vert agave, format lombaire, pour réveiller un canapé neutre.",
  },
  {
    slug: "maia-epicea-coussin-45x45",
    ref: "HD-673",
    name: "Maia Epicéa",
    type: "Coussin",
    category: "Coussins",
    size: "45 × 45 cm",
    price: 34,
    image: "/products/maia-epicea-coussin-45x45.jpg",
    note: "Un vert épicéa carré, dense, qui se marie au bois et au lin.",
  },
  {
    slug: "gastounet-velours-plaid-camel-140x200",
    ref: "HD-787",
    name: "Gastounet Velours",
    type: "Plaid camel",
    category: "Plaids",
    size: "140 × 200 cm",
    price: 203,
    image: "/products/gastounet-velours-plaid-camel-140x200.jpg",
    note: "Velours camel, grand format : le plaid qu'on garde sorti toute l'année.",
  },
  {
    slug: "fara-sesame-plaid-135x200",
    ref: "HD-728",
    name: "Fara Sésame",
    type: "Plaid",
    category: "Plaids",
    size: "135 × 200 cm",
    price: 125,
    image: "/products/fara-sesame-plaid-135x200.jpg",
    note: "Un beige sésame doux, maille fine, qui se fond dans tous les intérieurs.",
  },
  {
    slug: "maia-bronze-coussin-30x50",
    ref: "HD-2159",
    name: "Maia Bronze",
    type: "Coussin",
    category: "Coussins",
    size: "30 × 50 cm",
    price: 29,
    image: "/products/maia-bronze-coussin-30x50.jpg",
    note: "Le bronze chaud de la collection Maia, en coussin lombaire.",
  },
]

export const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n)

export const getProduct = (slug: string) => products.find((p) => p.slug === slug)
