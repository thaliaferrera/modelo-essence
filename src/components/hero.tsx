import heroImage from "@/assets/essence-hero.jpg";
import { EucalyptusBranch, FernFrond, OliveBranch, LeafMark } from "@/components/botanicals";
import { useScrollY } from "@/hooks/use-reveal";

export function Hero() {
  const y = useScrollY();

  return (
    <section id="inicio" className="paper relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-40">
      {/* breathing washes of colour */}
      <div className="breathing blob-a pointer-events-none absolute -top-56 -left-64 h-[46rem] w-[46rem] bg-sage/70 blur-[6px]" />
      <div
        className="blob-b pointer-events-none absolute top-40 -right-72 h-[40rem] w-[40rem] bg-linen"
        style={{ transform: `translate3d(0, ${y * 0.03}px, 0)` }}
      />

      {/* botanicals leaving the viewport */}
      <EucalyptusBranch
        className="sway pointer-events-none absolute -top-16 right-[3%] hidden h-[30rem] w-64 text-forest/25 lg:block"
        style={{ transform: `translate3d(0, ${y * -0.08}px, 0) rotate(${8 + y * 0.006}deg)` }}
      />
      <FernFrond
        className="sway-slow pointer-events-none absolute -left-24 top-[46%] h-[26rem] w-40 text-forest/20"
        style={{ transform: `translate3d(0, ${y * 0.05}px, 0) rotate(${-14 - y * 0.005}deg)` }}
      />
      <OliveBranch
        className="sway pointer-events-none absolute -bottom-10 left-[38%] hidden h-28 w-80 text-forest/20 md:block"
        style={{ transform: `translate3d(0, ${y * 0.04}px, 0)` }}
      />

      <div className="relative z-10 mx-auto grid max-w-[88rem] items-center gap-16 px-6 md:px-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-28">
        <div className="animate-fade-in">
          <p className="eyebrow flex items-center gap-4">
            <LeafMark className="h-4 w-4 text-olive" />
            Coleção Essence · por Lumina
          </p>

          <h1 className="mt-10 text-[2.55rem] leading-[1.08] tracking-[-0.03em] sm:text-[3.6rem] lg:text-[4.6rem]">
            Um espaço seguro
            <span className="block italic text-forest">para respirar,</span>
            sentir e recomeçar.
          </h1>

          <p className="mt-10 max-w-lg text-base leading-[1.9] text-muted-foreground sm:text-[1.075rem]">
            A psicoterapia é um convite para olhar para si com mais gentileza, compreender suas
            emoções e construir uma vida com mais equilíbrio.
          </p>

          <div className="mt-14 flex flex-wrap items-center gap-5">
            <a
              href="#contato"
              className="rounded-full bg-primary px-10 py-[1.1rem] text-[0.7rem] tracking-[0.26em] uppercase text-primary-foreground transition-all duration-1000 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Agendar sessão
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-forest/25 px-10 py-[1.1rem] text-[0.7rem] tracking-[0.26em] uppercase transition-all duration-1000 hover:-translate-y-0.5 hover:bg-sage/70"
            >
              Falar no WhatsApp
            </a>
          </div>

          <p className="mt-12 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Atendimento presencial em São Paulo e online para todo o Brasil.
          </p>
        </div>

        <div className="relative">
          <div
            className="arch-soft relative overflow-hidden shadow-breath"
            style={{ transform: `translate3d(0, ${y * -0.025}px, 0)` }}
          >
            <img
              src={heroImage}
              alt="Poltrona de linho junto a uma janela ampla, com ramos de eucalipto em um vaso de cerâmica e luz suave da manhã"
              width={1408}
              height={1760}
              className="h-[30rem] w-full object-cover sm:h-[38rem] lg:h-[46rem]"
            />
          </div>

          <div className="petal absolute -bottom-10 -left-6 hidden max-w-[17rem] bg-card/95 px-9 py-8 shadow-breath backdrop-blur-sm sm:block">
            <p className="font-display text-[1.35rem] italic leading-snug">
              “Respirar fundo já é um começo.”
            </p>
            <p className="mt-3 text-[0.65rem] tracking-[0.28em] uppercase text-muted-foreground">
              Essence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
