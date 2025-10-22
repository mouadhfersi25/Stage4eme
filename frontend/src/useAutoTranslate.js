import { useEffect, useState } from "react";
import { translateText } from "./translate";
import { useLanguage } from "./LanguageContext";

export function useAutoTranslate(text) {
  const { language } = useLanguage();
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    async function runTranslation() {
      if (language === "en") {
        setTranslated(text); // si anglais, garder le texte original
      } else {
        const res = await translateText(text, language);
        setTranslated(res);
      }
    }
    runTranslation();
  }, [text, language]);

  return translated;
}
