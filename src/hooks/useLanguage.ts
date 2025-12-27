import { useContext } from "react";
import { LanguageContext } from "../context/language/LanguageContext";

export const useLanguage = () => useContext(LanguageContext);