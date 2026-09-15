import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import {
  SalesTableView,
  SalesRecord,
} from "./SalesTable";

describe("SalesTableView", () => {
  it("renders the Sales Dashboard title", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1200,
        sale_date: "2026-09-15",
      },
    ];

    render(<SalesTableView records={records} />);

    expect(
      screen.getByRole("heading", {
        name: "Sales Dashboard",
      })
    ).toBeInTheDocument();
  });

  it("displays the empty state when there are no records", () => {
    render(<SalesTableView records={[]} />);

    expect(
      screen.getByText("No sales data available.")
    ).toBeInTheDocument();
  });

  it("does not render the sales table when there are no records", () => {
    render(<SalesTableView records={[]} />);

    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });

  it("renders the table when records are provided", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1200,
        sale_date: "2026-09-15",
      },
    ];

    render(<SalesTableView records={records} />);

    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("renders all table headers", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1200,
        sale_date: "2026-09-15",
      },
    ];

    render(<SalesTableView records={records} />);

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText("Region")).toBeInTheDocument();
    expect(screen.getByText("Sales")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
  });

  it("renders the record ID", () => {
    const records: SalesRecord[] = [
      {
        id: 42,
        product: "Laptop",
        region: "UK",
        sales: 1200,
        sale_date: "2026-09-15",
      },
    ];

    render(<SalesTableView records={records} />);

    expect(screen.getByText("42")).toBeInTheDocument();
  });

  it("renders the product", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1200,
        sale_date: "2026-09-15",
      },
    ];

    render(<SalesTableView records={records} />);

    expect(screen.getByText("Laptop")).toBeInTheDocument();
  });

  it("renders the region", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1200,
        sale_date: "2026-09-15",
      },
    ];

    render(<SalesTableView records={records} />);

    expect(screen.getByText("UK")).toBeInTheDocument();
  });

  it("formats the sales value to two decimal places", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1200,
        sale_date: "2026-09-15",
      },
    ];

    render(<SalesTableView records={records} />);

    expect(screen.getByText("$1200.00")).toBeInTheDocument();
  });

  it("formats decimal sales values to two decimal places", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1234.5,
        sale_date: "2026-09-15",
      },
    ];

    render(<SalesTableView records={records} />);

    expect(screen.getByText("$1234.50")).toBeInTheDocument();
  });

  it("renders the sale date", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1200,
        sale_date: "2026-09-15",
      },
    ];

    render(<SalesTableView records={records} />);

    expect(screen.getByText("2026-09-15")).toBeInTheDocument();
  });

  it("renders N/A when the sale date is missing", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1200,
      },
    ];

    render(<SalesTableView records={records} />);

    expect(screen.getByText("N/A")).toBeInTheDocument();
  });

  it("renders multiple sales records", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1200,
        sale_date: "2026-09-15",
      },
      {
        id: 2,
        product: "Monitor",
        region: "US",
        sales: 850.5,
        sale_date: "2026-09-16",
      },
      {
        id: 3,
        product: "Keyboard",
        region: "EU",
        sales: 125,
        sale_date: "2026-09-17",
      },
    ];

    render(<SalesTableView records={records} />);

    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText("Monitor")).toBeInTheDocument();
    expect(screen.getByText("Keyboard")).toBeInTheDocument();

    expect(screen.getByText("UK")).toBeInTheDocument();
    expect(screen.getByText("US")).toBeInTheDocument();
    expect(screen.getByText("EU")).toBeInTheDocument();

    expect(screen.getByText("$1200.00")).toBeInTheDocument();
    expect(screen.getByText("$850.50")).toBeInTheDocument();
    expect(screen.getByText("$125.00")).toBeInTheDocument();
  });

  it("renders the correct number of table rows", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1200,
        sale_date: "2026-09-15",
      },
      {
        id: 2,
        product: "Monitor",
        region: "US",
        sales: 850,
        sale_date: "2026-09-16",
      },
      {
        id: 3,
        product: "Keyboard",
        region: "EU",
        sales: 125,
        sale_date: "2026-09-17",
      },
    ];

    render(<SalesTableView records={records} />);

    const rows = screen.getAllByRole("row");

    // One header row + three data rows
    expect(rows).toHaveLength(4);
  });

  it("renders N/A for multiple records with missing dates", () => {
    const records: SalesRecord[] = [
      {
        id: 1,
        product: "Laptop",
        region: "UK",
        sales: 1200,
      },
      {
        id: 2,
        product: "Monitor",
        region: "US",
        sales: 850,
      },
    ];

    render(<SalesTableView records={records} />);

    expect(screen.getAllByText("N/A")).toHaveLength(2);
  });
});