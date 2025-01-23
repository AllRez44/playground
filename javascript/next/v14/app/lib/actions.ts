"use server";

import { SuperHero } from "./types";

export async function createSuperHero(hero: SuperHero) {
  console.log("Created super-hero", hero);
}