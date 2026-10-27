export type TextCase = "upper" | "lower" | "sentence" | "title";
export function convertText(text: string, mode: TextCase): string {
  if (mode === "upper") return text.toUpperCase();
  if (mode === "lower") return text.toLowerCase();
  if (mode === "title") return text.toLowerCase().replace(/\p{L}[\p{L}\p{M}'’]*/gu, word => word.charAt(0).toUpperCase() + word.slice(1));
  return text.toLowerCase().replace(/(^|[.!?]["”'’)\]]*\s+|\n\s*)([^\p{L}]*)(\p{L})/gu,
    (_match, boundary: string, prefix: string, letter: string) => boundary + prefix + letter.toUpperCase());
}
