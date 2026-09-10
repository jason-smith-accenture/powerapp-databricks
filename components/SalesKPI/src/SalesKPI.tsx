import * as React from "react";

export interface ISalesKPIProps {
    data: string;
}

export const SalesKPIView: React.FC<ISalesKPIProps> = ({ data }) => {
    return (
        <div style={{ padding: "16px" }}>
            <h2>Sales KPI</h2>
            <p>KPI metrics component coming soon...</p>
            <p>Data: {data.substring(0, 100)}...</p>
        </div>
    );
};
