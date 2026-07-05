export interface WheelSegment {
  /** Full reward label shown in the result message. */
  label: string;
  /** Short label rendered inside the wheel wedge. */
  short: string;
  /** Relative probability weight (higher = more likely). */
  weight: number;
  /** Whether this is a winning prize (vs. a "try again"). */
  win: boolean;
}

// Reward set from the TLJ 2026 strategy report (Spin to Win section).
export const WHEEL_SEGMENTS: WheelSegment[] = [
  { label: "Үнэгүй кофе", short: "Кофе", weight: 2, win: true },
  { label: "Бялуу 15% хямдрал", short: "−15%", weight: 2, win: true },
  { label: "Бонус оноо ×2", short: "×2 оноо", weight: 3, win: true },
  { label: "Үнэгүй макарон", short: "Макарон", weight: 2, win: true },
  { label: "10% хямдралын код", short: "−10%", weight: 3, win: true },
  { label: "Дахин оролдоорой", short: "Дахин", weight: 4, win: false },
];

/** Weighted-random segment index (probability weighting per the report). */
export function pickWeightedIndex(
  segments: WheelSegment[] = WHEEL_SEGMENTS,
  random: () => number = Math.random,
): number {
  const total = segments.reduce((sum, s) => sum + s.weight, 0);
  let r = random() * total;
  for (let i = 0; i < segments.length; i++) {
    r -= segments[i].weight;
    if (r < 0) return i;
  }
  return segments.length - 1;
}
