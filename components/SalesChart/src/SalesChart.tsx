import * as React from "react";

export interface ISalesChartProps {
    data: string;
}

export const SalesChartView: React.FC<ISalesChartProps> = ({ data }) => {
    return (
        <div style={{ padding: "16px" }}>
            <h2>Sales Chart</h2>
            <p>Chart component coming soon...</p>
            <p>Data: {data.substring(0, 100)}...</p>
        </div>
    );
};
