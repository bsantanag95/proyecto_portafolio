import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    slug: "pokedex",
    title: {
      es: "Pokédex con API de Pokémon",
      en: "Pokédex with Pokémon API",
    },
    summary: {
      es: "Aplicación frontend que consume una API externa.",
      en: "Frontend application consuming an external API.",
    },
    description: {
      es: "Aplicación desarrollada en React que consume la PokéAPI para mostrar información detallada de Pokémon, permitiendo búsqueda por nombre o número y visualización dinámica de datos.",
      en: "React application that consumes the PokéAPI to display detailed Pokémon information, allowing search by name or number with dynamic data rendering.",
    },
    stack: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    backend: "PokéAPI (externa)",
    database: null,
    images: [
      "/projects/pokedex/1.png",
      "/projects/pokedex/2.png",
    ],
    github: "https://github.com/tu-usuario/pokedex",
  },

  {
    slug: "gis-catalogo",
    title: {
      es: "Catálogo GIS de Unidades Constructivas",
      en: "GIS Construction Units Catalog",
    },
    summary: {
      es: "Sistema de gestión con mapas y base de datos.",
      en: "Management system with maps and database.",
    },
    description: {
      es: "Sistema desarrollado con Laravel y Livewire para la gestión de unidades constructivas, integrando información geoespacial y persistencia en MySQL.",
      en: "System built with Laravel and Livewire for managing construction units, integrating geospatial data and MySQL persistence.",
    },
    stack: ["Laravel", "Livewire", "MySQL", "GIS"],
    backend: "Laravel",
    database: "MySQL",
    images: [
      "/projects/gis/1.png",
      "/projects/gis/2.png",
    ],
    github: "https://github.com/tu-usuario/gis-catalogo",
  },

  {
    slug: "busco-club",
    title: {
      es: "Busco Club",
      en: "Looking for a Club",
    },
    summary: {
      es: "Plataforma para futbolistas sin club.",
      en: "Platform for football players without a club.",
    },
    description: {
      es: "Aplicación fullstack que permite a futbolistas sin club crear perfiles y ser visualizados por clubes, desarrollada con Laravel, Inertia y React.",
      en: "Fullstack application allowing football players without a club to create profiles and be discovered by clubs, built with Laravel, Inertia and React.",
    },
    stack: ["Laravel", "Inertia.js", "React", "MySQL"],
    backend: "Laravel + Inertia",
    database: "MySQL",
    images: [
      "/projects/buscoclub/1.png",
      "/projects/buscoclub/2.png",
    ],
    github: "https://github.com/tu-usuario/busco-club",
  },
];
