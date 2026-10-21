"use client";

import { phrase } from "./dict";

const table = { en: "Oak", es: "Roble", fr: "  " };

export function Demo() {
  const spanish = phrase(table, "es");
  const french = phrase(table, "fr");
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>A blank locale falls back to en</h1>
      <p className="lede">es is Roble. fr is only spaces, so the text is Oak and the locale used is en. Nothing was fetched.</p>
      <p>
        es {spanish.text}. fr uses {french.locale}: {french.text}.
      </p>
    </main>
  );
}
