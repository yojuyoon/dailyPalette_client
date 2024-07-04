import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to get dynamic colors
export const convertProfileToColor = (name: string) => {
  const colors = [
    "#FF6402",
    "#E9A641",
    "#6CACE4",
    "#ECBAA8",
    "#FE5000",
    "#5D967A",
    "#2E8B57",
    "#5B68A7",
    "#2E4F58",
    "#ADD8E6",
    "#8A2BE2",
    "#808080",
    "#B3BCC6",
    "#D3D3D3",
    "#A52A2A",
    "#52768C",
    "#DFD1C3",
    "#F0E68C",
    "#FFFF00",
    "#475B74",
    "#F82C85",
    "#FAFFD6",
    "#FDB137",
    "#A2DCEE",
    "#7338AC",
    "#C9B6D7",
    "#24AFC1",
    "#E84476",
    "#FF9899",
    "#CCA152",
    "#ECC1A1",
  ];

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const nameLower = name.toLowerCase();
  const firstChar = nameLower.charAt(0);
  const charIndex = alphabet.indexOf(firstChar);
  const fromColorIndex = charIndex % colors.length;
  const toColorIndex = (fromColorIndex + 1) % colors.length;

  return { from: colors[fromColorIndex], to: colors[toColorIndex] };
};
