import translate from "@vitalets/google-translate-api";

export async function translateText(text, targetLang = "fr") {
  try {
    const res = await translate(text, { to: targetLang });
    return res.text;
  } catch (err) {
    console.error("Erreur de traduction:", err);
    return text; // fallback si erreur
  }
}
