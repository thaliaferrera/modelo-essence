import type { SVGProps } from "react";

/** Long, fine-line eucalyptus branch — the signature Essence mark. */
export function EucalyptusBranch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 420" fill="none" aria-hidden="true" {...props}>
      <path
        d="M120 418C120 330 114 232 90 148 74 92 52 46 26 8"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {[
        [116, 356, -30, 30, 18],
        [126, 322, 26, 28, 17],
        [108, 292, -36, 29, 18],
        [120, 258, 28, 27, 16],
        [100, 228, -42, 27, 16],
        [110, 196, 24, 25, 15],
        [88, 168, -48, 24, 15],
        [96, 138, 20, 22, 13],
        [72, 112, -54, 21, 13],
        [78, 84, 16, 19, 12],
        [56, 60, -58, 17, 11],
        [58, 36, 12, 15, 9],
      ].map(([x, y, r, rx, ry], i) => (
        <g key={i}>
          <ellipse
            cx={x}
            cy={y}
            rx={rx}
            ry={ry}
            transform={`rotate(${r} ${x} ${y})`}
            stroke="currentColor"
            strokeWidth="0.9"
            fill="none"
          />
          <line
            x1={x - rx * 0.7}
            y1={y}
            x2={x + rx * 0.7}
            y2={y}
            transform={`rotate(${r} ${x} ${y})`}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.6"
          />
        </g>
      ))}
    </svg>
  );
}

/** Slender olive branch with narrow leaves. */
export function OliveBranch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 160" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 146C68 142 152 116 214 78 252 54 288 30 316 6"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {[
        [40, 140, 22],
        [66, 134, -34],
        [96, 124, 26],
        [124, 112, -38],
        [154, 98, 24],
        [184, 82, -36],
        [214, 62, 22],
        [244, 42, -34],
        [272, 24, 20],
      ].map(([x, y, r], i) => (
        <path
          key={i}
          d="M0 0c16-15 40-15 52 0-12 15-36 15-52 0Z"
          transform={`translate(${x} ${y}) rotate(${r}) scale(0.86)`}
          stroke="currentColor"
          strokeWidth="0.9"
          fill="none"
        />
      ))}
    </svg>
  );
}

/** Fern frond with paired pinnae. */
export function FernFrond(props: SVGProps<SVGSVGElement>) {
  const pairs = Array.from({ length: 11 }, (_, i) => i);
  return (
    <svg viewBox="0 0 180 360" fill="none" aria-hidden="true" {...props}>
      <path
        d="M90 358C88 260 84 160 74 74 70 44 62 20 52 4"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {pairs.map((i) => {
        const t = i / (pairs.length - 1);
        const y = 336 - t * 300;
        const x = 90 - t * 34;
        const len = 62 * (1 - t * 0.72) + 10;
        return (
          <g key={i} stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
            <path d={`M${x} ${y}q${-len * 0.6} ${-6} ${-len} ${-16}`} />
            <path d={`M${x} ${y}q${len * 0.6} ${-6} ${len} ${-16}`} />
          </g>
        );
      })}
    </svg>
  );
}

/** Small emerging plant, for page borders. */
export function SmallPlant(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 140" fill="none" aria-hidden="true" {...props}>
      <path d="M80 138C80 100 78 74 70 52" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M80 138c4-30 12-52 26-70" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M78 96C56 92 40 74 34 50c26 2 44 18 44 46Z" stroke="currentColor" strokeWidth="0.9" fill="none" />
      <path d="M84 84c20-6 32-24 36-48-24 4-40 22-36 48Z" stroke="currentColor" strokeWidth="0.9" fill="none" />
      <path d="M74 60c-10-10-12-26-6-42 14 10 18 28 6 42Z" stroke="currentColor" strokeWidth="0.9" fill="none" />
    </svg>
  );
}

/** Single leaf mark, used as a quiet divider ornament and logo. */
export function LeafMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M24 45C10 37 5 22 12 4c17 0 29 10 29 25 0 9-7 16-17 16Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path d="M24 45C22 30 20 16 13 7" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
    </svg>
  );
}

/** Thin-line organic icons used across the sections. */
export function IconBreath(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="20" cy="20" r="8.5" stroke="currentColor" strokeWidth="0.9" opacity="0.6" />
      <circle cx="20" cy="20" r="2.5" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
    </svg>
  );
}

export function IconSeed(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <path d="M20 36C10 30 6 20 10 6c13 1 22 9 22 18 0 7-5 12-12 12Z" stroke="currentColor" strokeWidth="0.9" />
      <path d="M20 36C19 25 17 15 11 8" stroke="currentColor" strokeWidth="0.7" opacity="0.65" />
    </svg>
  );
}

export function IconStone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 24c0-9 7-15 15-15s13 5 13 12-6 13-15 13S6 31 6 24Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path d="M12 22c2-5 7-8 12-8" stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
    </svg>
  );
}

export function IconWave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <path d="M3 15c5-6 11-6 17 0s12 6 17 0" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M3 25c5-6 11-6 17 0s12 6 17 0" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function IconSun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <circle cx="20" cy="20" r="9" stroke="currentColor" strokeWidth="0.9" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={20 + Math.cos(a) * 13}
            y1={20 + Math.sin(a) * 13}
            x2={20 + Math.cos(a) * 17}
            y2={20 + Math.sin(a) * 17}
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.7"
          />
        );
      })}
    </svg>
  );
}

export function IconNest(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <path d="M5 20c0 8 7 14 15 14s15-6 15-14" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M9 18c4 4 8 6 11 6s7-2 11-6" stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
      <path d="M14 12c3-4 9-4 12 0" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

/** Flowing organic transition between sections. */
export function OrganicWave({
  className = "",
  flip = false,
  fill = "currentColor",
}: {
  className?: string;
  flip?: boolean;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        d="M0 62c168-46 312-58 476-30 164 28 268 62 436 44 168-18 296-66 528-52v96H0V62Z"
        fill={fill}
      />
    </svg>
  );
}
