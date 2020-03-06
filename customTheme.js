import { nightOwl } from "@code-surfer/themes";

const customTheme = {
  styles: {
    CodeSurfer: {
      ...nightOwl.styles.CodeSurfer,
      pre: {
        backgroundColor: "background",
      },
      code: {
        backgroundColor: "background",
      },
      title: {
        backgroundColor: "background",
        color: "text",
      },
    },
    ol: {
      lineHeight: "1.2em",
    },
    ul: {
      lineHeight: "1.2em",
    },
  },
  colors: {
    text: "white",
    background: "#1B2A54",
  },
  fonts: {
    heading: "Open Sans",
    body: "Roboto",
  },
  googleFont:
    "https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap",
};

export default customTheme;
