# Development Guidelines

## Project Structure

This is a monorepo using npm workspaces. Each component is independently buildable and deployable.

### Key Directories

- **components/** - Individual PCF components
  - **SalesTable/** - Table visualization component
  - **SalesChart/** - Chart visualization component  
  - **SalesKPI/** - KPI metrics component
- **shared/** - Shared types and utilities used across components

## Adding a New Component

1. Create component directory:
```bash
mkdir -p components/MyComponent/src
cd components/MyComponent
```

2. Copy template files from existing component (SalesTable):
```bash
# Copy ControlManifest.Input.xml, package.json, tsconfig.json
cp ../SalesTable/ControlManifest.Input.xml .
cp ../SalesTable/package.json .
cp ../SalesTable/tsconfig.json .
```

3. Update package.json with new component name:
```json
{
  "name": "@pcf/my-component",
  "version": "0.0.1"
}
```

4. Create component files in `src/`:
   - `index.ts` - Main control implementation
   - `MyComponent.tsx` - React component

5. Run from root:
```bash
npm install
npm run build:my-component
```

## Component Structure

Each component contains:

```
SalesTable/
├── ControlManifest.Input.xml      # PowerApps PCF manifest
├── package.json                    # Component dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
└── src/
    ├── index.ts                    # Main PCF control class
    └── SalesTable.tsx              # React component
```

## Building and Testing

### Build all components:
```bash
npm run build:all
```

### Build specific component:
```bash
npm run build:sales-table
```

### Development with watch mode:
```bash
npm run dev:sales-table
```

### Clean build artifacts:
```bash
npm run clean
```

## Dependency Management

- **Root-level** versions apply to all components
- Each component can have additional dependencies in its own `package.json`
- Shared utilities go in `shared/` package
- Use npm workspaces commands to manage dependencies:

```bash
# Add to root
npm install some-package

# Add to specific workspace
npm install some-package -w @pcf/sales-table
```

## TypeScript Configuration

- Root `tsconfig.json` - Base configuration for components
- Each component has its own `tsconfig.json` - Extends root config

## Tips

- Keep shared code in the `shared/` package to avoid duplication
- Each component should be independently deployable
- Use TypeScript strict mode for type safety
- Components can have different release cycles
- Document component-specific usage in component README files
