# Azure PowerApps PCF Monorepo

A multi-component monorepo for PowerApps PCF (Power Apps Component Framework) components using npm workspaces.

## Project Structure

```
azure-powerapps-pcf/
├── components/
│   ├── SalesTable/           # Sales data table component
│   ├── SalesChart/           # Sales chart visualization component
│   └── SalesKPI/             # Sales KPI metric component
├── shared/                   # Shared types and utilities
├── package.json              # Root workspace configuration
├── tsconfig.json             # TypeScript configuration
└── README.md
```

## Setup

### Prerequisites
- Node.js 14+ and npm 7+
- Power Platform CLI (`pac`) installed separately from Microsoft (not via npm)

```bash
# Install dependencies for all workspaces
npm install

# Verify installation
npm list --workspaces
```

## Building Components

### Build All Components
```bash
npm run build:all
```

### Build and Package Solution (One Command)
```bash
npm run package
```
This builds all components and creates `PCFComponentsSolution.zip` ready for Power Apps import.

### Build Individual Components
```bash
npm run build:sales-table
npm run build:sales-chart
npm run build:sales-kpi
```

### Watch Mode (Development)
```bash
npm run dev:sales-table
Root level commands:
- `npm run build:all` - Build all components
- `npm run package` - Build all components and create solution ZIP
- `npm run clean` - Remove build artifacts
- `npm run lint` - Run ESLint
- `npm run test` - Run tests (Jest)
- `npm run dev:sales-table` - Development watch mode for SalesTable
- `npm run dev:sales-chart` - Development watch mode for SalesChart
- `npm run dev:sales-kpi` - Development watch mode for SalesKPI

Individual workspace commands (navigate to component directory):
- `npm run build` - Build the component
- `npm run clean` - Remove build artifacts
- `npm run rebuild` - Clean and rebuild
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

All workspaces support these commands:
- `npm run build` - Build the component
- `npm run clean` - Remove build artifacts
- `npm run lint` - Run ESLint
- `npm run test` - Run tests (Jest)
- `npm run dev` - Watch mode for development

## Adding a New Component

1. Create a new folder under `components/`:
```bash
mkdir components/MyComponent
cd components/MyComponent
```

2. Copy the structure from an existing component (e.g., SalesTable)

3. Update `package.json` with your component name:
```json
{
  "name": "@pcf/my-component",
  "version": "0.0.1",
  ...
}
```

4. Add your component files to `src/`

5. The workspace will automatically detect it (npm 7+)

## Sharing Code

Place shared types, utilities, and helpers in the `shared/` package:

```typescript
// shared/index.d.ts
export interface SalesRecord { ... }
export function parseSalesData(data: string): SalesRecord[];

// components/SalesTable/src/index.ts
import { SalesRecord, parseSalesData } from "@pcf/shared";
```

## Individual Component Development

Navigate to a specific component and work on it independently:

```bash
cd components/SalesTable
npm run dev
```
 to Power Apps

### Creating and Updating the Solution Package

The solution package is managed with a single command:

```bash
# Build all components and create/update the solution ZIP
npm run package
```

This creates `PCFComponentsSolution.zip` which contains all three components in the Power Apps solution format.

### Importing into Power Apps

1. Go to your Power Apps environment
2. Navigate to **Solutions**
3. Click **Imp5.8.3
- pcf-scripts: 1.51.1 (Official Microsoft PCF build tool)olution**
4. Select `PCFComponentsSolution.zip`
5. Follow the import wizard
6. Publish customizations

### Updating the Solution

After making changes to any component:

```bash
# Edit component source files (e.g., components/SalesTable/src/SalesTable.tsx)
# Then run:
npm run package

# This automatically:
# 1. Rebuilds all components
# 2. Updates the solution ZIP with the latest changes
```

The updated `PCFComponentsSolution.zip` is ready to reimport.

## Solution Package Structure

```
PCFComponentsSolution.zip
├── [Content_Types].xml
├── solution.xml
├── customizations.xml
└── Controls/
    ├── dev_SalesTable/
    │   ├── bundle.js
    │   └── ControlManifest.xml
    ├── dev_SalesChart/
    │   ├── bundle.js
    │   └── ControlManifest.xml
    └── dev_SalesKPI/
        ├── bundle.js
        └── ControlManifest.xml
```

## Deployment

Each component can be built and packaged independently:

```bash
npm run build:sales-table
# Output will be in components/SalesTable/out/
```

Package the built component for Power Apps using PowerApps CLI or Solution Package Manager.

## Dependencies

All components share React and TypeScript versions defined at the root level. This ensures consistency across the monorepo.

Current versions:
- React: 16.14.0
- TypeScript: 4.9.0

## Notes

- Each component is independently buildable and deployable
- Components can have different release cycles and versions
- Shared code in the `shared/` package is versioned separately
- Use npm workspace commands for bulk operations across all components
