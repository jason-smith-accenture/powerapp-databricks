import { IInputs, IOutputs } from "../generated/ManifestTypes";import { SalesKPIView, ISalesKPIProps } from "./SalesKPI";
import * as React from "react";

export class SalesKPI implements ComponentFramework.ReactControl<IInputs, IOutputs> {
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

        const props: ISalesKPIProps = {
            data: context.parameters.salesData.raw ?? ""
        };

        return React.createElement(
            SalesKPIView,
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
