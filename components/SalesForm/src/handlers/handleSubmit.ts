import { SalesFormData } from "../SalesForm";
import { SalesFormErrors, validate } from "../validate";

type handleSubmitProps = {
  product: string;
  region: string;
  sales: string;
  saleDate: string;
  setErrors: React.Dispatch<React.SetStateAction<SalesFormErrors>>;
  onSubmit: (data: SalesFormData) => void;
};

export const handleSubmit = ({
  product,
  region,
  sales,
  saleDate,
  setErrors,
  onSubmit,
}: handleSubmitProps) => {
  const validationErrors = validate({ product, region, sales, saleDate });

  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  const formData: SalesFormData = {
    product: product.trim(),
    region: region.trim(),
    sales: Number(sales),
    sale_date: saleDate,
  };

  onSubmit(formData);
};
