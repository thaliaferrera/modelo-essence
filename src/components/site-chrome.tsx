import { useEffect, useState } from "react";
import { LeafMark } from "@/components/botanicals";

const links = [
  ["Sobre", "#sobre"],
  ["Abordagens", "#abordagens"],
  ["Para quem", "#para-quem"],
  ["Dúvidas", "#faq"],
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-[900ms] ${
        scrolled ? "bg-background/85 py-4 backdrop-blur-md" : "bg-transparent py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[84rem] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <LeafMark className="h-5 w-5 text-olive" />
          <span className="font-display text-2xl tracking-[0.18em] uppercase">Essence</span>
        </a>

        <nav className="hidden items-center gap-10 text-xs tracking-[0.18em] uppercase md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="link-quiet text-muted-foreground hover:text-foreground">
              {label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full border border-foreground/25 px-6 py-3 transition-all duration-700 hover:bg-foreground hover:text-background"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-500 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className="grid overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <nav className="mx-6 mt-4 flex flex-col gap-5 rounded-3xl bg-card/95 px-7 py-8 text-sm tracking-[0.16em] uppercase backdrop-blur-md">
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
    <footer className="paper relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-[76rem] px-6 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <LeafMark className="h-5 w-5 opacity-70" />
              <span className="font-display text-3xl tracking-[0.18em] uppercase">Essence</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-75">
              Clínica de psicologia dedicada a um cuidado sereno, ético e profundamente humano.
            </p>
          </div>

          <div className="grid gap-8 text-sm sm:grid-cols-2">
            <div className="space-y-3 opacity-80">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase opacity-70">Navegue</p>
              {links.map(([label, href]) => (
                <a key={href} href={href} className="block link-quiet w-fit">
                  {label}
                </a>
              ))}
            </div>
            <div className="space-y-3 opacity-80">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase opacity-70">Fale conosco</p>
              <a href="mailto:contato@essence.psi.br" className="block link-quiet w-fit">
                contato@essence.psi.br
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="block link-quiet w-fit"
              >
                WhatsApp
              </a>
              <p>Rua das Oliveiras, 128 — São Paulo/SP</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-primary-foreground/20 pt-8 text-xs opacity-65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Essence Psicologia · CRP 06/000000</p>
          <p>Feito com calma e cuidado.</p>
        </div>
      </div>
    </footer>
  );
}
