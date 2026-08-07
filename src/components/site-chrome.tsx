import { useEffect, useState } from "react";
import { LeafMark, OliveBranch } from "@/components/botanicals";

const links = [
  ["Sobre", "#sobre"],
  ["Como funciona", "#como-funciona"],
  ["Abordagens", "#abordagens"],
  ["Benefícios", "#beneficios"],
  ["Dúvidas", "#faq"],
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-[1200ms] ${
        scrolled ? "bg-background/80 py-4 backdrop-blur-xl" : "bg-transparent py-8"
      }`}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 md:px-12">
        <a href="#inicio" className="flex items-center gap-3">
          <LeafMark className="sway h-5 w-5 text-olive" />
          <span className="font-display text-[1.6rem] tracking-[0.24em] uppercase">Essence</span>
        </a>

        <nav className="hidden items-center gap-9 text-[0.68rem] tracking-[0.22em] uppercase lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="link-quiet text-muted-foreground hover:text-foreground">
              {label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full border border-forest/25 px-7 py-3 transition-all duration-1000 hover:bg-primary hover:text-primary-foreground"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-700 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-700 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className="grid overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <nav className="mx-6 mt-5 flex flex-col gap-5 rounded-[2rem] bg-card/95 px-8 py-9 text-sm tracking-[0.18em] uppercase backdrop-blur-xl">
            {[...links, ["Agendar", "#contato"] as const].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-muted-foreground">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="paper relative overflow-hidden bg-primary py-24 text-primary-foreground">
      <OliveBranch className="sway-slow pointer-events-none absolute -right-16 top-6 h-28 w-80 text-primary-foreground/25" />

      <div className="relative z-10 mx-auto max-w-[80rem] px-6 md:px-12">
        <div className="flex flex-col gap-14 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <LeafMark className="h-5 w-5 opacity-70" />
              <span className="font-display text-[1.9rem] tracking-[0.24em] uppercase">Essence</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-[1.9] opacity-75">
              Coleção premium de psicologia por Lumina. Um cuidado sereno, ético e profundamente
              humano.
            </p>
          </div>

          <div className="grid gap-10 text-sm sm:grid-cols-2">
            <div className="space-y-3 opacity-80">
              <p className="text-[0.62rem] tracking-[0.32em] uppercase opacity-70">Navegue</p>
              {links.map(([label, href]) => (
                <a key={href} href={href} className="link-quiet block w-fit">
                  {label}
                </a>
              ))}
            </div>
            <div className="space-y-3 opacity-80">
              <p className="text-[0.62rem] tracking-[0.32em] uppercase opacity-70">Fale conosco</p>
              <a href="mailto:contato@essence.psi.br" className="link-quiet block w-fit">
                contato@essence.psi.br
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="link-quiet block w-fit"
              >
                WhatsApp
              </a>
              <p>Rua das Oliveiras, 128 — São Paulo/SP</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-primary-foreground/20 pt-8 text-xs opacity-65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Essence · Lumina · CRP 06/000000</p>
          <p>Feito com calma e cuidado.</p>
        </div>
      </div>
    </footer>
  );
}
