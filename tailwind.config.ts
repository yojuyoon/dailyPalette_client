import type { Config } from "tailwindcss";

const spacing = (): Record<number, string> => {
  const baseFontSize = 16; // 1rem = 16px
  const maxValueInPx = 800; // Maximum value in pixels
  const remValues: Record<number, string> = {};

  for (let pxValue = 0; pxValue <= maxValueInPx; pxValue++) {
    const remValue = pxValue / baseFontSize;
    const clampedRemValue = Math.max(
      0,
      Math.min(remValue, maxValueInPx / baseFontSize)
    );
    remValues[pxValue] = `${clampedRemValue}rem`;
  }

  return remValues;
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        questrial: ["Questrial", "sans-serif"],
        spaceGrotes: ["Space Grotesk", "sans-serif"],
      },
      width: {
        maxWidth: "1280px",
      },
      height: {
        "100svh": `calc(100svh - 60px)`,
      },
      spacing: spacing(),
      colors: {
        bgPrimary: "#F9ECE0",
        bgColor1: "#FE5000",
        bgColor2: "#ECBAA8",
        bgColor3: "#6CACE4",
        borderBlack: "#1F1E1E",
        shareBtn: "#E7A23B",
        bgBeige: "rgba(255,255,255, 0.5)",
        btnPrimary: "#E87D60",
        darkGray: "#5B5B5B",
        loader1: "rgba(11, 93, 105, 0.9)",
        loader2: "#F5D698",
        loader3: "#C16C49",
        dimmer: "rgba(255,255,255, 0.85)",
        error: "#EE534F",
      },
    },
    keyframes: {
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
      resizingBottom: {
        "0%, 100%": { transform: "scaleY(120%)" },
        "50%": { transform: "scaleY(100%)" },
      },
      resizingTop: {
        "0%, 100%": { transform: "scaleY(80%)" },
        "50%": { transform: "scaleY(100%)" },
      },
      resizingBottomSmall: {
        "0%, 100%": { transform: "scaleY(140%)" },
        "50%": { transform: "scaleY(100%)" },
      },

      resizingLeft: {
        "0%, 100%": { transform: "scaleX(80%)" },
        "50%": { transform: "scaleX(145%)" },
      },
      resizingRight: {
        "0%, 100%": { transform: "scaleX(120%)" },
        "50%": { transform: "scaleX(70%)" },
      },
      resizingLeftSmall: {
        "0%, 100%": { transform: "scaleX(117%)" },
        "50%": { transform: "scaleX(65%)" },
      },
      "inner-circles-loader": {
        "0%, 100%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      resizingBottom: "resizingBottom 6s ease-in-out infinite",
      resizingBottomSmall: "resizingBottomSmall 6s ease-in-out infinite",
      resizingTop: "resizingTop 6s ease-in-out infinite",

      bounce: "bounce 2s ease-in-out infinite",

      resizingLeft: "resizingLeft 6s ease-in-out infinite",
      resizingLeftSmall: "resizingLeftSmall 6s ease-in-out infinite",
      resizingRight: "resizingRight 6s ease-in-out infinite",

      beforeInnerCircle: "inner-circles-loader 3s infinite",
      afterInnerCircle: "inner-circles-loader 3s 0.2s reverse infinite",
    },
  },
  plugins: [],
};
export default config;
