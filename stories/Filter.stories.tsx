import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Filter } from "../components/SalesFilter/src/Filter";
import type { FilterValues } from "../components/SalesFilter/src/types";
const filterFields = [
  {
    id: "id",
    label: "ID",
    type: "text" as const,
    placeholder: "Enter ID",
  },
  {
    id: "bank",
    label: "Bank",
    type: "select" as const,
    placeholder: "All banks",
    options: [
      { label: "HSBC", value: "HSBC" },
      { label: "Lloyds Bank", value: "Lloyds Bank" },
      { label: "Barcleys", value: "Barcleys" },
    ],
  },
  {
    id: "asset",
    label: "Asset",
    type: "select" as const,
    placeholder: "All assets",
    options: [
      { label: "Mortgage", value: "Mortgage" },
      { label: "Savings", value: "Savings" },
      { label: "Personal Loan", value: "Personal Loan" },
    ],
  },
  { id: "date", label: "Submission Date", type: "date" as const },
];
const meta = {
  title: "Components/SalesFilter",
  component: Filter,
  parameters: { layout: "padded" },
  args: { fields: filterFields, showApplyButton: true, showClearButton: true },
} satisfies Meta<typeof Filter>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args) => {
    const [currentValues, setCurrentValues] = useState<FilterValues>({});
    const [appliedValues, setAppliedValues] = useState<FilterValues>({});
    const [clearCount, setClearCount] = useState(0);
    return (
      <>
        {" "}
        <Filter
          {...args}
          onChange={(values) => {
            setCurrentValues(values);
          }}
          onApply={(values) => {
            setAppliedValues(values);
          }}
          onClear={() => {
            setClearCount((count) => count + 1);
          }}
        />{" "}
        <div>
          {" "}
          <h3>Component Output</h3>{" "}
          <div>
            {" "}
            <strong>Current values:</strong>{" "}
            <pre> {JSON.stringify(currentValues, null, 2)} </pre>{" "}
          </div>{" "}
          <div>
            {" "}
            <strong>Applied values:</strong>{" "}
            <pre> {JSON.stringify(appliedValues, null, 2)} </pre>{" "}
          </div>{" "}
          <div>
            {" "}
            <strong>Clear events:</strong> {clearCount}{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  },
};
export const WithInitialValues: Story = {
  args: {
    initialValues: { bank: "HSBC", asset: "Mortgage", date: "2026-09-20" },
  },
  render: (args) => {
    const [currentValues, setCurrentValues] = useState<FilterValues>(
      args.initialValues ?? {},
    );
    const [appliedValues, setAppliedValues] = useState<FilterValues>({});
    return (
      <>
        {" "}
        <Filter
          {...args}
          onChange={(values) => {
            setCurrentValues(values);
          }}
          onApply={(values) => {
            setAppliedValues(values);
          }}
        />{" "}
        <div>
          {" "}
          <h3>Component Output</h3>{" "}
          <div>
            {" "}
            <strong>Current values:</strong>{" "}
            <pre> {JSON.stringify(currentValues, null, 2)} </pre>{" "}
          </div>{" "}
          <div>
            {" "}
            <strong>Applied values:</strong>{" "}
            <pre> {JSON.stringify(appliedValues, null, 2)} </pre>{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  },
};
