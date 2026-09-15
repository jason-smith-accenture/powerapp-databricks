import { IInputs, IOutputs } from "../generated/ManifestTypes";
import { SalesForm, SalesFormData } from "./SalesForm";
import { AppThemeProvider } from "../../../shared/theme";
import * as React from "react";

export class SalesFormControl
  implements ComponentFramework.ReactControl<IInputs, IOutputs>
{
  private notifyOutputChanged: () => void;
  private submittedData = "";

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
    const props = {
      onSubmit: (data: SalesFormData) => {
        this.submittedData = JSON.stringify(data);
        this.notifyOutputChanged();
      },
    };

    return React.createElement(
      AppThemeProvider,
      null,
      React.createElement(
        SalesForm,
        props
      )
    );
  }

  public getOutputs(): IOutputs {
    return {
      submittedData: this.submittedData,
    };
  }

  public destroy(): void {
    // Cleanup if required
  }
}