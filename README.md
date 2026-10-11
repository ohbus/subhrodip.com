# 🔍 Subhrodip's Portfolio

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

Welcome to the source code of my personal portfolio and professional background. This application is uniquely designed with a **"Search Engine" Identity System**, mimicking the familiar, clean, and highly functional layout of modern search engines to present my skills, projects, and experiences as "search results."

🌐 **Live Demo:** [subhrodip.com](https://subhrodip.com)

---

## ✨ Key Features

*   **Search Identity Design:** A minimalist, highly intuitive UI utilizing Google's Material Symbols and a strict, content-first layout.
*   **Modern Angular Architecture:** Built with the latest Angular featuring **Standalone Components**—eliminating `NgModules` for a cleaner, more maintainable codebase.
*   **Optimized Performance (Lazy Loading):** Content sections (SDE, DevOps, Education, Skills, Contact) are lazy-loaded via `loadComponent` in the router, ensuring lightning-fast initial load times.
*   **Responsive & Accessible:** Styled completely with **Tailwind CSS**, ensuring a perfect layout across mobile, tablet, and desktop devices without relying on heavy external UI component libraries.
*   **Automated CI/CD:** Fully integrated with **GitHub Actions** to automatically build and deploy the production-ready application to GitHub Pages upon every push to the `master` branch.
*   **Form Integration:** Serverless contact form functionality powered by Formspree.

---

## 🛠️ Technology Stack

*   **Framework:** [Angular](https://angular.dev/) (v21, standalone components)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Google Material Symbols](https://fonts.google.com/icons)
*   **Fonts:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & Inter
*   **Deployment:** GitHub Pages via GitHub Actions

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js installed (v20 LTS recommended).
*   [Node.js](https://nodejs.org/en/) (v20.x or higher)
*   npm (v10.x or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/ohbus/subhrodip.com.git
    cd subhrodip.com
    ```

2.  **Install dependencies**
    ```bash
    npm ci
    ```

3.  **Start the development server**
    ```bash
    npm start
    ```
    The application will automatically open or be available at `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

---

## 🏗️ Project Structure

The project follows a modular, feature-based architecture utilizing Angular's standalone components:

```text
src/
├── app/
│   ├── core/                # App shell, layout, and SEO services
│   ├── data/                # Localized content and redirect mappings
│   ├── features/            # Route-level standalone page components
│   ├── shared/              # Reusable UI components
│   ├── models/              # Shared content types
│   └── services/            # Application services
│   ├── app.routes.ts        # Lazy-loaded route definitions
│   └── app.ts               # Root component
├── styles.css               # Global Tailwind stylesheet
└── index.html
```

---

## ⚙️ Building for Production

To create a production build, run:
```bash
npm run build
```
This will compile the project into the `dist/subhrodip.com/browser` directory, optimizing the application for performance and speed.

---

## 🤖 CI/CD Pipeline

This repository includes GitHub Actions workflows that automate verification and deployment:
1.  **Pull Requests:** `.github/workflows/pr-check.yml` runs installation, tests with coverage, the production build, artifact checks, and browser smoke tests.
2.  **Master Pushes:** `.github/workflows/deploy.yml` repeats those checks and securely deploys the production artifact to GitHub Pages.

---

## 📫 Contact

**Subhrodip Mohanta**
*   Email: [hi@subhrodip.com](mailto:hi@subhrodip.com)
*   LinkedIn: [linkedin.com/in/ohbusm](https://www.linkedin.com/in/ohbusm/)
*   GitHub: [@ohbus](https://github.com/ohbus)

---
*Built with ❤️ and Angular.*
