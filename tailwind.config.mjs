/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          "Merriweather",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      colors: {
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.gray.900"),
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              textDecorationThickness: "1px",
              textDecorationColor: theme("colors.gray.300"),
              "&:hover": {
                textDecorationColor: theme("colors.gray.500"),
              },
            },
            strong: {
              color: theme("colors.gray.900"),
            },
            "ol > li::marker": {
              color: theme("colors.gray.500"),
            },
            "ul > li::marker": {
              color: theme("colors.gray.500"),
            },
            hr: {
              borderColor: theme("colors.gray.200"),
            },
            blockquote: {
              color: theme("colors.gray.700"),
              borderLeftColor: theme("colors.gray.200"),
              fontStyle: "italic",
            },
            h1: {
              color: theme("colors.gray.900"),
              fontWeight: "700",
              fontSize: "2.25rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h2: {
              color: theme("colors.gray.900"),
              fontWeight: "600",
              fontSize: "1.875rem",
              marginTop: "1.75rem",
              marginBottom: "0.75rem",
            },
            h3: {
              color: theme("colors.gray.900"),
              fontWeight: "600",
              fontSize: "1.5rem",
              marginTop: "1.5rem",
              marginBottom: "0.5rem",
            },
            h4: {
              color: theme("colors.gray.900"),
              fontWeight: "600",
              fontSize: "1.25rem",
              marginTop: "1.25rem",
              marginBottom: "0.5rem",
            },
            code: {
              color: theme("colors.gray.800"),
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "0.25rem",
              paddingRight: "0.25rem",
              paddingTop: "0.125rem",
              paddingBottom: "0.125rem",
              borderRadius: "0.25rem",
              fontSize: "0.875em",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: theme("colors.gray.900"),
              overflowX: "auto",
              fontSize: "0.875rem",
              lineHeight: "1.7",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              padding: "1rem",
              borderRadius: "0.375rem",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: theme("colors.gray.100"),
              fontSize: "inherit",
            },
            p: {
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
              lineHeight: "1.75",
            },
            ul: {
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
            },
            ol: {
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
            },
            li: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.gray.100"),
              textDecorationColor: theme("colors.gray.700"),
              "&:hover": {
                textDecorationColor: theme("colors.gray.500"),
              },
            },
            strong: {
              color: theme("colors.gray.100"),
            },
            "ol > li::marker": {
              color: theme("colors.gray.400"),
            },
            "ul > li::marker": {
              color: theme("colors.gray.400"),
            },
            hr: {
              borderColor: theme("colors.gray.800"),
            },
            blockquote: {
              color: theme("colors.gray.300"),
              borderLeftColor: theme("colors.gray.700"),
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            h4: {
              color: theme("colors.gray.100"),
            },
            code: {
              color: theme("colors.gray.100"),
              backgroundColor: theme("colors.gray.800"),
            },
            pre: {
              backgroundColor: theme("colors.gray.950"),
            },
            "pre code": {
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
