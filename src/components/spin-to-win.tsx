"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { WHEEL_SEGMENTS, pickWeightedIndex } from "@/lib/spin";

const SEG = WHEEL_SEGMENTS.length;
const SEG_ANGLE = 360 / SEG;
const CX = 160;
const CY = 160;
const R = 150;
const LABEL_R = R * 0.62;

const COLORS = [
  { fill: "var(--color-primary)", text: "var(--color-on-primary)" },
  { fill: "#ffffff", text: "var(--color-foreground)" },
];

function polar(radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.sin(rad), y: CY - radius * Math.cos(rad) };
}

function wedgePath(index: number) {
  const a0 = index * SEG_ANGLE;
  const a1 = a0 + SEG_ANGLE;
  const p0 = polar(R, a0);
  const p1 = polar(R, a1);
  return `M${CX} ${CY} L${p0.x.toFixed(2)} ${p0.y.toFixed(2)} A${R} ${R} 0 0 1 ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} Z`;
}

export function SpinToWin() {
  const reduceMotion = useReducedMotion();
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [resultIndex, setResultIndex] = useState<number | null>(null);
  const pendingResult = useRef<number | null>(null);

  function spin() {
    if (spinning) return;
    const index = pickWeightedIndex();
    const center = index * SEG_ANGLE + SEG_ANGLE / 2;
    const landing = (360 - (center % 360)) % 360;
    const base = Math.ceil(rotation / 360) * 360;
    const extraTurns = reduceMotion ? 0 : 360 * 5;
    pendingResult.current = index;
    setResultIndex(null);
    setSpinning(true);
    setRotation(base + extraTurns + landing);
  }

  const result = resultIndex !== null ? WHEEL_SEGMENTS[resultIndex] : null;

  return (
    <div className="flex flex-col items-center px-4">
      <div className="relative w-[300px] h-[300px] max-w-full">
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
          <div className="h-0 w-0 border-x-8 border-t-[14px] border-x-transparent border-t-foreground" />
        </div>

        <motion.svg
          viewBox="0 0 320 320"
          className="h-full w-full drop-shadow-[0_6px_20px_rgba(61,70,77,0.08)]"
          animate={{ rotate: rotation }}
          transition={{
            duration: reduceMotion ? 0.3 : 4,
            ease: [0.16, 1, 0.3, 1],
          }}
          onAnimationComplete={() => {
            if (pendingResult.current !== null) {
              setResultIndex(pendingResult.current);
              pendingResult.current = null;
              setSpinning(false);
            }
          }}
        >
          <circle cx={CX} cy={CY} r={R} fill="#ffffff" />
          {WHEEL_SEGMENTS.map((seg, i) => {
            const color = COLORS[i % COLORS.length];
            const center = i * SEG_ANGLE + SEG_ANGLE / 2;
            const lp = polar(LABEL_R, center);
            return (
              <g key={seg.label}>
                <path
                  d={wedgePath(i)}
                  fill={color.fill}
                  stroke="var(--color-border)"
                  strokeWidth={1}
                />
                <text
                  x={lp.x}
                  y={lp.y}
                  fill={color.text}
                  fontSize={13}
                  fontWeight={500}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${center} ${lp.x} ${lp.y})`}
                >
                  {seg.short}
                </text>
              </g>
            );
          })}
          <circle
            cx={CX}
            cy={CY}
            r={22}
            fill="var(--color-primary)"
            stroke="#ffffff"
            strokeWidth={4}
          />
        </motion.svg>
      </div>

      <button
        type="button"
        onClick={spin}
        disabled={spinning}
        className="mt-5 w-full max-w-[280px] rounded-xl bg-primary px-8 py-3.5 text-sm font-medium text-on-primary transition-[background-color,transform] duration-150 ease-out hover-fine:bg-primary-hover active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {spinning ? "Эргэж байна…" : "Хүрд эргүүлэх"}
      </button>

      <div aria-live="polite" className="mt-4 min-h-6 text-center">
        {result &&
          (result.win ? (
            <p className="text-sm text-foreground">
              Баяр хүргэе! Та{" "}
              <span className="font-semibold text-primary">{result.label}</span>{" "}
              хожлоо.
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              Энэ удаад азгүй байлаа — дараагийн худалдан авалтдаа дахин
              оролдоорой.
            </p>
          ))}
      </div>
    </div>
  );
}
