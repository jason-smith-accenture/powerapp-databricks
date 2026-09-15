import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { SalesForm } from "../components/SalesForm/src/SalesForm";
import React from "react";

const meta: Meta<typeof SalesForm> = {
  title: "PCF/SalesForm",
  component: SalesForm,

  parameters: {
    layout: "padded",
  },

  argTypes: {
    onSubmit: {
      description: "Called when the form is submitted",
    },

    initialData: {
      description: "Optional data used to pre-populate the form",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "1200px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SalesForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      console.log("Sales submitted:", data);
    },
  },
};

export const EmptyForm: Story = {
  args: {
    initialData: {},

    onSubmit: (data) => {
      console.log("Sales submitted:", data);
    },
  },
};

export const FilledForm: Story = {
  args: {
    initialData: {
      product: "Laptop",
      region: "UK",
      sales: 1200,
      sale_date: "2026-09-15",
    },

    onSubmit: (data) => {
      console.log("Sales submitted:", data);
    },
  },
};

export const ValidationErrors: Story = {
  args: {
    initialData: {},

    onSubmit: (data) => {
      console.log("Sales submitted:", data);
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = await canvas.findByRole("button", {
      name: "Add Sale",
    });

    await userEvent.click(submitButton);
  },
};

export const PartialData: Story = {
  args: {
    initialData: {
      product: "Laptop",
      sales: 1200,
    },

    onSubmit: (data) => {
      console.log("Sales submitted:", data);
    },
  },
};