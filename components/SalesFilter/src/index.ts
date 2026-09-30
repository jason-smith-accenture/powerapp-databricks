import * as React from "react";

import { IInputs, IOutputs } from "../generated/ManifestTypes";

import { Filter } from "./Filter";

import type { FilterValues } from "./types";

export class SalesFilter implements ComponentFramework.ReactControl<
  IInputs,
  IOutputs
> {
  private notifyOutputChanged: () => void;

  private filters: FilterValues = {};

  constructor() {
    this.notifyOutputChanged = () => {};
  }

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
  }

  public updateView(
    context: ComponentFramework.Context<IInputs>,
  ): React.ReactElement {
    return React.createElement(Filter, {
      fields: [
        {
          id: "bank",
          label: "Bank",
          type: "select",
          placeholder: "All banks",
          options: [
            {
              label: "Bank A",
              value: "Bank A",
            },
            {
              label: "Bank B",
              value: "Bank B",
            },
          ],
        },
        {
          id: "asset",
          label: "Asset",
          type: "select",
          placeholder: "All assets",
          options: [
            {
              label: "Mortgage",
              value: "Mortgage",
            },
            {
              label: "Savings",
              value: "Savings",
            },
            {
              label: "Credit Card",
              value: "Credit Card",
            },
          ],
        },
        {
          id: "dateFrom",
          label: "Submission date from",
          type: "date",
        },
        {
          id: "dateTo",
          label: "Submission date to",
          type: "date",
        },
      ],

      onChange: (filters) => {
        this.filters = filters;
      },

      onApply: (filters) => {
        this.filters = filters;
        this.notifyOutputChanged();
      },

      onClear: () => {
        this.filters = {};
        this.notifyOutputChanged();
      },
    });
  }

  public getOutputs(): IOutputs {
    return {
      filterData: JSON.stringify(this.filters),
    };
  }

  public destroy(): void {
    // Nothing to clean up.
  }
}
