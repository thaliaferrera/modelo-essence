import type { SVGProps } from "react";

/** Fine-line eucalyptus branch. */
export function EucalyptusBranch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 220 320" fill="none" aria-hidden="true" {...props}>
      <path
        d="M110 316C110 240 104 150 78 66 66 28 48 10 34 4"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {[
        [104, 262, -28],
        [112, 232, 24],
        [96, 208, -34],
        [108, 178, 30],
        [88, 154, -40],
        [100, 124, 26],
        [78, 100, -46],
        [86, 72, 20],
        [62, 52, -52],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="27"
          ry="16"
          transform={`rotate(${r} ${x} ${y})`}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      ))}
    </svg>
  );
}

/** Slender olive sprig. */
export function OliveSprig(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 260 140" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 122C60 118 132 96 186 62 214 44 236 26 254 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {[
        [46, 116, 18],
        [72, 108, -30],
        [104, 96, 22],
        [132, 84, -34],
        [162, 68, 20],
        [190, 50, -32],
        [216, 32, 18],
      ].map(([x, y, r], i) => (
        <path
          key={i}
          d="M0 0c14-13 34-13 44 0-10 13-30 13-44 0Z"
          transform={`translate(${x} ${y}) rotate(${r})`}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      ))}
    </svg>
  );
}

/** Single leaf mark, used as a divider ornament. */
export function LeafMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M24 44C10 36 6 22 12 6c16 0 28 10 28 24 0 8-6 14-16 14Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path d="M24 44C22 30 20 16 14 8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
