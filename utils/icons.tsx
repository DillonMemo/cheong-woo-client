import { IconProps } from "../interfaces";

export const ArrowUp: React.FC<IconProps> = ({
  width = "1rem",
  height = "1rem",
  fill = "none",
  stroke = "#626262",
  strokeWidth = 2,
}) => (
  <svg
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <g
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 15l-6-6l-6 6" />
    </g>
  </svg>
);

export const ArrowDown: React.FC<IconProps> = ({
  width = "1rem",
  height = "1rem",
  fill = "none",
  stroke = "#626262",
  strokeWidth = 2,
}) => (
  <svg
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <g
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 9l6 6l6-6" />
    </g>
  </svg>
);
export const ArrowLeft: React.FC<IconProps> = ({
  width = "1rem",
  height = "1rem",
  fill = "none",
  stroke = "#626262",
  strokeWidth = 2,
}) => (
  <svg
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <g
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="M12 19l-7-7l7-7" />
    </g>
  </svg>
);
export const ArrowRight: React.FC<IconProps> = ({
  width = "1rem",
  height = "1rem",
  fill = "none",
  stroke = "#626262",
  strokeWidth = 2,
}) => (
  <svg
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <g
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5l7 7l-7 7" />
    </g>
  </svg>
);

export const Facebook: React.FC<IconProps> = ({
  width = "1rem",
  height = "1rem",
  fill = "none",
  stroke = "#626262",
}) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <g
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </g>
  </svg>
);

export const Insta: React.FC<IconProps> = ({
  width = "1rem",
  height = "1rem",
  fill = "none",
  stroke = "#626262",
}) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <g
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </g>
  </svg>
);

export const Image: React.FC<IconProps> = ({
  width = "1rem",
  height = "1rem",
  fill = "none",
  stroke = "#626262",
  strokeWidth = 2,
}) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <g
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </g>
  </svg>
);

export const Globe: React.FC<IconProps> = ({
  width = "1rem",
  height = "1rem",
  fill = "none",
  stroke = "#626262",
}) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <g
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10a15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10z" />
    </g>
  </svg>
);
