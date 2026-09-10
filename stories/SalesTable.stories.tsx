import type { Meta, StoryObj } from "@storybook/react";
import { SalesTableView } from "../components/SalesTable/src/SalesTable";

const sampleSalesData = JSON.stringify([
  {
    id: 1,
    product: "Laptop",
    region: "North",
    sales: 1250.5,
    sale_date: "2026-09-01",
  },
  {
    id: 2,
    product: "Monitor",
    region: "South",
    sales: 850.0,
    sale_date: "2026-09-02",
  },
  {
    id: 3,
    product: "Keyboard",
    region: "East",
    sales: 125.75,
    sale_date: "2026-09-03",
  },
  {
    id: 4,
    product: "Mouse",
    region: "West",
    sales: 75.25,
    sale_date: "2026-09-04",
  },
]);

const meta = {
  title: "PCF/SalesTable",
  component: SalesTableView,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    data: {
      control: "text",
      description: "Sales records as a JSON string",
    },
  },
} satisfies Meta<typeof SalesTableView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: sampleSalesData,
  },
};

export const Empty: Story = {
  args: {
    data: "[]",
  },
};

export const InvalidData: Story = {
  args: {
    data: "{ invalid json }",
  },
};

export const MissingDate: Story = {
  args: {
    data: JSON.stringify([
      {
        id: 1,
        product: "Laptop",
        region: "North",
        sales: 1250.5,
      },
    ]),
  },
};
