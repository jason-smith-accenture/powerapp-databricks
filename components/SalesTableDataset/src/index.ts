import { IInputs, IOutputs } from "../generated/ManifestTypes";
import {
    SalesTableView,
    SalesRecord
} from "./SalesTable";
import { AppThemeProvider } from "../../../shared/theme";
import * as React from "react";

export class SalesTableDataset
    implements ComponentFramework.ReactControl<IInputs, IOutputs> {

    private notifyOutputChanged: () => void;

    constructor() {
        // Empty
    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(
        context: ComponentFramework.Context<IInputs>
    ): React.ReactElement {

        const dataset = context.parameters.salesData;

        const records: SalesRecord[] = Object.values(
            dataset.records
        ).map((record) => ({
            id: Number(record.getValue("id")),
            product: String(record.getValue("product")),
            region: String(record.getValue("region")),
            sales: Number(record.getValue("sales")),
            sale_date: record.getValue("sale_date")
                ? String(record.getValue("sale_date"))
                : undefined
        }));

        return React.createElement(
            AppThemeProvider,
            null,
            React.createElement(
                SalesTableView,
                {
                    records
                }
            )
        );
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // Cleanup if required
    }
}