import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import {
  Abordagens,
  Beneficios,
  ComoFunciona,
  Contato,
  Depoimentos,
  Faq,
  Sobre,
} from "@/components/sections";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const title = "Essence · Psicoterapia com calma em São Paulo e online";
const description =
  "Um espaço seguro para respirar, sentir e recomeçar. Psicoterapia acolhedora, presencial em São Paulo e online para todo o Brasil.";

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
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Sobre />
        <ComoFunciona />
        <Abordagens />
        <Beneficios />
        <Depoimentos />
        <Faq />
        <Contato />
      </main>
      <SiteFooter />
    </div>
  );
}
