#!/bin/bash

cd "/Users/jason.e.smith/Documents/BOE/Learning Repo/PowerApps/SalesViewer/monorepov2"

# Remove any stale package content before rebuilding
rm -rf "solution-build/Controls"
rm -f "PCFComponentsSolution.zip"

# Create directories with the same naming pattern as the working solution
mkdir -p "solution-build/Controls/demo_Demo.SalesTable"
mkdir -p "solution-build/Controls/demo_Demo.SalesChart"
mkdir -p "solution-build/Controls/demo_Demo.SalesKPI"

# Copy files
cp "components/SalesTable/out/controls/bundle.js" "solution-build/Controls/demo_Demo.SalesTable/"
cp "components/SalesTable/out/controls/ControlManifest.xml" "solution-build/Controls/demo_Demo.SalesTable/"

cp "components/SalesChart/out/controls/bundle.js" "solution-build/Controls/demo_Demo.SalesChart/"
cp "components/SalesChart/out/controls/ControlManifest.xml" "solution-build/Controls/demo_Demo.SalesChart/"

cp "components/SalesKPI/out/controls/bundle.js" "solution-build/Controls/demo_Demo.SalesKPI/"
cp "components/SalesKPI/out/controls/ControlManifest.xml" "solution-build/Controls/demo_Demo.SalesKPI/"

# Create the ZIP file from scratch
cd solution-build
zip -r "../PCFComponentsSolution.zip" . -x "*.DS_Store"

echo "✓ Solution ZIP created: PCFComponentsSolution.zip"
