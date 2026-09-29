import { SalesFormErrors } from "../validate";

type HandleRegionChangeProps = {
  event: React.ChangeEvent<HTMLInputElement>;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  errors: SalesFormErrors;
  setErrors: React.Dispatch<React.SetStateAction<SalesFormErrors>>;
};

export const handleRegionChange = ({
  event,
  setRegion,
  errors,
  setErrors,
}: HandleRegionChangeProps) => {
  const value = event.target.value;

  setRegion(value);

  if (errors.region && value.trim()) {
    setErrors((current) => ({
      ...current,
      region: undefined,
    }));
  }
};
