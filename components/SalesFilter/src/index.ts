import * as React from "react";

import {
  IInputs,
  IOutputs,
} from "../generated/ManifestTypes";

import {
  Filter,
} from "./Filter";

import type {
  FilterValues,
} from "./types";

export class SalesFilter
  implements ComponentFramework.ReactControl<IInputs, IOutputs>
{
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
          id: "product",
          label: "Product",
          type: "select",
          placeholder: "All products",
          options: [
            {
              label: "Mortgage",
              value: "mortgage",
            },
            {
              label: "Savings",
              value: "savings",
            },
            {
              label: "Credit Card",
              value: "credit-card",
            },
          ],
        },
        {
          id: "region",
          label: "Region",
          type: "select",
          placeholder: "All regions",
          options: [
            {
              label: "North",
              value: "north",
            },
            {
              label: "South",
              value: "south",
            },
            {
              label: "East",
              value: "east",
            },
            {
              label: "West",
              value: "west",
            },
          ],
        },
        {
          id: "dateFrom",
          label: "From",
          type: "date",
        },
        {
          id: "dateTo",
          label: "To",
          type: "date",
        },
      ],

      onChange: (filters) => {
        this.filters = filters;
        this.notifyOutputChanged();
      },
    });
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    // Nothing to clean up.
  }
}