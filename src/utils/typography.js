import Typography from "typography"

const colorScheme = {
  black: "#000000",
  white: "#ffffff",
  darkGray: "#494949",
  lightGray: "#7C7A7A",
  accent: "#FF5D73",
}

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 2,
  bodyWeight: 400,
  boldWeight: 700,
  headerFontFamily: ["Source Code Pro", "monospace"],
  headerColor: colorScheme.darkGray,
  bodyFontFamily: ["Source Code Pro", "monospace"],
  bodyColor: colorScheme.darkGray,
  overrideStyles: () => {
    return {
      a: {
        color: colorScheme.accent,
      },
    }
  },
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
