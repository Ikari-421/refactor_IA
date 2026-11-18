// name d'une HowToStep : mot ou groupe court (≤ 3 mots) suivi d'un point au début du texte, sans le point final ;
// sinon « Étape N ». Un verbe à l'impératif/infinitif en tête (« Coupez les fraises. ») n'est pas un titre.
export function stepName(text, n) {
  const m = String(text || '').trim().match(/^(\p{Lu}[^.\n]{0,40}?)\.(?:\s|$)/u);
  if (m) {
    const t = m[1].trim(), w = t.split(/\s+/);
    if (w.length <= 3 && (/(ure|ière)$|^(sucre|beurre|concombre|marbre|gaufrier)$/i.test(w[0]) || !/(ez|er|ir|re|ez-vous|ez-les)$/i.test(w[0]) || (/(er|ir|re)$/i.test(w[0]) && /^\s+\p{Lu}/u.test(String(text || '').trim().slice(m[0].length - 1)))) && !/[:;!?]/.test(t)) return t;
  }
  return `Étape ${n}`;
}
