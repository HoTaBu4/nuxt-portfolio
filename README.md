# Nuxt Portfolio

This is a portfolio project built with Vue.js and Nuxt.js, showcasing various projects and providing information about the portfolio owner.

## Project Structure

The project is organized as follows:

```
nuxt-portfolio
├── components          # Vue components for the application
│   ├── Header.vue     # Header component with site title and navigation
│   ├── Footer.vue     # Footer component with copyright and links
│   └── ProjectCard.vue # Component to display individual project details
├── layouts             # Layouts for the application
│   └── default.vue     # Default layout wrapping around pages
├── pages               # Pages of the application
│   ├── index.vue      # Main landing page
│   ├── about.vue      # About page for the portfolio owner
│   └── projects.vue    # Page listing all projects
├── composables         # Composable functions
│   └── useSiteMeta.ts  # Provides site metadata for SEO
├── plugins             # Plugins for the application
│   └── axios.ts        # Axios plugin for HTTP requests
├── store               # Vuex store for state management
│   └── index.ts        # Main store file
├── types               # TypeScript type definitions
│   └── index.d.ts      # Interfaces and types used in the project
├── content             # Content files
│   └── projects
│       └── project1.md # Markdown file for project details
├── assets              # Static assets
│   ├── styles
│   │   └── main.css    # Global CSS styles
│   └── fonts           # Custom font files
├── public              # Public files
│   └── robots.txt      # Instructions for web crawlers
├── tests               # Unit tests
│   └── unit
│       └── example.spec.ts # Unit tests for components/functions
├── nuxt.config.ts      # Nuxt.js configuration file
├── package.json        # npm configuration file
├── tsconfig.json       # TypeScript configuration file
├── .eslintrc.js        # ESLint configuration file
├── .prettierrc         # Prettier configuration file
└── README.md           # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd nuxt-portfolio
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Features

- Responsive design for various devices
- SEO-friendly with site metadata
- Dynamic project listing using components
- Easy to extend with additional projects and pages

## License

This project is licensed under the MIT License.