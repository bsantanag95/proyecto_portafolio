import type { Project } from "../types/projects";
import {
  buscoClubContent,
  gisCatalogoContent,
  pokedexContent,
  portafolioContent,
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

  {
    slug: "portafolio",
    title: {
      es: "Portafolio Personal",
      en: "Personal Portfolio",
    },
    intro: {
      es: "Portafolio personal construido con React y Tailwind CSS para mostrar proyectos y habilidades.",
      en: "Personal portfolio built with React and Tailwind CSS to showcase projects and skills.",
    },
    description: {
      es: "Portafolio personal construido con React y Tailwind CSS para mostrar proyectos y habilidades. Diseño responsivo y moderno que optimiza el rendimiento y la accesibilidad, con secciones para proyectos, habilidades y experiencia.",
      en: "Personal portfolio built with React and Tailwind CSS to showcase projects and skills. Responsive and modern design that optimizes performance and accessibility, featuring sections for projects, skills, and experience.",
    },
    stack: ["React", "TypeScript", "Tailwind CSS"],
    backend: "N/A (frontend-only)",
    database: null,
    category: "Web",
    images: ["/projects/portafolio/portafolio.webp"],
    github: "https://github.com/bsantanag95/proyecto_portafolio",
    descriptionContent: portafolioContent,
  },
];
