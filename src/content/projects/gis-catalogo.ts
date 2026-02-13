import type { ContentSection } from "../../types/content";

export const gisCatalogoContent: Record<
  "es" | "en",
  { sections: ContentSection[] }
> = {
  es: {
    sections: [
      {
        type: "paragraph",
        content:
          "GIS Catálogo es un sistema web orientado a la gestión estructurada de Unidades Constructivas utilizadas en procesos técnicos y administrativos.",
      },
      {
        type: "paragraph",
        content:
          "La plataforma permite administrar materiales, servicios, unidades constructivas y catálogos, relacionándolos entre sí mediante reglas definidas por el negocio.",
      },
      {
        type: "title",
        content: "Funcionalidades principales",
      },
      {
        type: "list",
        items: [
          "CRUD completo de Unidades Constructivas, materiales y servicios",
          "Asociación de materiales y servicios a cada unidad constructiva",
          "Gestión de catálogos con generación automática de códigos CUDN",
          "Persistencia de datos estructurados en base de datos relacional",
        ],
      },
    ],
  },
  en: {
    sections: [
      {
        type: "paragraph",
        content:
          "GIS Catalog is a web system designed to manage Construction Units used in technical and administrative workflows.",
      },
      {
        type: "title",
        content: "Main features",
      },
      {
        type: "list",
        items: [
          "Full CRUD for construction units, materials and services",
          "Material and service associations per unit",
          "Automatic generation of unique CUDN codes per catalog",
          "Relational database persistence",
        ],
      },
    ],
  },
};
