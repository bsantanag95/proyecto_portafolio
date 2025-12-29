export const projects = [
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
      es: "Proyecto React que consume la PokéAPI...",
      en: "React project consuming the PokéAPI...",
    },
    stack: ["React", "TypeScript", "Tailwind", "API REST"],
    backend: "API externa (PokéAPI)",
    database: null,
    images: [
      "/projects/pokedex/1.png",
      "/projects/pokedex/2.png",
    ],
    github: "...",
  },

  {
    slug: "gis-catalogo",
    title: {
      es: "Catálogo GIS de Unidades Constructivas",
      en: "GIS Construction Units Catalog",
    },
    summary: {
      es: "Sistema de gestión con base de datos y mapas.",
      en: "Management system with database and maps.",
    },
    description: {
      es: "Aplicación Laravel + Livewire con MySQL...",
      en: "Laravel + Livewire app with MySQL...",
    },
    stack: ["Laravel", "Livewire", "MySQL", "GIS"],
    backend: "Laravel",
    database: "MySQL",
    images: [
      "/projects/gis/1.png",
      "/projects/gis/2.png",
    ],
    github: "...",
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
      es: "Sistema fullstack con Laravel + Inertia + React...",
      en: "Fullstack system with Laravel + Inertia + React...",
    },
    stack: ["Laravel", "Inertia", "React", "MySQL"],
    backend: "Laravel + Inertia",
    database: "MySQL",
    images: [
      "/projects/buscoclub/1.png",
      "/projects/buscoclub/2.png",
    ],
    github: "...",
  },
];
