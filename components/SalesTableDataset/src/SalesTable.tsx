import * as React from "react";
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "@fluentui/react-components";
import { useStyles } from "./styles";

export interface SalesRecord {
  id: number;
  product: string;
  region: string;
  sales: number;
  sale_date?: string;
}

export interface ISalesTableProps {
  records: SalesRecord[];
}

export const SalesTableView: React.FC<ISalesTableProps> = ({ records }) => {
  const styles = useStyles();

  try {
  } catch {
    return <div style={{ padding: "16px" }}>Invalid sales data.</div>;
  }

  if (!records.length) {
    return <div style={{ padding: "16px" }}>No sales data available.</div>;
  }

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Sales Dashboard</h2>

      <div className={styles.tableContainer}>
        <Table className={styles.table}>
          <TableHeader>
            <TableRow>
              <TableHeaderCell className={styles.headerCell}>
                ID
              </TableHeaderCell>

              <TableHeaderCell className={styles.headerCell}>
                Product
              </TableHeaderCell>

              <TableHeaderCell className={styles.headerCell}>
                Region
              </TableHeaderCell>

              <TableHeaderCell className={styles.headerCell}>
                Sales
              </TableHeaderCell>

              <TableHeaderCell className={styles.headerCell}>
                Date
              </TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell className={styles.cell}>{record.id}</TableCell>

                <TableCell className={styles.cell}>{record.product}</TableCell>

                <TableCell className={styles.cell}>{record.region}</TableCell>

                <TableCell className={styles.cell}>
                  ${record.sales.toFixed(2)}
                </TableCell>

                <TableCell className={styles.cell}>
                  {record.sale_date || "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
