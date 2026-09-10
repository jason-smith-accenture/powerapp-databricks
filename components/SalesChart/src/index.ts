import { IInputs, IOutputs } from "../generated/ManifestTypes";
import { SalesChartView, ISalesChartProps } from "./SalesChart";
import * as React from "react";

export class SalesChart implements ComponentFramework.ReactControl<IInputs, IOutputs> {
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

        const props: ISalesChartProps = {
            data: context.parameters.salesData.raw ?? ""
        };

        return React.createElement(
            SalesChartView,
            props
        );
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // Cleanup if required
    }
}
