import { describe, expect, it } from "vitest";
import { phrase } from "./dict";

const table = { en: "Oak", es: "Roble", fr: "  " };

describe("phrase", () => {
  it("uses the locale and falls back to en", () => {
    expect(phrase(table, "es")).toEqual({ text: "Roble", locale: "es" });
    expect(phrase(table, "fr")).toEqual({ text: "Oak", locale: "en" });
    expect(() => phrase({ en: " " }, "en")).toThrow(/en/);
  });
});
