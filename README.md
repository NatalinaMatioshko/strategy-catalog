# Strategy Catalog Frontend

Frontend for the strategy catalog MVP.

This project is being built to display long-term strategic documents in a structured and удобний format: strategy → strategic goals → operational goals → tasks.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Project status

The project is in active MVP development.

Current focus:

- base frontend scaffold
- strategy detail page
- integration with backend API
- rendering hierarchical strategy structure

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build project

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project structure

```txt
src/
├─ components/
├─ pages/
├─ services/
├─ types/
├─ mocks/
├─ utils/
├─ App.tsx
├─ main.tsx
└─ index.css
```

## Main pages

- `HomePage` — entry page
- `StrategiesPage` — list of strategies
- `StrategyDetailPage` — full strategy structure page

## Data flow

Frontend is designed to work with:

- mock data during early development
- backend API for real strategy structure

Main expected response shape:

- strategy
- strategicGoals
- operationalGoals
- tasks

## Related documentation

- Backend API documentation — see Confluence
- Project notes and specifications — see Confluence / team chat

## Development notes

- Keep components small and reusable
- Keep business logic in `services/`
- Keep shared interfaces in `types/`
- Use `mocks/` for temporary local data
- Avoid large page components with mixed logic

## Team workflow

Before starting a new feature:

1. Pull the latest changes from the repository.
2. Create a separate branch for your task.
3. Implement the feature in small, focused commits.
4. Run lint and check that the project starts locally.
5. Open a pull request for review before merging.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```
