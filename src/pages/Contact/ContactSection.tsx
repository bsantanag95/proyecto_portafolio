import ContactForm from "./ContactForm";
import { useLanguage } from "../../hooks/useLanguage";
import { usePageTitle } from "../../hooks/usePageTitle";

const ContactSection = () => {
  const { t } = useLanguage();
  {
    usePageTitle(t.sidebar.contact + " · Esteban Santana");
  }
  return (
    <section
      className="
        py-16
        flex items-center justify-center
        px-4 sm:px-6 lg:px-8
      "
    >
      <div className="w-full max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-3">
          <h1
            className="
    text-2xl sm:text-3xl
    font-semibold
    tracking-tight
    text-zinc-900 dark:text-zinc-100
  "
          >
            {t.contact.title}
          </h1>

          <p
            className="
    text-sm sm:text-base
    text-zinc-600 dark:text-zinc-400
    max-w-lg mx-auto
    leading-relaxed
  "
          >
            {t.contact.subtitle}
          </p>
        </header>

        {/* Formulario */}
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
