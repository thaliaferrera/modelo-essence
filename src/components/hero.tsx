import heroOffice from "@/assets/hero-office.jpg";
import { EucalyptusBranch, OliveSprig } from "@/components/botanicals";
import { useScrollY } from "@/hooks/use-reveal";

export function Hero() {
  const y = useScrollY();

  return (
    <section className="paper relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-32">
      {/* soft organic wash */}
      <div
        className="organic-blob pointer-events-none absolute -top-40 -left-48 h-[34rem] w-[34rem] bg-sage/60 blur-[2px]"
        style={{ transform: `translate3d(0, ${y * -0.05}px, 0)` }}
      />
      <div
        className="organic-blob pointer-events-none absolute top-24 -right-56 h-[30rem] w-[30rem] bg-sand/70"
        style={{ transform: `translate3d(0, ${y * 0.04}px, 0)` }}
      />

      <EucalyptusBranch
        className="float-leaf pointer-events-none absolute top-16 right-[6%] hidden h-72 w-52 text-olive/70 md:block"
        style={{ transform: `translate3d(0, ${y * -0.12}px, 0) rotate(${6 + y * 0.01}deg)` }}
      />
      <OliveSprig
        className="float-leaf-slow pointer-events-none absolute bottom-10 left-[-3rem] h-32 w-64 text-olive/60"
        style={{ transform: `translate3d(0, ${y * 0.08}px, 0) rotate(${-4 - y * 0.008}deg)` }}
      />

      <div className="relative mx-auto grid max-w-[84rem] items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        <div className="animate-fade-in">
          <p className="eyebrow">Psicologia clínica · Cuidado humano</p>
          <h1 className="mt-8 text-[2.7rem] leading-[1.06] text-foreground sm:text-6xl lg:text-[4.4rem]">
            Um espaço seguro
            <span className="block italic text-muted-foreground">para cuidar da sua</span>
            saúde emocional.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Atendimento psicológico baseado em empatia, respeito e escuta. Um tempo só seu, no seu
            ritmo, sem julgamentos.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="rounded-full bg-primary px-9 py-4 text-xs tracking-[0.22em] uppercase text-primary-foreground transition-all duration-700 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Agendar sessão
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-9 py-4 text-xs tracking-[0.22em] uppercase text-foreground transition-all duration-700 hover:-translate-y-0.5 hover:bg-sage/60"
            >
              WhatsApp
            </a>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Atendimento presencial em São Paulo e online para todo o Brasil.
          </p>
        </div>

        <div className="relative">
          <div
            className="arch overflow-hidden shadow-soft"
            style={{ transform: `translate3d(0, ${y * -0.03}px, 0)` }}
          >
            <img
              src={heroOffice}
              alt="Poltrona clara ao lado de um vaso com ramos de eucalipto, banhada pela luz natural da manhã"
              width={1600}
              height={1200}
              className="h-[26rem] w-full object-cover sm:h-[34rem] lg:h-[40rem]"
            />
          </div>
          <div className="absolute -bottom-8 -left-6 hidden max-w-[15rem] rounded-3xl bg-card px-7 py-6 shadow-soft sm:block">
            <p className="font-display text-xl italic leading-snug text-foreground">
              “Ser ouvido já é o começo do cuidado.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
