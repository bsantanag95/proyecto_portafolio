import type { ContentSection } from "../../types/content";

export const pokedexContent: Record<
  "es" | "en",
  { sections: ContentSection[] }
> = {
  es: {
    sections: [
      {
        type: "paragraph",
        content:
          "Esta Pokédex es una aplicación frontend usada para probar mis primeras habilidades como desarrollador en React. La aplicación consume la PokéAPI para mostrar información detallada en formato de tarjetas de todos los Pokémon de forma simple y visual.",
      },
      {
        type: "paragraph",
        content:
          "El proyecto presenta funcionalidades usando los hooks básicos de React, permitiendo búsquedas rápidas tanto por nombre como número en la Pokédex y mostrando visualización de datos en tarjetas dinámicas.",
      },
      {
        type: "title",
        content: "Funcionalidades",
      },
      {
        type: "list",
        items: [
          "Búsqueda de Pokémon por nombre o número",
          "Visualización de tipos",
          "Fondo de pantalla dinámico según el tipo del Pokémon",
          "Tarjetas con diseño dinámico según el Pokémon",
          "Visualización de variaciones Shiny de cada Pokémon",
          "Consumo de API externa con manejo de estados",
        ],
      },
    ],
  },
  en: {
    sections: [
      {
        type: "paragraph",
        content:
          "This Pokédex is a frontend application used to test my early skills as a React developer. The app consumes the PokéAPI to display detailed information in a card format for all Pokémon in a simple and visual way.",
      },
      {
        type: "paragraph",
        content:
          "The project features basic React hooks functionality, enabling quick searches by name or ID in the Pokédex and displaying data in dynamic cards.",
      },
      {
        type: "title",
        content: "Features",
      },
      {
        type: "list",
        items: [
          "Search Pokémon by name or ID",
          "Type visualization",
          "Dynamic background based on Pokémon type",
          "Cards with dynamic design based on the Pokémon",
          "Visualization of Shiny variations for each Pokémon",
          "Consumption of external API with state management",
        ],
      },
    ],
  },
};
