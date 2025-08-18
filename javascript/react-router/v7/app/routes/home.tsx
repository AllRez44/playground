import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ context: _context }: Route.LoaderArgs) {
  // This loader function is intentionally left empty.
  const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from Controllab");
    }, 3500);
  });

  return {message: promise};
}

export default function Home({loaderData}: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
