import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";

export interface SalesRecord {
  id: number;
  bank: string;
  asset: string;
  value: number;
  submission_date_from: string;
  submission_date_to: string;
}

export interface ISalesTableProps {
  data: string;
}

export const SalesTableView: React.FC<ISalesTableProps> = ({ data }) => {
  if (!data) {
    return <div>No data available.</div>;
  }

  let records: SalesRecord[];

  try {
    records = JSON.parse(data);
  } catch {
    return <div>Invalid sales data.</div>;
  }

  if (!Array.isArray(records) || records.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Bank</TableHeaderCell>
          <TableHeaderCell>Asset</TableHeaderCell>
          <TableHeaderCell>Value</TableHeaderCell>
          <TableHeaderCell>Submission date from</TableHeaderCell>
          <TableHeaderCell>Submission date to</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {records.map((record) => (
          <TableRow key={record.id}>
            <TableCell>{record.id}</TableCell>

            <TableCell>{record.bank}</TableCell>

            <TableCell>{record.asset}</TableCell>

            <TableCell>{record.value.toFixed(2)}</TableCell>

            <TableCell>{record.submission_date_from || "N/A"}</TableCell>

            <TableCell>{record.submission_date_to || "N/A"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
