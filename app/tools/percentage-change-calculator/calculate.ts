export type ChangeResult =
  | { ok: false; error: string }
  | { ok: true; original: number; next: number; difference: number; percentage: number };

export function calculateChange(originalText: string, nextText: string): ChangeResult {
  const decimal = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/;
  const originalValue = originalText.trim();
  const nextValue = nextText.trim();
  if (!originalValue || !nextValue) return { ok: false, error: "Enter both values." };
  if (!decimal.test(originalValue) || !decimal.test(nextValue)) {
    return { ok: false, error: "Use numbers with a decimal point if needed, without commas, currency signs or percent symbols." };
  }
  const original = Number(originalValue);
  const next = Number(nextValue);
  if (!Number.isFinite(original) || !Number.isFinite(next)) return { ok: false, error: "Enter finite numbers." };
  if (original <= 0) return { ok: false, error: "The original value must be greater than zero. A percentage change from zero is undefined; negative starting values need a different interpretation." };
  const difference = next - original;
  const percentage = difference / original * 100;
  if (!Number.isFinite(difference) || !Number.isFinite(percentage)) return { ok: false, error: "These numbers produce a result outside the supported range. Try smaller values." };
  return { ok: true, original, next, difference, percentage };
}
