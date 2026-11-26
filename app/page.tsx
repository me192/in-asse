import { site } from "./config";

function Freccia() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconaSocial({ nome }: { nome: string }) {
  const p = { viewBox: "0 0 24 24", className: "h-5 w-5", fill: "currentColor", "aria-hidden": true };
  switch (nome) {
    case "Instagram":
      return (
        <svg {...p} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...p}>
          <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.1V8.9l5.8 3.1-5.8 3.1Z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...p}>
          <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.2v12.4a2.6 2.6 0 1 1-1.8-2.5V9.6a5.8 5.8 0 1 0 5 5.8V9.1a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5Z" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.3a21 21 0 0 0-2.4-.1c-2.4 0-4 1.5-4 4.1v2.2H8v3.6h2.6V21H14v-8.9h2.6l.4-3.6H14Z" />
        </svg>
      );
  }
}

export default function Home() {
  const iniziali = site.nome
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* bagliore di fondo */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,var(--glow),transparent_70%)]"
      />

      <main className="relative mx-auto flex w-full max-w-md flex-col gap-10 px-4 pb-16 pt-12">
        {/* Profilo */}
        <header className="flex flex-col items-center text-center">
          <div className="rounded-full bg-gradient-to-tr from-[var(--gold)] via-[#f3d38a] to-[var(--gold-dark)] p-[3px]">
            {site.foto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.foto} alt={site.nome} className="h-28 w-28 rounded-full border-4 border-[var(--bg)] object-cover" />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-[var(--bg)] bg-[var(--card)] font-serif text-4xl text-[var(--gold)]">
                {iniziali}
              </div>
            )}
          </div>
          <h1 className="mt-5 font-serif text-4xl tracking-tight">{site.nome}</h1>
          <a href={site.instagram} className="mt-1 text-sm text-[var(--muted)] hover:text-[var(--gold)]">
            {site.handle}
          </a>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">{site.motto}</p>
          <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[var(--muted)]">{site.bio}</p>

          <nav className="mt-6 flex gap-3" aria-label="Social">
            {site.social.map((s) => (
              <a
                key={s.nome}
                href={s.url}
                aria-label={s.nome}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                <IconaSocial nome={s.nome} />
              </a>
            ))}
          </nav>
        </header>

        {/* Regali */}
        <section aria-labelledby="regali">
          <h2 id="regali" className="mb-1 text-center font-serif text-2xl">
            Il tuo regalo gratuito
          </h2>
          <p className="mb-5 text-center text-sm text-[var(--muted)]">
            Scrivimi la parola chiave in DM e te lo mando subito.
          </p>
          <div className="flex flex-col gap-4">
            {site.regali.map((r) => (
              <a
                key={r.parola}
                href={r.url}
                className="group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 transition hover:border-[var(--gold)]"
              >
                <span className="inline-block rounded-md bg-[var(--gold)] px-2.5 py-1 font-mono text-sm font-bold tracking-widest text-[#1a1408]">
                  {r.parola}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{r.titolo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{r.testo}</p>
                <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--gold)]">
                  Scrivi «{r.parola}» in DM
                  <span className="transition group-hover:translate-x-1">
                    <Freccia />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Link */}
        <section aria-label="Link" className="flex flex-col gap-3">
          {site.link.map((l, i) => (
            <a
              key={l.titolo}
              href={l.url}
              className={
                "flex items-center justify-between gap-4 rounded-2xl px-5 py-4 transition " +
                (i === 0
                  ? "bg-[var(--gold)] text-[#1a1408] hover:brightness-110"
                  : "border border-[var(--line)] bg-[var(--card)] hover:border-[var(--gold)]")
              }
            >
              <span className="flex flex-col">
                <span className="font-semibold">{l.titolo}</span>
                <span className={"text-xs " + (i === 0 ? "text-[#1a1408]/70" : "text-[var(--muted)]")}>{l.sotto}</span>
              </span>
              <Freccia />
            </a>
          ))}
        </section>

        {/* Scuola */}
        <section className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Il percorso completo</p>
          <h2 className="mt-2 font-serif text-2xl">{site.scuola.nome}</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {site.scuola.punti.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[var(--muted)]">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href={site.scuola.url}
            className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-[var(--gold)] px-5 py-3 text-sm font-semibold text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[#1a1408]"
          >
            Scopri la scuola <Freccia />
          </a>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="mb-4 text-center font-serif text-2xl">
            Le domande che mi fate di più
          </h2>
          <div className="flex flex-col divide-y divide-[var(--line)] rounded-2xl border border-[var(--line)] bg-[var(--card)]">
            {site.faq.map((f) => (
              <details key={f.d} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                  {f.d}
                  <span className="text-xl leading-none text-[var(--gold)] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{f.r}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Chiusura */}
        <section className="text-center">
          <p className="font-serif text-xl">Hai una domanda che non è qui?</p>
          <a
            href={site.dm}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 font-semibold text-[#1a1408] transition hover:brightness-110"
          >
            Scrivimi su Instagram <Freccia />
          </a>
        </section>

        <footer className="text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} {site.nome} · {site.motto}
        </footer>
      </main>
    </div>
  );
}
