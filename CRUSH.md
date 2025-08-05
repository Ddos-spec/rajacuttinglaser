# CRUSH Agent Configuration

## Build/Lint/Test Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Astro CLI
npm run astro

# No specific lint/format commands configured in package.json
```

## Code Style Guidelines

### File Naming
- Page components: kebab-case.astro (e.g., jasa-laser-co2.astro)
- Other components: PascalCase.astro (e.g., BaseLayout.astro)

### Imports
- Relative imports for local files
- Components imported from `src/components/`
- Utilities imported from `src/utils/`

### Formatting
- Astro components with HTML-like structure
- Tailwind classes in class attributes
- TypeScript for type checking
- Double quotes for strings

### Types
- TypeScript used where appropriate
- Astro.props for component properties
- Type definitions in .ts files

### Naming Conventions
- Variables: camelCase
- Components: PascalCase
- Constants: UPPER_SNAKE_CASE
- Functions: camelCase

### Component Structure
- Default export for components
- Props defined with TypeScript interfaces
- Import statements at top
- Component logic before markup

### Error Handling
- No specific error handling patterns identified
- Basic Astro error boundaries

## Project Structure
- src/components: Shared components
- src/pages: Route components
- src/utils: Utility functions
- public/images: Image assets

## Note for Agents
This is an Astro.js project using Tailwind CSS. Components are written in .astro files with a mix of HTML, JavaScript/TypeScript, and component syntax. The project uses a component-based architecture with a focus on static site generation.