import * as React from "react";

export interface SalesRecord {
    id: number;
    product: string;
    region: string;
    sales: number;
    sale_date?: string;
}

export interface ISalesTableProps {
    data: string;
}

function isSalesRecord(value: unknown): value is SalesRecord {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const record = value as Record<string, unknown>;

    return (
        typeof record.id === "number" &&
        typeof record.product === "string" &&
        typeof record.region === "string" &&
        typeof record.sales === "number" &&
        (
            record.sale_date === undefined ||
            typeof record.sale_date === "string"
        )
    );
}

function parseSalesData(data: string): SalesRecord[] {
    if (!data) {
        return [];
    }

    const parsed: unknown = JSON.parse(data) as unknown;

    if (!Array.isArray(parsed)) {
        return [];
    }

    return parsed.filter(isSalesRecord);
}

export const SalesTableView: React.FC<ISalesTableProps> = ({ data }) => {
    let records: SalesRecord[] = [];

    try {
        records = parseSalesData(data);
    } catch {
        return (
            <div style={{ padding: "16px" }}>
                Invalid sales data.
            </div>
        );
    }

    if (!records.length) {
        return (
            <div style={{ padding: "16px" }}>
                No sales data available.
            </div>
        );
    }

    return (
        <div
            style={{
                width: "100%",
                overflowX: "auto"
            }}
        >
            <h2>Sales Dashboard</h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Region</th>
                        <th>Sales</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {records.map((record) => (
                        <tr key={record.id}>
                            <td>{record.id}</td>
                            <td>{record.product}</td>
                            <td>{record.region}</td>
                            <td>${record.sales.toFixed(2)}</td>
                            <td>{record.sale_date || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
