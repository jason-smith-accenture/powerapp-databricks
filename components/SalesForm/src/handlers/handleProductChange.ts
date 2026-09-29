import { SalesFormErrors } from "../validate";

type handleProductChangeProps = {
  event: React.ChangeEvent<HTMLInputElement>;
  setProduct: React.Dispatch<React.SetStateAction<string>>;
  errors: SalesFormErrors;
  setErrors: React.Dispatch<React.SetStateAction<SalesFormErrors>>;
};

export const handleProductChange = ({
  event,
  setProduct,
  errors,
  setErrors,
}: handleProductChangeProps) => {
  const value = event.target.value;

  setProduct(value);

  if (errors.product && value.trim()) {
    setErrors((current) => ({
      ...current,
      product: undefined,
    }));
  }
};
