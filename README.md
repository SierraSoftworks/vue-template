# vue-template

**An ultra-lightweight Vue web application template**

This template provides a small, fast starting point for Vue applications. It
uses Vite for development and production builds without Babel or Webpack.

## Features

- TypeScript 7
- Vue 3
- Element Plus
- Pinia
- Vue Router
- Vite
- Builds a Docker container

## Development

```bash
npm install
npm run dev
```

Create an optimized production build with `npm run build`, or preview it
locally with `npm run preview`.

## Example structure

- `src/api` contains a typed API client, response handling, and a health-check
  endpoint example.
- `src/components` contains reusable Vue components, including an API status
  component which demonstrates how views, Pinia, and the API client fit
  together. Element Plus is registered globally, so its components are
  available in templates without local imports.
- `src/views` contains the routed pages which compose those components.
