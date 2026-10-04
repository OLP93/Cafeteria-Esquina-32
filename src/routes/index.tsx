import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ejemplo carta digital" },
      { name: "description", content: "Ejemplo carta digital" },
      { property: "og:title", content: "Ejemplo carta digital" },
      { property: "og:description", content: "Ejemplo carta digital" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <h1>Ejemplo carta digital</h1>;
}
