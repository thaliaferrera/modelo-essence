import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import {
  About,
  Abordagens,
  Beneficios,
  Contato,
  Depoimentos,
  Faq,
  ParaQuem,
} from "@/components/sections";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const title = "Essence · Clínica de Psicologia em São Paulo";
const description =
  "Um espaço seguro para cuidar da sua saúde emocional. Atendimento psicológico presencial e online, com empatia, respeito e escuta.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Abordagens />
        <ParaQuem />
        <Beneficios />
        <Depoimentos />
        <Faq />
        <Contato />
      </main>
      <SiteFooter />
    </div>
  );
}
