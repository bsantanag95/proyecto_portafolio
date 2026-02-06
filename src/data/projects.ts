import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    slug: "busco-club",
    title: {
      es: "Busco Club",
      en: "FreeAgent Hub",
    },
    intro: {
      es: "Plataforma para registrar y visibilizar futbolistas sin club mediante perfiles detallados",
      en: "Platform to register and showcase football players without a club through detailed profiles.",
    },
    role: {
      es: "Desarrollo full-stack completo, desde la arquitectura hasta la experiencia de usuario.",
      en: "End-to-end full-stack development, from architecture to user experience.",
    },
    highlights: {
      es: [
        "Autenticación y roles de usuario",
        "Relaciones many-to-many entre jugadores y clubes",
        "Frontend desacoplado con Inertia + React",
      ],
      en: [
        "User authentication and roles",
        "Many-to-many relationships between players and clubs",
        "Decoupled frontend using Inertia + React",
      ],
    },
    summary: {
      es: "Plataforma para futbolistas sin club.",
      en: "Platform for football players without a club.",
    },
    description: {
      es: "Aplicación fullstack que permite a futbolistas sin club crear perfiles y ser visualizados por clubes, desarrollada con Laravel, Inertia y React.",
      en: "Fullstack application allowing football players without a club to create profiles and be discovered by clubs, built with Laravel, Inertia and React.",
    },
    stack: [
      "Laravel",
      "React",
      "JavaScript",
      "Inertia",
      "MySQL",
      "Tailwind CSS",
    ],
    backend: "Laravel + Inertia",
    database: "MySQL",
    category: "Web",
    images: [
      "/projects/busco-club/buscoclub.webp",
      "/projects/busco-club/buscoclub2.webp",
      "/projects/busco-club/buscoclub3.webp",
      "/projects/busco-club/buscoclub4.webp",
    ],
    github: "https://github.com/tu-usuario/busco-club",
  },

  {
    slug: "gis-catalogo",
    title: {
      es: "Catálogo GIS de Unidades Constructivas",
      en: "GIS Construction Units Catalog",
    },
    intro: {
      es: "Sistema para gestionar Unidades Constructivas, generando códigos únicos por catálogo.",
      en: "System for managing Construction Units, generating unique codes per catalog.",
    },
    role: {
      es: "Desarrollo full-stack completo, desde la arquitectura hasta la experiencia de usuario.",
      en: "End-to-end full-stack development, from architecture to user experience.",
    },
    highlights: {
      es: [
        "Autenticación y roles de usuario",
        "Relaciones many-to-many entre jugadores y clubes",
        "Frontend desacoplado con Inertia + React",
      ],
      en: [
        "User authentication and roles",
        "Many-to-many relationships between players and clubs",
        "Decoupled frontend using Inertia + React",
      ],
    },
    summary: {
      es: "Sistema de gestión con mapas y base de datos.",
      en: "Management system with maps and database.",
    },
    description: {
      es: "Sistema desarrollado con Laravel y Livewire para la gestión de unidades constructivas, integrando información geoespacial y persistencia en MySQL.",
      en: "System built with Laravel and Livewire for managing construction units, integrating geospatial data and MySQL persistence.",
    },
    stack: ["Laravel", "Livewire", "MySQL", "Tailwind CSS"],
    backend: "Laravel",
    database: "MySQL",
    category: "Web",
    images: [
      "/projects/gis/giscatalogo.webp",
      "/projects/gis/giscatalogo2.webp",
      "/projects/gis/giscatalogo3.webp",
      "/projects/gis/giscatalogo4.webp",
    ],
    github: "https://github.com/tu-usuario/gis-catalogo",
  },

  {
    slug: "pokedex",
    title: {
      es: "Pokédex con API de Pokémon",
      en: "Pokédex with Pokémon API",
    },
    intro: {
      es: "Pokedex que consume la PokéAPI con búsqueda y visualización de detalles en tarjetas.",
      en: "Pokedex consuming the PokéAPI with search and card-based detail display.",
    },
    role: {
      es: "Desarrollo full-stack completo, desde la arquitectura hasta la experiencia de usuario.",
      en: "End-to-end full-stack development, from architecture to user experience.",
    },
    highlights: {
      es: [
        "Autenticación y roles de usuario",
        "Relaciones many-to-many entre jugadores y clubes",
        "Frontend desacoplado con Inertia + React",
      ],
      en: [
        "User authentication and roles",
        "Many-to-many relationships between players and clubs",
        "Decoupled frontend using Inertia + React",
      ],
    },
    summary: {
      es: "Aplicación frontend que consume una API externa.",
      en: "Frontend application consuming an external API.",
    },
    description: {
      es: "Aplicación desarrollada en React que consume la PokéAPI para mostrar información detallada de Pokémon, permitiendo búsqueda por nombre o número y visualización dinámica de datos.",
      en: "React application that consumes the PokéAPI to display detailed Pokémon information, allowing search by name or number with dynamic data rendering.",
    },
    stack: ["React", "JavaScript", "Sass", "REST API"],
    backend: "PokéAPI (externa)",
    database: null,
    category: "Web",
    images: [
      "/projects/pokedex/pokedex.webp",
      "/projects/pokedex/pokedex2.webp",
      "/projects/pokedex/pokedex3.webp",
      "/projects/pokedex/pokedex4.webp",
    ],
    github: "https://github.com/tu-usuario/pokedex",
  },
];
