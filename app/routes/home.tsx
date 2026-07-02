import type { Route } from "./+types/home";
import Hero from "~/component/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Degaz" },
    {
      name: "description",
      content: "Cloud & Software Developer portfolio by Fuwad Oladega.",
    },
  ];
}

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
    </main>
  );
}
