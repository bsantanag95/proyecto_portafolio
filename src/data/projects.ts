import type { Project } from "../types/projects";
import {
  buscoClubContent,
  gisCatalogoContent,
  pokedexContent,
} from "../content/projects";

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
      es: "Aplicación web que centraliza el registro de futbolistas sin club, permitiendo la creación de perfiles completos con información deportiva, trayectoria, estadísticas, galería multimedia y estado actual de contratación.",
      en: "Web application that centralizes the registration of unsigned football players, allowing the creation of complete profiles with sporting information, career history, statistics, multimedia galleries and current contract status.",
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
    github: "https://github.com/bsantanag95/busco_clubv1",
    descriptionContent: buscoClubContent,
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
      es: "Sistema web orientado a la gestión y catalogación de unidades constructivas, permitiendo organizar materiales y servicios asociados, y generar códigos únicos por catálogo según criterios configurables.",
      en: "Web system focused on managing and cataloging construction units, allowing the organization of associated materials and services, and the generation of unique catalog codes based on configurable criteria.",
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
    github: "https://github.com/bsantanag95/gis_catalogo",
    descriptionContent: gisCatalogoContent,
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
      es: "Aplicación frontend que consume la PokéAPI para explorar información detallada de Pokémon, ofreciendo búsqueda por nombre o número y una visualización clara de datos en formato de tarjetas.",
      en: "Frontend application that consumes the PokéAPI to explore detailed Pokémon information, offering search by name or number and a clear card-based data visualization.",
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
    github: "https://github.com/bsantanag95/react-api-pokemon",
    descriptionContent: pokedexContent,
  },
];
