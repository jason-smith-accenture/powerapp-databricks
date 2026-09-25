#!/bin/bash

cd "/Users/jason.e.smith/Documents/BOE/Learning Repo/PowerApps/SalesViewer/monorepov2"

# Remove any stale package content before rebuilding
rm -rf "solution-build/Controls"
rm -f "PCFComponentsSolution.zip"

# Create directories with the same naming pattern as the working solution
mkdir -p "solution-build/Controls/demo_Demo.SalesTable"
mkdir -p "solution-build/Controls/demo_Demo.SalesFilter"
mkdir -p "solution-build/Controls/demo_Demo.SalesForm"
mkdir -p "solution-build/Controls/demo_Demo.SalesTableDataset"

# Copy files
cp "components/SalesTable/out/controls/bundle.js" "solution-build/Controls/demo_Demo.SalesTable/"
cp "components/SalesTable/out/controls/ControlManifest.xml" "solution-build/Controls/demo_Demo.SalesTable/"

cp "components/SalesFilter/out/controls/bundle.js" "solution-build/Controls/demo_Demo.SalesFilter/"
cp "components/SalesFilter/out/controls/ControlManifest.xml" "solution-build/Controls/demo_Demo.SalesFilter/"
    
cp "components/SalesTableDataset/out/controls/bundle.js" "solution-build/Controls/demo_Demo.SalesTableDataset/"
cp "components/SalesTableDataset/out/controls/ControlManifest.xml" "solution-build/Controls/demo_Demo.SalesTableDataset/"

cp "components/SalesForm/out/controls/bundle.js" "solution-build/Controls/demo_Demo.SalesForm/"
cp "components/SalesForm/out/controls/ControlManifest.xml" "solution-build/Controls/demo_Demo.SalesForm/"

# Create the ZIP file from scratch
cd solution-build
zip -r "../PCFComponentsSolution.zip" . -x "*.DS_Store"

echo "✓ Solution ZIP created: PCFComponentsSolution.zip"
