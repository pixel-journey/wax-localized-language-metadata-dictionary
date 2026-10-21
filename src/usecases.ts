import { ATOMIC_ORIGIN } from "./api";
import { phrase } from "./dict";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const table = { en: "Oak", es: "Roble", fr: "  " };
const spanish = phrase(table, "es");

export const USE_CASES: UseCase[] = [
  {
    title: "A template is not this table",
    detail: `es is ${spanish.text}. A blank fr falls back to en. The template request is not sent.`,
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/templates/pixeljourney/1`, executed: false },
    transaction: null,
  },
  {
    title: "An asset is not a translation",
    detail: "No metadata update is built.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets/1`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (spanish.locale !== "es" || phrase(table, "fr").locale !== "en") throw new Error("dict");
}
