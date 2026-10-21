/**
 * A phrase for a locale, falling back to en.
 * The table is an argument. No dictionary is fetched.
 */

const LOCALE = /^[a-z]{2}$/;

export function phrase(table: Readonly<Record<string, string>>, locale: string): { text: string; locale: string } {
  if (!LOCALE.test(locale)) throw new Error("locale must be two letters");
  const english = table.en;
  if (typeof english !== "string" || english.trim() === "") throw new Error("en must be a non-blank string");
  const local = table[locale];
  if (locale !== "en" && typeof local === "string" && local.trim() !== "") return { text: local.trim(), locale };
  return { text: english.trim(), locale: "en" };
}
