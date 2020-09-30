import { createGlobalStyle } from "styled-components";

export const { xxs, xs, sm, md, lg, xl, xxl } = {
  xxs: "@media (max-width: 32rem)", // 512px
  xs: "@media (max-width: 38rem)", // 608px
  sm: "@media (max-width: 48rem)", // 768px
  md: "@media (max-width: 64rem)", // 1024px
  lg: "@media (max-width: 80rem)", // 1280px
  xl: "@media (max-width: 90rem)", // 1440px
  xxl: "@media (max-width: 120rem)", // 1920px
};

export const Global = createGlobalStyle`
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Noto Sans KR', 'Segoe UI', 'Roboto', 'Malgun Gothic', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overscroll-behavior: auto;
        user-select: none;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    /** 스크롤바 커스텀 */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(34, 45, 50, 0.5);
    }
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(34, 45, 50, 1);
    }
`;

/**
 * 명도 설정
 */
export type LightnessColors = {
  background: string;
  accent1: string;
  accent2: string;
  accent3: string;
  accent4: string;
  accent5: string;
  accent6: string;
  default: string;
  accent8: string;
  foreground: string;
};

export type LightnessPalette = {
  default: LightnessColors;
};

export const defaultPalette: LightnessColors = {
  /** Default */
  background: "#FFFFFF",
  accent1: "#D6D6D6",
  accent2: "#BCBCBC",
  accent3: "#A3A3A3",
  accent4: "#8A8A8A",
  accent5: "#707070",
  accent6: "#575757",
  default: "#3D3D3D",
  accent8: "#242424",
  foreground: "#0A0A0A",
};

type ColorKey =
  | "gray"
  | "orange"
  | "blue"
  | "lightgray"
  | "transparent"
  | "green"
  | "darkyellow"
  | "red";

export type Colors = {
  light: string;
  normal: string;
  dark: string;
};
export type Palette = {
  [key in ColorKey]: Colors;
};

export const palette: Palette = {
  /** Gray */
  gray: {
    light: "#5b5b5b",
    normal: "#3d3d3d",
    dark: "#1f1f1f",
  },
  // Orange
  orange: {
    light: "#ff6f4c",
    normal: "#ff5127",
    dark: "#f24d25",
  },
  // blue
  blue: {
    light: "#2681ec",
    normal: "#0070f3",
    dark: "#0056bc",
  },
  // lightgray
  lightgray: {
    light: "#f1f3f5",
    normal: "#e9ecef",
    dark: "#dee2e6",
  },
  // transparent
  transparent: {
    light: "#e3e3e3",
    normal: "none",
    dark: "#b3b3b3",
  },
  // green
  green: {
    light: "#38d9a9",
    normal: "#20c997",
    dark: "#12b886",
  },
  // darkyellow
  darkyellow: {
    light: "#f8bb57",
    normal: "#f5a623",
    dark: "#f39800",
  },
  // red
  red: {
    light: "#e55858",
    normal: "#e00",
    dark: "#be0000",
  },
};

export const brandColor = {
  lighter: "#008ece",
  light: "#0172b2",
  normal: "#014f97",
  dark: "#073686",
};

export default palette;
