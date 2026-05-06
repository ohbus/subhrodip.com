/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-bright": "#f6faff",
        "secondary-container": "#4d8efe",
        "inverse-primary": "#c1c1ff",
        "secondary": "#005ac1",
        "surface-container": "#eaeef4",
        "on-background": "#171c20",
        "primary-fixed-dim": "#c1c1ff",
        "on-tertiary": "#ffffff",
        "outline-variant": "#c7c4d7",
        "secondary-fixed": "#d8e2ff",
        "on-tertiary-fixed-variant": "#881e0f",
        "surface-variant": "#dee3e8",
        "tertiary-fixed-dim": "#ffb4a6",
        "surface-container-highest": "#dee3e8",
        "on-primary-container": "#9091ff",
        "surface-container-high": "#e4e9ee",
        "error-container": "#ffdad6",
        "on-secondary": "#ffffff",
        "on-tertiary-fixed": "#3f0300",
        "secondary-fixed-dim": "#adc6ff",
        "error": "#ba1a1a",
        "surface": "#f6faff",
        "on-secondary-container": "#00285c",
        "surface-tint": "#4b4bd4",
        "on-error-container": "#93000a",
        "primary-fixed": "#e1dfff",
        "on-primary-fixed": "#09006b",
        "on-primary": "#ffffff",
        "tertiary-container": "#6d0800",
        "on-secondary-fixed-variant": "#004494",
        "outline": "#777586",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#d6dae0",
        "on-error": "#ffffff",
        "tertiary": "#460300",
        "tertiary-fixed": "#ffdad4",
        "primary-container": "#1a0dab",
        "surface-container-low": "#f0f4fa",
        "background": "#f6faff",
        "on-tertiary-container": "#fc725a",
        "on-surface": "#171c20",
        "on-primary-fixed-variant": "#312ebc",
        "on-secondary-fixed": "#001a41",
        "inverse-on-surface": "#edf1f7",
        "inverse-surface": "#2c3135",
        "primary": "#0b0076",
        "on-surface-variant": "#464554"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "content-width": "652px",
        "grid-gap": "20px",
        "search-bar-padding": "12px 20px",
        "sidebar-width": "369px",
        "container-left-margin": "180px",
        "result-margin-bottom": "30px"
      },
      fontFamily: {
        "body-snippet": ["Inter"],
        "result-title": ["Plus Jakarta Sans"],
        "url-breadcrumb": ["Inter"],
        "search-input": ["Inter"],
        "stat-text": ["Inter"]
      },
      fontSize: {
        "body-snippet": ["14px", { "lineHeight": "1.58", "letterSpacing": "normal", "fontWeight": "400" }],
        "result-title": ["20px", { "lineHeight": "1.3", "letterSpacing": "normal", "fontWeight": "400" }],
        "url-breadcrumb": ["14px", { "lineHeight": "1.3", "letterSpacing": "normal", "fontWeight": "400" }],
        "search-input": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "stat-text": "14px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
