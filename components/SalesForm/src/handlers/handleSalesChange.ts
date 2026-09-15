import { SalesFormErrors } from "../validate";

type HandleSalesChangeProps = {
  event: React.ChangeEvent<HTMLInputElement>;
  setSales: React.Dispatch<React.SetStateAction<string>>;
  errors: SalesFormErrors;
  setErrors: React.Dispatch<React.SetStateAction<SalesFormErrors>>;
};

export const handleSalesChange = ({
  event,
  setSales,
  errors,
  setErrors,
}: HandleSalesChangeProps) => {
  const value = event.target.value;
  setSales(value);
  const numericValue = Number(value);

  if (
    errors.sales &&
    value.trim() &&
    !Number.isNaN(numericValue) &&
    numericValue > 0
  ) {
    setErrors((current) => ({
      ...current,
      sales: undefined,
    }));
  }
};
