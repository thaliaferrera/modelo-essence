import { useState } from "react";
import aboutImage from "@/assets/essence-blanket.jpg";
import teaImage from "@/assets/essence-tea.jpg";
import handsImage from "@/assets/essence-hands.jpg";
import branchesImage from "@/assets/essence-branches.jpg";
import {
  EucalyptusBranch,
  FernFrond,
  IconBreath,
  IconNest,
  IconSeed,
  IconStone,
  IconSun,
  IconWave,
  LeafMark,
  OliveBranch,
  OrganicWave,
  SmallPlant,
} from "@/components/botanicals";
import { Reveal } from "@/components/reveal";
import { useScrollY } from "@/hooks/use-reveal";

/* ------------------------------------------------------------------ */

function SectionTitle({
  eyebrow,
  children,
  className = "",
}: {
  eyebrow: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-7 text-[2.1rem] leading-[1.14] tracking-[-0.025em] sm:text-[2.8rem] lg:text-[3.3rem]">
        {children}
      </h2>
    </div>
  );
}

/* --- Sobre ---------------------------------------------------------- */

export function Sobre() {
  const y = useScrollY();

  return (
    <section id="sobre" className="paper relative overflow-hidden bg-linen py-32 md:py-44">
      <OrganicWave className="absolute inset-x-0 -top-px h-16 w-full text-background md:h-24" fill="currentColor" />
      <EucalyptusBranch
        className="sway-slow pointer-events-none absolute -right-16 top-24 h-[26rem] w-56 text-forest/20"
        style={{ transform: `translate3d(0, ${y * -0.03}px, 0) rotate(-10deg)` }}
      />

      <div className="relative z-10 mx-auto grid max-w-[82rem] items-center gap-16 px-6 md:px-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <Reveal className="relative">
          <div className="arch-inverse overflow-hidden shadow-breath">
            <img
              src={aboutImage}
              alt="Manta de lã dobrada sobre um banco de madeira, com sombras de folhas na parede"
              width={1408}
              height={1056}
              loading="lazy"
              className="h-[24rem] w-full object-cover sm:h-[32rem]"
            />
          </div>
          <div className="petal absolute -right-6 -bottom-12 hidden h-40 w-40 overflow-hidden shadow-breath sm:block">
            <img
              src={branchesImage}
              alt="Ramos de eucalipto e oliveira sobre papel artesanal"
              width={1408}
              height={1056}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <SectionTitle eyebrow="Sobre a Essence">
            Um cuidado que começa
            <span className="block italic text-forest">no acolhimento.</span>
          </SectionTitle>
          <div className="mt-10 space-y-7 text-base leading-[1.95] text-muted-foreground">
            <p>
              A Essence nasceu do desejo de criar um lugar onde ninguém precise chegar pronto. Aqui o
              tempo é mais lento, a escuta é inteira e cada pessoa é recebida exatamente como é.
            </p>
            <p>
              Nosso trabalho une rigor clínico e sensibilidade. Acreditamos que o cuidado emocional
              acontece melhor em ambientes que respiram — com luz natural, madeira, plantas e
              silêncio suficiente para pensar.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-14 gap-y-8">
            {[
              ["12 anos", "de prática clínica"],
              ["+900", "encontros conduzidos"],
              ["100%", "sigilo e ética"],
            ].map(([n, l]) => (
              <div key={n}>
                <p className="font-display text-3xl text-forest">{n}</p>
                <p className="mt-2 text-xs tracking-[0.16em] uppercase text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --- Como funciona --------------------------------------------------- */

const passos = [
  {
    icon: IconBreath,
    n: "01",
    t: "Primeiro contato",
    d: "Uma conversa breve, sem compromisso, para entender o que você procura e encontrar o melhor horário.",
  },
  {
    icon: IconSeed,
    n: "02",
    t: "Sessão inicial",
    d: "Um encontro de escuta ampla. Você conta a sua história no seu ritmo, sem pressa e sem julgamentos.",
  },
  {
    icon: IconStone,
    n: "03",
    t: "Plano terapêutico",
    d: "Definimos juntos objetivos possíveis, a frequência dos encontros e o caminho que faz sentido para você.",
  },
  {
    icon: IconWave,
    n: "04",
    t: "Processo contínuo",
    d: "Semana após semana, o cuidado se aprofunda. Revisamos o percurso sempre que necessário.",
  },
];

export function ComoFunciona() {
  const y = useScrollY();

  return (
    <section id="como-funciona" className="paper relative overflow-hidden py-32 md:py-44">
      <OrganicWave className="absolute inset-x-0 -top-px h-16 w-full text-linen md:h-24" flip fill="currentColor" />
      <div className="breathing blob-b pointer-events-none absolute -left-72 top-1/3 h-[38rem] w-[38rem] bg-sage/50" />
      <SmallPlant
        className="sway pointer-events-none absolute -bottom-6 right-[6%] h-32 w-32 text-forest/25"
        style={{ transform: `translate3d(0, ${y * 0.02}px, 0)` }}
      />

      <div className="relative z-10 mx-auto max-w-[82rem] px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <SectionTitle eyebrow="Como funciona a terapia">
            Quatro passos suaves,
            <span className="block italic text-forest">nenhum deles apressado.</span>
          </SectionTitle>
        </Reveal>

        <div className="relative mt-20 grid gap-10 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          {passos.map(({ icon: Icon, n, t, d }, i) => (
            <Reveal
              key={n}
              delay={i * 160}
              className={`group relative rounded-[2.5rem] bg-card/80 px-10 py-12 shadow-breath backdrop-blur-sm transition-all duration-1000 hover:-translate-y-1 hover:shadow-lift ${
                i % 2 === 1 ? "md:mt-16" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <Icon className="h-10 w-10 text-forest/70 transition-transform duration-1000 group-hover:scale-105" />
                <span className="font-display text-2xl text-olive">{n}</span>
              </div>
              <h3 className="mt-8 text-2xl">{t}</h3>
              <p className="mt-4 text-[0.95rem] leading-[1.9] text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Abordagens ------------------------------------------------------ */

const abordagens = [
  {
    t: "Terapia Cognitivo-Comportamental",
    d: "Reconhecer pensamentos automáticos e construir respostas mais gentis diante da ansiedade e do estresse.",
  },
  {
    t: "Psicanálise contemporânea",
    d: "Uma escuta profunda da sua história, dos vínculos e daquilo que se repete sem que percebamos.",
  },
  {
    t: "Terapia de Aceitação e Compromisso",
    d: "Fazer espaço para o que dói e, ainda assim, caminhar na direção do que é importante para você.",
  },
  {
    t: "Mindfulness clínico",
    d: "Práticas de atenção e respiração que ajudam o corpo a lembrar como é estar em segurança.",
  },
];

export function Abordagens() {
  return (
    <section id="abordagens" className="paper relative overflow-hidden bg-sage/45 py-32 md:py-44">
      <OrganicWave className="absolute inset-x-0 -top-px h-16 w-full text-background md:h-24" fill="currentColor" />
      <OliveBranch className="sway-slow pointer-events-none absolute -left-20 bottom-24 h-32 w-96 text-forest/25" />

      <div className="relative z-10 mx-auto grid max-w-[82rem] gap-16 px-6 md:px-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal>
          <SectionTitle eyebrow="Abordagens terapêuticas">
            Caminhos diferentes
            <span className="block italic text-forest">para pessoas diferentes.</span>
          </SectionTitle>
          <p className="mt-8 max-w-sm text-base leading-[1.95] text-muted-foreground">
            Não existe um único método. A abordagem é escolhida a partir de quem você é e do momento
            que está vivendo.
          </p>
          <div className="mt-12 overflow-hidden rounded-[2.5rem] shadow-breath">
            <img
              src={teaImage}
              alt="Xícara de chá de ervas ao lado de um livro aberto e ramos de oliveira sobre mesa de madeira clara"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-72 w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={160} className="divide-y divide-forest/15">
          {abordagens.map(({ t, d }, i) => (
            <div key={t} className="group flex gap-8 py-10 transition-colors duration-1000">
              <span className="font-display text-lg text-olive">{`0${i + 1}`}</span>
              <div>
                <h3 className="text-[1.6rem] leading-snug transition-transform duration-1000 group-hover:translate-x-1">
                  {t}
                </h3>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-[1.9] text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* --- Benefícios ------------------------------------------------------- */

const beneficios = [
  { icon: IconBreath, t: "Menos ansiedade", d: "Aprender a reconhecer os sinais do corpo antes que virem tempestade." },
  { icon: IconSun, t: "Mais clareza", d: "Entender o que você sente e nomear aquilo que antes era só um peso." },
  { icon: IconNest, t: "Vínculos mais leves", d: "Relações construídas com limites saudáveis e comunicação honesta." },
  { icon: IconStone, t: "Autoestima firme", d: "Uma relação mais gentil com você mesmo, sem cobranças impossíveis." },
  { icon: IconWave, t: "Sono e rotina", d: "Recuperar o descanso e um ritmo de vida que cabe no seu corpo." },
  { icon: IconSeed, t: "Novos começos", d: "Coragem para escolher caminhos alinhados ao que realmente importa." },
];

export function Beneficios() {
  const y = useScrollY();

  return (
    <section id="beneficios" className="paper relative overflow-hidden py-32 md:py-44">
      <OrganicWave className="absolute inset-x-0 -top-px h-16 w-full text-sage/45 md:h-24" flip fill="currentColor" />
      <FernFrond
        className="sway pointer-events-none absolute -right-16 top-1/4 h-[24rem] w-36 text-forest/20"
        style={{ transform: `translate3d(0, ${y * -0.02}px, 0) rotate(12deg)` }}
      />

      <div className="relative z-10 mx-auto max-w-[82rem] px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <SectionTitle eyebrow="Benefícios">
            O que muda quando
            <span className="block italic text-forest">você se escuta.</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-20 grid gap-x-14 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 110} className="group">
              <div className="petal flex h-16 w-16 items-center justify-center bg-sage/70 transition-all duration-1000 group-hover:bg-olive/70">
                <Icon className="h-8 w-8 text-forest" />
              </div>
              <h3 className="mt-7 text-[1.45rem]">{t}</h3>
              <p className="mt-3 text-[0.95rem] leading-[1.9] text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Depoimentos ------------------------------------------------------ */

const depoimentos = [
  {
    q: "Cheguei sem saber explicar o que sentia. Fui recebida com uma calma que eu não conhecia. Hoje respiro diferente.",
    a: "M. L.",
    s: "em terapia há 2 anos",
  },
  {
    q: "A sala parece uma pausa no meio da semana. Saio de lá mais leve, mesmo nos dias difíceis.",
    a: "R. A.",
    s: "em terapia há 8 meses",
  },
  {
    q: "Aprendi a conversar comigo sem aspereza. Isso mudou o jeito como me relaciono com todo mundo.",
    a: "C. S.",
    s: "em terapia há 3 anos",
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="paper relative overflow-hidden bg-linen py-32 md:py-44">
      <OrganicWave className="absolute inset-x-0 -top-px h-16 w-full text-background md:h-24" fill="currentColor" />
      <div className="breathing blob-a pointer-events-none absolute -right-64 top-10 h-[34rem] w-[34rem] bg-sage/60" />

      <div className="relative z-10 mx-auto max-w-[82rem] px-6 md:px-12">
        <Reveal className="flex flex-col items-center text-center">
          <LeafMark className="sway h-7 w-7 text-olive" />
          <SectionTitle eyebrow="Depoimentos" className="mt-6">
            Histórias contadas
            <span className="block italic text-forest">em voz baixa.</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {depoimentos.map(({ q, a, s }, i) => (
            <Reveal
              key={a}
              delay={i * 180}
              className={`rounded-[2.75rem] bg-card/85 px-10 py-12 shadow-breath backdrop-blur-sm transition-all duration-1000 hover:-translate-y-1 hover:shadow-lift ${
                i === 1 ? "lg:mt-14" : ""
              }`}
            >
              <p className="font-display text-[1.3rem] italic leading-[1.7]">“{q}”</p>
              <div className="mt-8 flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                <LeafMark className="h-4 w-4 text-olive" />
                {a} · {s}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- FAQ -------------------------------------------------------------- */

const perguntas = [
  {
    q: "Como sei que é a hora de começar?",
    a: "Não é preciso estar em crise. Se algo dentro de você pede atenção há algum tempo, isso já é motivo suficiente.",
  },
  {
    q: "Quanto tempo dura cada sessão?",
    a: "Cinquenta minutos, normalmente uma vez por semana. A frequência pode ser ajustada ao longo do processo.",
  },
  {
    q: "O atendimento online funciona igual?",
    a: "Sim. A pesquisa mostra resultados equivalentes ao presencial, desde que você tenha um lugar tranquilo e privado.",
  },
  {
    q: "O que eu conto fica em sigilo?",
    a: "Sempre. O sigilo é garantido pelo Código de Ética Profissional do Psicólogo, com pouquíssimas exceções previstas em lei.",
  },
  {
    q: "Preciso me preparar para a primeira sessão?",
    a: "Não. Basta chegar. Se preferir, anote o que tem sentido nos últimos dias — mas nada disso é obrigatório.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="paper relative overflow-hidden py-32 md:py-44">
      <OrganicWave className="absolute inset-x-0 -top-px h-16 w-full text-linen md:h-24" flip fill="currentColor" />
      <SmallPlant className="sway-slow pointer-events-none absolute -left-8 bottom-16 h-36 w-36 text-forest/25" />

      <div className="relative z-10 mx-auto grid max-w-[78rem] gap-16 px-6 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <SectionTitle eyebrow="Dúvidas frequentes">
            Perguntas que
            <span className="block italic text-forest">acolhemos sempre.</span>
          </SectionTitle>
          <div className="mt-10 overflow-hidden rounded-[2.5rem] shadow-breath">
            <img
              src={handsImage}
              alt="Mãos repousando sobre uma manta de tricô junto à luz da janela"
              width={1200}
              height={912}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={140} className="divide-y divide-forest/15 border-y border-forest/15">
          {perguntas.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div key={q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-8 py-8 text-left"
                >
                  <span className="font-display text-[1.35rem] leading-snug">{q}</span>
                  <span
                    className={`relative h-4 w-4 shrink-0 transition-transform duration-1000 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <span className="absolute top-1/2 left-0 h-px w-4 bg-forest" />
                    <span className="absolute left-1/2 top-0 h-4 w-px bg-forest" />
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-9 text-[0.95rem] leading-[1.95] text-muted-foreground">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

/* --- Contato ----------------------------------------------------------- */

export function Contato() {
  const y = useScrollY();

  return (
    <section id="contato" className="paper relative overflow-hidden bg-sage/50 py-32 md:py-44">
      <OrganicWave className="absolute inset-x-0 -top-px h-16 w-full text-background md:h-24" fill="currentColor" />
      <EucalyptusBranch
        className="sway pointer-events-none absolute -left-20 -top-10 h-[28rem] w-56 text-forest/25"
        style={{ transform: `translate3d(0, ${y * 0.02}px, 0) rotate(18deg)` }}
      />
      <OliveBranch className="sway-slow pointer-events-none absolute -right-24 bottom-20 h-32 w-96 text-forest/25" />

      <div className="relative z-10 mx-auto max-w-[64rem] px-6 text-center md:px-12">
        <Reveal className="flex flex-col items-center">
          <LeafMark className="breathing h-8 w-8 text-olive" />
          <p className="eyebrow mt-8">Vamos conversar</p>
          <h2 className="mt-7 text-[2.3rem] leading-[1.12] tracking-[-0.025em] sm:text-[3.1rem] lg:text-[3.6rem]">
            Quando você estiver pronto,
            <span className="block italic text-forest">há um lugar esperando.</span>
          </h2>
          <p className="mt-9 max-w-xl text-base leading-[1.95] text-muted-foreground">
            Escreva uma mensagem simples, como preferir. Respondemos com calma, normalmente no mesmo
            dia.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-10 py-[1.1rem] text-[0.7rem] tracking-[0.26em] uppercase text-primary-foreground transition-all duration-1000 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Falar no WhatsApp
            </a>
            <a
              href="mailto:contato@essence.psi.br"
              className="rounded-full border border-forest/25 px-10 py-[1.1rem] text-[0.7rem] tracking-[0.26em] uppercase transition-all duration-1000 hover:-translate-y-0.5 hover:bg-background/70"
            >
              Enviar e-mail
            </a>
          </div>

          <div className="mt-16 grid w-full gap-8 text-sm text-muted-foreground sm:grid-cols-3">
            {[
              ["Consultório", "Rua das Oliveiras, 128 — São Paulo/SP"],
              ["Horários", "Segunda a sexta, das 8h às 20h"],
              ["Online", "Sessões por vídeo para todo o Brasil"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-[2rem] bg-background/70 px-7 py-8 backdrop-blur-sm">
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-forest">{t}</p>
                <p className="mt-3 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
