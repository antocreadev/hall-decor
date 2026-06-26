import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export const Route = createFileRoute("/contact")({ component: Contact })

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-16 md:px-10 md:pt-24">
      <header className="grid gap-10 border-b border-line pb-16 md:grid-cols-[auto_1fr] md:gap-24">
        <p className="eyebrow md:pt-3">Correspondance</p>
        <h1 className="font-display max-w-3xl text-[clamp(2.6rem,7vw,5.5rem)] font-light leading-[0.98] tracking-[-0.025em] text-flow">
          Écrivez‑nous.
        </h1>
      </header>

      <div className="grid gap-16 py-16 md:grid-cols-[1fr_0.8fr] md:gap-24">
        {/* form */}
        <div>
          {sent ? (
            <div className="flex flex-col gap-4">
              <p className="eyebrow text-patina">Message envoyé</p>
              <p className="font-display text-3xl font-light leading-snug tracking-tight text-ink">
                Merci, {form.name || "à vous"}. Nous revenons vers vous sous 48 heures.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-10"
              onSubmit={(e) => {
                e.preventDefault()
                if (form.email.includes("@") && form.message.trim()) setSent(true)
              }}
            >
              <Field label="Nom" htmlFor="name">
                <input id="name" required value={form.name} onChange={set("name")} className={inputCls} placeholder="Camille Devaux" />
              </Field>
              <Field label="E‑mail" htmlFor="email">
                <input id="email" type="email" required value={form.email} onChange={set("email")} className={inputCls} placeholder="camille@adresse.fr" />
              </Field>
              <Field label="Votre message" htmlFor="message">
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  className={`${inputCls} resize-none`}
                  placeholder="Une question sur une pièce, un rendez‑vous au showroom…"
                />
              </Field>
              <button
                type="submit"
                className="group inline-flex w-fit items-center gap-3 bg-ink px-8 py-4 text-sm tracking-wide text-paper transition-colors hover:bg-patina"
              >
                Envoyer le message
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>

        {/* details */}
        <aside className="flex flex-col gap-10 md:border-l md:border-line md:pl-16">
          <Detail label="Magasin">
            RN 193, Rond‑point de Montesoro
            <br />
            20600 Bastia
            <br />
            <span className="text-stone">Du lundi au samedi, 9h – 19h</span>
          </Detail>
          <Detail label="Écrire">
            <a href="mailto:bonjour@halldecor.fr" className="link-quiet text-ink">
              bonjour@halldecor.fr
            </a>
            <br />
            <a href="tel:+33495000000" className="link-quiet text-ink">
              04 95 00 00 00
            </a>
          </Detail>
          <Detail label="Suivre">
            <a href="https://instagram.com/halldecor2b" className="link-quiet text-ink">
              Instagram
            </a>
            <br />
            <span className="text-stone">@halldecor2b</span>
          </Detail>
        </aside>
      </div>
    </div>
  )
}

const inputCls =
  "w-full border-b border-line bg-transparent pb-3 text-lg text-ink placeholder:text-stone/70 transition-colors focus:border-ink focus:outline-none"

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-3">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-stone">{label}</span>
      {children}
    </label>
  )
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone">{label}</p>
      <p className="mt-3 text-lg leading-relaxed text-ink">{children}</p>
    </div>
  )
}
