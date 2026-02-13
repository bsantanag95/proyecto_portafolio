import type { ContentSection } from "../../types/content";

export const buscoClubContent: Record<
  "es" | "en",
  { sections: ContentSection[] }
> = {
  es: {
    sections: [
      {
        type: "paragraph",
        content:
          "Busco Club es una plataforma enfocada en visibilizar futbolistas sin club mediante perfiles detallados.",
      },
      {
        type: "paragraph",
        content:
          "La plataforma está compuesta por dos datatable, una con registros de los jugadores sin club y otra con los jugadores que encontraron club. Cada jugador cuenta con un perfíl información deportiva, historial de clubes, estadísticas, redes sociales, galería multimedia, informe de scouting, datos personales relevantes y su estado actual.",
      },
      {
        type: "title",
        content: "Funcionalidades principales",
      },
      {
        type: "list",
        items: [
          "Datatable de jugadores sin club y jugadores que encontraron club",
          "Perfiles individuales de jugadores",
          "Historial de clubes y estadísticas",
          "Galería de imágenes y videos",
          "Listado de jugadores que encontraron club",
          "Gestión de perfiles de jugadores por parte de administradores",
          "CRUD completo de jugadores, clubes, estadísticas y multimedia",
        ],
      },
    ],
  },
  en: {
    sections: [
      {
        type: "paragraph",
        content:
          "Busco Club is a platform focused on increasing the visibility of football players without a club through structured public profiles.",
      },
      {
        type: "paragraph",
        content:
          "The platform consists of two datatables, one with records of players without a club and another with players who found a club. Each player has a profile with sports information, club history, statistics, social media links, multimedia gallery, scouting report, relevant personal data and their current status.",
      },

      {
        type: "title",
        content: "Main Features",
      },
      {
        type: "list",
        items: [
          "Datatable of players without a club and players who found a club",
          "Individual player profiles",
          "Club history and statistics",
          "Image and video gallery",
          "Players who found a club",
          "Player profile management by administrators",
          "Full CRUD for players, clubs, statistics and multimedia",
        ],
      },
    ],
  },
};
