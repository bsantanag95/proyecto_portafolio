import { useLanguage } from "../../hooks/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="max-w-3xl space-y-6 min-h-[80vh] flex flex-col justify-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Esteban Santana
      </h1>

      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
        {t.home.role}
      </h2>

      <p className="mt-4 max-w-xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
        {t.home.specialization}
      </p>
    </section>
  );
}

export default Hero;
