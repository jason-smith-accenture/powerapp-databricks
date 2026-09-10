// Shared utilities for PCF component development

export interface SalesRecord {
    id: number;
    product: string;
    region: string;
    sales: number;
    sale_date?: string;
}

export function isSalesRecord(value: unknown): value is SalesRecord {
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

export function parseSalesData(data: string): SalesRecord[] {
    if (!data) {
        return [];
    }

    const parsed: unknown = JSON.parse(data) as unknown;

    if (!Array.isArray(parsed)) {
        return [];
    }

    return parsed.filter(isSalesRecord);
}
