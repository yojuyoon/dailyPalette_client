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
        shareBtnFocus: "#C16C49",
        bgBeige: "rgba(255,255,255, 0.5)",
        btnPrimary: "#E87D60",
        darkGray: "#5B5B5B",
        loader1: "rgba(11, 93, 105, 0.9)",
        loader2: "#F5D698",
        loader3: "#C16C49",
        dimmer: "rgba(255,255,255, 0.85)",
        error: "#EE534F",
        textFocus: "#FF6402",
        random: {
          color1: "#FF6402",
          color2: "#E9A641",
          color3: "#6CACE4",
          color4: "#ECBAA8",
          color5: "#FE5000",
          color6: "#5D967A",
          color7: "#2E8B57",
          color8: "#5B68A7",
          color9: "#2E4F58",
          color10: "#ADD8E6",
          color11: "#8A2BE2",
          color12: "#808080",
          color13: "#B3BCC6",
          color14: "#D3D3D3",
          color15: "#A52A2A",
          color16: "#52768C",
          color17: "#DFD1C3",
          color18: "#F0E68C",
          color19: "#FFFF00",
          color20: "#475B74",
          color21: "#F82C85",
          color22: "#FAFFD6",
          color23: "#FDB137",
          color24: "#A2DCEE",
          color25: "#7338AC",
          color26: "#C9B6D7",
          color27: "#24AFC1",
          color28: "#E84476",
          color29: "#FF9899",
          color30: "#CCA152",
          color31: "#ECC1A1",
        },
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
