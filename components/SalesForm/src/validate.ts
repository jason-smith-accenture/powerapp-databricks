export interface SalesFormErrors {
  product?: string;
  region?: string;
  sales?: string;
  sale_date?: string;
}

type validateProps = {
  product: string;
  region: string;
  sales: string;
  saleDate: string;
};

export const validate = ({ product, region, sales, saleDate }: validateProps): SalesFormErrors => {
  const validationErrors: SalesFormErrors = {};

  if (!product.trim()) {
    validationErrors.product = "Product is required";
  }

  if (!region.trim()) {
    validationErrors.region = "Region is required";
  }

  if (!sales.trim()) {
    validationErrors.sales = "Sales amount is required";
  } else if (Number.isNaN(Number(sales))) {
    validationErrors.sales = "Sales must be a valid number";
  } else if (Number(sales) <= 0) {
    validationErrors.sales = "Sales must be greater than 0";
  }

  if (!saleDate) {
    validationErrors.sale_date = "Sale date is required";
  } else if (Number.isNaN(Date.parse(saleDate))) {
    validationErrors.sale_date = "Please enter a valid date";
  }

  return validationErrors;
};
