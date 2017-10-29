
export const colors = {
  white: "#fff",
  tango: "#e2492f",
  mimosa: "#efc050",
  turquoise: "#33b4b0",
  gray: "#f2f2f2",
  midGray: "#A2ABB5",
  agate: "#b4b5aa",
  shale: "#67696c",
}

export const theme = {

  body: colors.shale,
  background: colors.white,
  headings: colors.mimosa,

  navigator: {
    background: colors.gray,
    color: colors.shale,
  },
}


// this could be more robust, but tmw right now
const families = [
  "Share Tech Mono",
  "Roboto Slab",
];

export const Font = () => (
  <link href={`https://fonts.googleapis.com/css?family=${families.join("|").replace(/ /gi, "+")}`} rel="stylesheet" />
);

export const typography = {
  font: {
    size: "18px",
    lineHeight: "1.4em",
  },
  families,
  body: families.join(", "),
  header: families[1],
}