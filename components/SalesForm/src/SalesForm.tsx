import * as React from "react";
import { Button, Field, Input } from "@fluentui/react-components";
import { useStyles } from "./styles";
import { SalesFormErrors } from "./validate";
import { handleSubmit } from "./handlers/handleSubmit";
import { handleProductChange } from "./handlers/handleProductChange";
import { handleRegionChange } from "./handlers/handleRegionChange";
import { handleSaleDateChange } from "./handlers/handleSaleDateChange";
import { handleSalesChange } from "./handlers/handleSalesChange";

export interface SalesFormData {
  product: string;
  region: string;
  sales: number;
  sale_date: string;
}

export interface ISalesFormProps {
  onSubmit: (data: SalesFormData) => void;
  initialData?: Partial<SalesFormData>;
}

export const SalesForm: React.FC<ISalesFormProps> = ({
  onSubmit,
  initialData,
}) => {
  const styles = useStyles();
  const [product, setProduct] = React.useState(initialData?.product ?? "");
  const [region, setRegion] = React.useState(initialData?.region ?? "");
  const [sales, setSales] = React.useState(
    initialData?.sales?.toString() ?? "",
  );
  const [saleDate, setSaleDate] = React.useState(initialData?.sale_date ?? "");
  const [errors, setErrors] = React.useState<SalesFormErrors>({});

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Sales Form</h2>
      <Field
        className={styles.field}
        label="Product"
        required
        validationState={errors.product ? "error" : "none"}
        validationMessage={errors.product}
      >
        <Input
          value={product}
          onChange={(event) =>
            handleProductChange({
              event,
              setProduct,
              errors,
              setErrors,
            })
          }
          placeholder="e.g. Laptop"
        />
      </Field>
      <Field
        className={styles.field}
        label="Region"
        required
        validationState={errors.region ? "error" : "none"}
        validationMessage={errors.region}
      >
        <Input
          value={region}
          onChange={(event) =>
            handleRegionChange({
              event,
              setRegion,
              errors,
              setErrors,
            })
          }
          placeholder="e.g. UK"
        />
      </Field>
      <Field
        className={styles.field}
        label="Sales"
        required
        validationState={errors.sales ? "error" : "none"}
        validationMessage={errors.sales}
      >
        <Input
          type="number"
          value={sales}
          onChange={(event) =>
            handleSalesChange({
              event,
              setSales,
              errors,
              setErrors,
            })
          }
          placeholder="e.g. 1200"
        />
      </Field>
      <Field
        className={styles.field}
        label="Sale Date"
        required
        validationState={errors.sale_date ? "error" : "none"}
        validationMessage={errors.sale_date}
      >
        <Input
          type="date"
          value={saleDate}
          onChange={(event) =>
            handleSaleDateChange({
              event,
              setSaleDate,
              errors,
              setErrors,
            })
          }
        />
      </Field>
      <Button
        appearance="primary"
        className={styles.submitButton}
        onClick={() =>
          handleSubmit({
            product,
            region,
            sales,
            saleDate,
            setErrors,
            onSubmit,
          })
        }
      >
        Add Sale
      </Button>
    </div>
  );
};
