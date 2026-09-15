import { SalesFormErrors } from "../validate";

type handleSaleDateChangeProps = {
  event: React.ChangeEvent<HTMLInputElement>;
  setSaleDate: React.Dispatch<React.SetStateAction<string>>;
  errors: SalesFormErrors;
  setErrors: React.Dispatch<React.SetStateAction<SalesFormErrors>>;
};

export const handleSaleDateChange = ({
  event,
  setSaleDate,
  errors,
  setErrors,
}: handleSaleDateChangeProps) => {
  const value = event.target.value;

  setSaleDate(value);

  if (errors.sale_date && value && !Number.isNaN(Date.parse(value))) {
    setErrors((current) => ({
      ...current,
      sale_date: undefined,
    }));
  }
};
