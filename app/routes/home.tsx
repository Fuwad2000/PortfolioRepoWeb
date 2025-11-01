import type { Route } from "./+types/home";
import Hero from "~/component/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
    </main>
  );
}
