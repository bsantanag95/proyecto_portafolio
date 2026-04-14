import type { ContentSection } from "../../types/content";

export const portafolioContent: Record<
  "es" | "en",
  { sections: ContentSection[] }
> = {
  es: {
    sections: [
      {
        type: "paragraph",
        content:
          "Desarrollo frontend completo desde el diseño hasta la implementación, con enfoque en la experiencia de usuario y buenas prácticas de desarrollo web.",
      },
      {
        type: "paragraph",
        content:
          "Portafolio construido con React y Tailwind CSS para mostrar proyectos y habilidades, con un diseño responsivo y moderno que optimiza el rendimiento y la accesibilidad.",
      },
      {
        type: "title",
        content: "Funcionalidades",
      },
      {
        type: "list",
        items: [
          "Diseño responsivo y moderno utilizando Tailwind CSS",
          "Desarrollo frontend con React para una experiencia de usuario fluida",
          "Implementación de secciones para mostrar proyectos, habilidades y experiencia",
          "Optimización de rendimiento y accesibilidad para una mejor experiencia de usuario",
          "Uso de buenas prácticas de desarrollo web para asegurar un código limpio y mantenible",
          "Implementación de animaciones y efectos visuales para mejorar la interactividad del portafolio",
          "Enrutamiento dinámico para facilitar la navegación entre secciones del portafolio",
          "Sistema propio i18n ES/EN utilizando React Context para gestionar el idioma de la aplicación",
          "Accesibilidad mejorada mediante el uso de etiquetas ARIA y navegación por teclado",
          "Uso de hooks personalizados para gestionar el estado y la lógica de la aplicación de manera eficiente",
          "Uso de contextos para gestionar modo claro y oscuro de manera global en la aplicación",
          "Barra lateral de navegación con uso de ScrollSpy y ScrollToSection para una navegación fluida entre secciones",
        ],
      },
    ],
  },
  en: {
    sections: [
      {
        type: "paragraph",
        content:
          "Complete frontend development from design to implementation, with a focus on user experience and best web development practices.",
      },
      {
        type: "paragraph",
        content:
          "Portfolio built with React and Tailwind CSS to showcase projects and skills, featuring a responsive and modern design that optimizes performance and accessibility.",
      },
      {
        type: "title",
        content: "Features",
      },
      {
        type: "list",
        items: [
          "Responsive and modern design using Tailwind CSS",
          "Fluid user experience with React frontend",
          "Implementation of sections to display projects, skills, and experience",
          "Performance and accessibility optimization",
          "Use of best web development practices for clean and maintainable code",
          "Implementation of animations and visual effects to enhance portfolio interactivity",
          "Dynamic routing for easy navigation between portfolio sections",
          "Own i18n system ES/EN using React Context for language management",
          "Improved accessibility through ARIA labels and keyboard navigation",
          "Use of custom hooks for efficient state and application logic management",
          "Use of contexts for global light and dark mode management in the application",
          "Sidebar navigation with ScrollSpy and ScrollToSection for smooth navigation between sections",
        ],
      },
    ],
  },
};
