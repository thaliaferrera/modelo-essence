import { useState } from "react";
import aboutRoom from "@/assets/about-room.jpg";
import detailTable from "@/assets/detail-table.jpg";
import botanicalTexture from "@/assets/botanical-texture.jpg";
import { EucalyptusBranch, LeafMark, OliveSprig } from "@/components/botanicals";
import { Reveal } from "@/components/reveal";
import { useScrollY } from "@/hooks/use-reveal";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <LeafMark className="h-4 w-4 text-olive" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export function About() {
  const y = useScrollY();
  return (
    <section id="sobre" className="paper relative overflow-hidden bg-sand/50 py-28 md:py-44">
      <OliveSprig
        className="float-leaf pointer-events-none absolute top-16 right-[4%] h-28 w-56 text-olive/60"
        style={{ transform: `translate3d(0, ${y * 0.05 - 40}px, 0)` }}
      />
      <div className="mx-auto grid max-w-[80rem] items-center gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-28">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-[3rem] shadow-soft">
            <img
              src={aboutRoom}
              alt="Duas poltronas verdes de frente uma para a outra em uma sala com estante de livros e plantas"
              loading="lazy"
              width={1408}
              height={1104}
              className="h-full w-full object-cover transition-transform duration-[2200ms] ease-out hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <SectionLabel>Sobre a Essence</SectionLabel>
          <h2 className="mt-8 text-4xl leading-[1.15] sm:text-5xl">
            Um consultório pensado como um lugar de <em className="italic">respiro</em>.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              A Essence nasceu do desejo de oferecer um cuidado psicológico que começa antes da
              primeira palavra: na luz suave, no silêncio confortável, na sensação de que aqui você
              pode simplesmente chegar como está.
            </p>
            <p>
              Nossa equipe é formada por psicólogas e psicólogos clínicos com formação contínua e
              supervisão. Trabalhamos com o tempo de cada pessoa — sem fórmulas, sem pressa, sem
              julgamento.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["12", "anos de prática clínica"],
              ["8", "psicólogos parceiros"],
              ["100%", "sigilo e ética"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl text-foreground">{n}</dt>
                <dd className="mt-2 text-xs leading-relaxed tracking-wide text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

const abordagens = [
  {
    nome: "Terapia Cognitivo-Comportamental",
    texto:
      "Para compreender padrões de pensamento e construir formas mais gentis de lidar com ansiedade e autocrítica.",
  },
  {
    nome: "Psicanálise",
    texto:
      "Uma escuta profunda do que se repete, do que ficou sem palavra e do que atravessa a sua história.",
  },
  {
    nome: "Abordagem Humanista",
    texto:
      "O encontro como centro do processo: acolhimento, autenticidade e confiança na sua capacidade de crescer.",
  },
  {
    nome: "Terapia de Casal",
    texto:
      "Um espaço neutro para reconstruir a comunicação, o cuidado mútuo e o respeito às diferenças.",
  },
];

export function Abordagens() {
  const y = useScrollY();
  return (
    <section id="abordagens" className="paper relative overflow-hidden py-28 md:py-44">
      <EucalyptusBranch
        className="float-leaf-slow pointer-events-none absolute -left-16 top-32 hidden h-80 w-56 text-olive/50 md:block"
        style={{ transform: `translate3d(0, ${y * -0.04 + 30}px, 0) rotate(-12deg)` }}
      />
      <div className="mx-auto max-w-[76rem] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <SectionLabel>Abordagens terapêuticas</SectionLabel>
          <h2 className="mt-8 text-4xl leading-[1.15] sm:text-5xl">
            Caminhos diferentes, a mesma <em className="italic">escuta cuidadosa</em>.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[2.5rem] bg-border sm:grid-cols-2">
          {abordagens.map((a, i) => (
            <Reveal key={a.nome} delay={i * 120}>
              <article className="group h-full bg-background p-10 transition-colors duration-[1200ms] hover:bg-sage/40 md:p-14">
                <LeafMark className="h-6 w-6 text-olive transition-transform duration-[1400ms] group-hover:rotate-6" />
                <h3 className="mt-8 text-2xl leading-snug">{a.nome}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const paraQuem = [
  "Quem sente ansiedade constante e dificuldade de desacelerar",
  "Quem atravessa luto, término ou uma mudança de vida",
  "Quem convive com autocrítica intensa e exaustão",
  "Quem deseja se conhecer melhor, mesmo sem uma crise",
  "Quem busca melhorar relações afetivas e familiares",
  "Quem precisa de um espaço só seu para pensar em voz alta",
];

export function ParaQuem() {
  return (
    <section id="para-quem" className="paper relative overflow-hidden bg-sage/45 py-28 md:py-44">
      <div className="mx-auto grid max-w-[80rem] gap-16 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <SectionLabel>Para quem é a terapia</SectionLabel>
          <h2 className="mt-8 text-4xl leading-[1.15] sm:text-5xl">
            Não é preciso estar em crise para <em className="italic">se cuidar</em>.
          </h2>
          <div className="mt-12 overflow-hidden rounded-[2.5rem]">
            <img
              src={detailTable}
              alt="Livro aberto, xícara de cerâmica e um ramo de oliveira sobre mesa de madeira ao sol"
              loading="lazy"
              width={1200}
              height={1504}
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <ul className="divide-y divide-border/70 border-y border-border/70">
            {paraQuem.map((item) => (
              <li
                key={item}
                className="group flex items-start gap-6 py-7 transition-all duration-700 hover:pl-3"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive transition-transform duration-700 group-hover:scale-150" />
                <p className="text-lg leading-relaxed text-foreground/90">{item}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const beneficios = [
  ["Clareza", "Compreender o que sente e nomear o que antes parecia confuso."],
  ["Regulação", "Recursos concretos para atravessar a ansiedade com menos sofrimento."],
  ["Relações", "Vínculos mais honestos, com limites saudáveis e comunicação gentil."],
  ["Autocuidado", "Uma relação mais compassiva com o próprio corpo, tempo e história."],
];

export function Beneficios() {
  const y = useScrollY();
  return (
    <section className="paper relative overflow-hidden py-28 md:py-44">
      <OliveSprig
        className="float-leaf pointer-events-none absolute right-[-4rem] bottom-24 h-32 w-72 text-olive/50"
        style={{ transform: `translate3d(0, ${y * -0.03}px, 0) rotate(8deg)` }}
      />
      <div className="mx-auto max-w-[76rem] px-6 md:px-10">
        <Reveal className="max-w-xl">
          <SectionLabel>Benefícios</SectionLabel>
          <h2 className="mt-8 text-4xl leading-[1.15] sm:text-5xl">
            O que costuma <em className="italic">mudar</em> ao longo do processo.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map(([titulo, texto], i) => (
            <Reveal key={titulo} delay={i * 110}>
              <div className="group">
                <span className="font-display text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <div className="mt-4 h-px w-full bg-border">
                  <div className="h-px w-8 bg-olive transition-all duration-[1600ms] ease-out group-hover:w-full" />
                </div>
                <h3 className="mt-6 text-2xl">{titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const depoimentos = [
  {
    texto:
      "Cheguei sem saber explicar o que sentia. Fui recebida com uma paciência que eu não sabia que precisava tanto.",
    autor: "M., 34 anos",
  },
  {
    texto:
      "A sala parece um abraço. E a escuta também. Foi o primeiro lugar onde não senti pressa em melhorar.",
    autor: "R., 41 anos",
  },
  {
    texto:
      "Depois de um ano de terapia, aprendi a conversar comigo mesma de um jeito mais gentil. Isso mudou tudo.",
    autor: "C., 28 anos",
  },
];

export function Depoimentos() {
  return (
    <section className="paper relative overflow-hidden bg-sand/60 py-28 md:py-44">
      <div className="mx-auto max-w-[76rem] px-6 md:px-10">
        <Reveal className="max-w-xl">
          <SectionLabel>Depoimentos</SectionLabel>
          <h2 className="mt-8 text-4xl leading-[1.15] sm:text-5xl">
            Palavras de quem <em className="italic">passou por aqui</em>.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.autor} delay={i * 140}>
              <figure className="flex h-full flex-col justify-between rounded-[2.5rem] bg-background/80 p-10 transition-all duration-[1200ms] hover:-translate-y-1 hover:shadow-soft">
                <blockquote className="font-display text-2xl leading-snug italic text-foreground">
                  “{d.texto}”
                </blockquote>
                <figcaption className="mt-10 text-xs tracking-[0.22em] uppercase text-muted-foreground">
                  {d.autor}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-12 text-xs leading-relaxed text-muted-foreground">
            Depoimentos publicados com autorização e identidades preservadas, conforme o Código de
            Ética Profissional do Psicólogo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const perguntas = [
  {
    q: "Como funciona a primeira sessão?",
    a: "É uma conversa inicial de acolhimento, com cerca de 50 minutos. Você conta o que te trouxe e, juntos, definimos o caminho — sem nenhum compromisso de continuidade.",
  },
  {
    q: "Qual é a duração e a frequência dos encontros?",
    a: "As sessões duram 50 minutos e costumam ser semanais. A frequência pode ser ajustada conforme o seu momento e a sua rotina.",
  },
  {
    q: "Vocês atendem online?",
    a: "Sim. O atendimento online segue os mesmos princípios de sigilo e cuidado, e é realizado em plataforma segura, de qualquer lugar do Brasil.",
  },
  {
    q: "O que eu falo fica em sigilo?",
    a: "Sim. O sigilo é um pilar da prática clínica e está previsto no Código de Ética Profissional do Psicólogo.",
  },
  {
    q: "Como faço para agendar?",
    a: "Você pode enviar uma mensagem pelo WhatsApp ou preencher o formulário de contato. Respondemos em até 24 horas úteis.",
  },
];

export function Faq() {
  const [aberta, setAberta] = useState<number | null>(0);
  return (
    <section id="faq" className="paper relative overflow-hidden py-28 md:py-44">
      <div className="mx-auto grid max-w-[76rem] gap-16 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2 className="mt-8 text-4xl leading-[1.15] sm:text-5xl">
            Antes de <em className="italic">começar</em>.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="border-t border-border">
            {perguntas.map((p, i) => {
              const open = aberta === i;
              return (
                <div key={p.q} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setAberta(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-8 py-7 text-left transition-colors duration-700 hover:text-muted-foreground"
                  >
                    <span className="font-display text-xl sm:text-2xl">{p.q}</span>
                    <LeafMark
                      className={`h-5 w-5 shrink-0 text-olive transition-transform duration-[900ms] ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-8 text-sm leading-relaxed text-muted-foreground">
                        {p.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contato() {
  return (
    <section id="contato" className="paper relative overflow-hidden bg-sage/50 py-28 md:py-44">
      <div className="mx-auto max-w-[76rem] px-6 md:px-10">
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Contato</SectionLabel>
            <h2 className="mt-8 text-4xl leading-[1.12] sm:text-5xl">
              Quando você estiver pronto,
              <span className="block italic text-muted-foreground">estaremos aqui.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Escreva sem formalidade. Basta contar um pouco do que você procura e encontraremos o
              melhor horário para a sua primeira conversa.
            </p>

            <div className="mt-12 space-y-6 text-sm text-foreground/90">
              <p>
                <span className="eyebrow block">Endereço</span>
                <span className="mt-2 block">
                  Rua das Oliveiras, 128 — Jardins, São Paulo/SP
                </span>
              </p>
              <p>
                <span className="eyebrow block">Horários</span>
                <span className="mt-2 block">Segunda a sexta, das 8h às 20h</span>
              </p>
              <p>
                <span className="eyebrow block">E-mail</span>
                <a href="mailto:contato@essence.psi.br" className="link-quiet mt-2 inline-block">
                  contato@essence.psi.br
                </a>
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-9 py-4 text-xs tracking-[0.22em] uppercase text-primary-foreground transition-all duration-700 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="overflow-hidden rounded-[3rem] shadow-soft">
              <img
                src={botanicalTexture}
                alt="Ramos de eucalipto sobre superfície de papel texturizado com luz suave"
                loading="lazy"
                width={1408}
                height={912}
                className="h-full min-h-[22rem] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
