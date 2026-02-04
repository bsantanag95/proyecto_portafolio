import {
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  InertiaIcon,
  MySqlIcon,
  LaravelIcon,
  LivewireIcon,
  SassIcon,
} from "../components/icons";

export const projectTechStack: Record<
  string,
  {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    base: string;
    hover: string;
    iconColor: string;
  }
> = {
  React: {
    label: "React",
    icon: ReactIcon,
    iconColor: "text-cyan-500",
    base: `
      border-zinc-300/40
      bg-white dark:bg-zinc-900/40
      text-zinc-700 dark:text-zinc-400
    `,
    hover: `
      hover:border-cyan-400/50
      hover:bg-cyan-50
      hover:shadow-cyan-400/25
      dark:hover:bg-cyan-400/10
    `,
  },

  TypeScript: {
    label: "TypeScript",
    icon: TypeScriptIcon,
    iconColor: "text-blue-600 dark:text-blue-500",
    base: `
      border-zinc-300/30
      bg-white/40 dark:bg-zinc-900/40
      text-zinc-600 dark:text-zinc-400
    `,
    hover: `
      hover:border-blue-500/40
      hover:bg-blue-50/60
      dark:hover:bg-blue-500/10
      hover:shadow-blue-500/20
    `,
  },

  JavaScript: {
    label: "JavaScript",
    icon: JavaScriptIcon,
    iconColor: "text-yellow-500",
    base: `
      border-zinc-300/30
      bg-white/40 dark:bg-zinc-900/40
      text-zinc-600 dark:text-zinc-400
    `,
    hover: `
      hover:border-yellow-400/40
      hover:bg-yellow-50/60
      dark:hover:bg-yellow-400/10
      hover:shadow-yellow-400/20
    `,
  },

  Inertia: {
    label: "Inertia",
    icon: InertiaIcon,
    iconColor: "text-purple-500",
    base: `
      border-zinc-300/30
      bg-white/40 dark:bg-zinc-900/40
      text-zinc-600 dark:text-zinc-400
    `,
    hover: `
      hover:border-purple-500/40
      hover:bg-purple-50/60
      dark:hover:bg-purple-500/10
      hover:shadow-purple-500/20
    `,
  },

  "Tailwind CSS": {
    label: "Tailwind",
    icon: TailwindIcon,
    iconColor: "text-cyan-400",
    base: `
      border-zinc-300/30
      bg-white/40 dark:bg-zinc-900/40
      text-zinc-600 dark:text-zinc-400
    `,
    hover: `
      hover:border-cyan-300/40
      hover:bg-cyan-50/60
      dark:hover:bg-cyan-300/10
      hover:shadow-cyan-300/20
    `,
  },

  Laravel: {
    label: "Laravel",
    icon: LaravelIcon,
    iconColor: "text-red-500",
    base: `
       border-zinc-300/30
       bg-white/40 dark:bg-zinc-900/40
       text-zinc-600 dark:text-zinc-400
     `,
    hover: `
       hover:border-red-500/40
       hover:bg-red-50/60
       dark:hover:bg-red-500/10
       hover:shadow-red-500/20
     `,
  },

  MySQL: {
    label: "MySQL",
    icon: MySqlIcon,
    iconColor: "text-blue-500",
    base: `
       border-zinc-300/30
       bg-white/40 dark:bg-zinc-900/40
       text-zinc-600 dark:text-zinc-400
     `,
    hover: `
       hover:border-blue-400/40
       hover:bg-blue-50/60
       dark:hover:bg-blue-400/10
       hover:shadow-blue-400/20
     `,
  },

  Livewire: {
    label: "Livewire",
    icon: LivewireIcon,
    iconColor: "text-pink-500",
    base: `
      border-zinc-300/30
      bg-white/40 dark:bg-zinc-900/40
      text-zinc-600 dark:text-zinc-400
    `,
    hover: `
      hover:border-pink-500/40
      hover:bg-pink-50/60
      dark:hover:bg-pink-500/10
      hover:shadow-pink-500/20
    `,
  },
  Sass: {
    label: "Sass",
    icon: SassIcon,
    iconColor: "text-pink-600",
    base: `
      border-zinc-300/30
      bg-white/40 dark:bg-zinc-900/40
      text-zinc-600 dark:text-zinc-400
    `,
    hover: `
      hover:border-pink-600/40
      hover:bg-pink-50/60
      dark:hover:bg-pink-600/10
      hover:shadow-pink-600/20
    `,
  },
};
