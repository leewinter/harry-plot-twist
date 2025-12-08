# harry-plot-twist

Comics and stuff - A VitePress-powered static site for comic content.

## About

This is a static website built with [VitePress](https://vitepress.dev/) for hosting markdown-based comic content. The site is automatically deployed to GitHub Pages via GitHub Actions.

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run docs:dev
```

The site will be available at `http://localhost:5173`

### Building

Build the static site:
```bash
npm run docs:build
```

Preview the built site:
```bash
npm run docs:preview
```

## Adding Content

Content is located in the `docs/` directory. All files are written in Markdown:

- `docs/index.md` - Home page
- `docs/comics.md` - Comics section
- `docs/latest.md` - Latest updates

To add new pages:
1. Create a new `.md` file in the `docs/` directory
2. Update the navigation in `docs/.vitepress/config.mjs`

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow is defined in `.github/workflows/deploy.yml`.

### GitHub Pages Setup

Make sure GitHub Pages is enabled in your repository settings:
1. Go to Settings → Pages
2. Set Source to "GitHub Actions"

## License

MIT
