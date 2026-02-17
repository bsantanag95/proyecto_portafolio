import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { usePageTitle } from "../hooks/usePageTitle";

const NotFound = () => {
  const { t, language } = useLanguage();
  usePageTitle(
    "Error 404 - " +
      (language === "en" ? "Page Not Found" : "Página No Encontrada"),
  );
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-6"
      aria-labelledby="not-found-title"
    >
      <div className="max-w-md space-y-8 text-center">
        {/* Número con efecto de neón */}
        <div className="relative">
          <h1
            aria-hidden="true"
            className="text-9xl font-black text-zinc-900/5 dark:text-zinc-100/5"
          >
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-7xl font-bold tracking-tighter bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
              404
            </h1>
          </div>
        </div>

        {/* Mensaje */}
        <div className="space-y-4">
          <div
            role="status"
            aria-live="polite"
            className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-blue-500/10 to-cyan-500/10 px-4 py-2"
          >
            <MapPin
              aria-hidden="true"
              className="h-4 w-4 text-blue-600 dark:text-blue-400"
            />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {t.notFound.error}
            </span>
          </div>

          <h2
            id="not-found-title"
            className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100"
          >
            {t.notFound.title}
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t.notFound.subtitle}
          </p>
        </div>

        {/* Botón de retorno */}
        <Link
          to="/"
          aria-label={t.notFound.cta}
          className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-zinc-900 to-zinc-800 px-6 py-4 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/25 dark:from-zinc-100 dark:to-zinc-300 dark:text-zinc-900 dark:hover:shadow-zinc-100/25"
        >
          <ArrowLeft
            aria-hidden="true"
            className="h-5 w-5 transition-transform group-hover:-translate-x-1"
          />
          <span className="font-semibold">{t.notFound.cta}</span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
