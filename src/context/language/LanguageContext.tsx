import { createContext } from "react";
import type { Language } from "../../types/language";
import { translations } from "../../i18n";

export interface LanguageContextType {
  language: Language;
  t: typeof translations.es;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType
);
