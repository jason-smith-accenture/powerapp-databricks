import { handleSubmit } from "./handleSubmit";
import { SalesFormData } from "../SalesForm";

describe("handleSubmit", () => {
  it("sets validation errors when the form is invalid", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "",
      region: "",
      sales: "",
      saleDate: "",
      setErrors,
      onSubmit,
    });

    expect(setErrors).toHaveBeenCalledTimes(1);
    expect(onSubmit).not.toHaveBeenCalled();

    const validationErrors = setErrors.mock.calls[0][0];

    expect(validationErrors).toEqual({
      product: "Product is required",
      region: "Region is required",
      sales: "Sales amount is required",
      sale_date: "Sale date is required",
    });
  });

  it("does not submit the form when validation fails", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "",
      region: "UK",
      sales: "1200",
      saleDate: "2026-09-15",
      setErrors,
      onSubmit,
    });

    expect(setErrors).toHaveBeenCalledTimes(1);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("submits valid form data", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "Laptop",
      region: "UK",
      sales: "1200",
      saleDate: "2026-09-15",
      setErrors,
      onSubmit,
    });

    expect(setErrors).toHaveBeenCalledWith({});

    expect(onSubmit).toHaveBeenCalledTimes(1);

    expect(onSubmit).toHaveBeenCalledWith({
      product: "Laptop",
      region: "UK",
      sales: 1200,
      sale_date: "2026-09-15",
    });
  });

  it("trims product and region before submitting", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "  Laptop  ",
      region: "  UK  ",
      sales: "1200",
      saleDate: "2026-09-15",
      setErrors,
      onSubmit,
    });

    expect(onSubmit).toHaveBeenCalledWith({
      product: "Laptop",
      region: "UK",
      sales: 1200,
      sale_date: "2026-09-15",
    });
  });

  it("converts the sales value from a string to a number", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "Laptop",
      region: "UK",
      sales: "2500.50",
      saleDate: "2026-09-15",
      setErrors,
      onSubmit,
    });

    expect(onSubmit).toHaveBeenCalledWith({
      product: "Laptop",
      region: "UK",
      sales: 2500.5,
      sale_date: "2026-09-15",
    });
  });

  it("passes the sale date through unchanged", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "Laptop",
      region: "UK",
      sales: "1200",
      saleDate: "2026-01-31",
      setErrors,
      onSubmit,
    });

    const submittedData = onSubmit.mock.calls[0][0] as SalesFormData;

    expect(submittedData.sale_date).toBe("2026-01-31");
  });

  it("sets only the relevant validation errors when some fields are invalid", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "Laptop",
      region: "",
      sales: "1200",
      saleDate: "2026-09-15",
      setErrors,
      onSubmit,
    });

    expect(setErrors).toHaveBeenCalledWith({
      region: "Region is required",
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("does not submit when sales is zero", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "Laptop",
      region: "UK",
      sales: "0",
      saleDate: "2026-09-15",
      setErrors,
      onSubmit,
    });

    expect(setErrors).toHaveBeenCalledWith({
      sales: "Sales must be greater than 0",
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("does not submit when sales is negative", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "Laptop",
      region: "UK",
      sales: "-100",
      saleDate: "2026-09-15",
      setErrors,
      onSubmit,
    });

    expect(setErrors).toHaveBeenCalledWith({
      sales: "Sales must be greater than 0",
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("does not submit when sales is not a number", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "Laptop",
      region: "UK",
      sales: "abc",
      saleDate: "2026-09-15",
      setErrors,
      onSubmit,
    });

    expect(setErrors).toHaveBeenCalledWith({
      sales: "Sales must be a valid number",
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("does not submit when the sale date is invalid", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "Laptop",
      region: "UK",
      sales: "1200",
      saleDate: "not-a-date",
      setErrors,
      onSubmit,
    });

    expect(setErrors).toHaveBeenCalledWith({
      sale_date: "Please enter a valid date",
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("does not call onSubmit when multiple validation errors exist", () => {
    const setErrors = jest.fn();
    const onSubmit = jest.fn();

    handleSubmit({
      product: "",
      region: "",
      sales: "abc",
      saleDate: "not-a-date",
      setErrors,
      onSubmit,
    });

    expect(setErrors).toHaveBeenCalledTimes(1);
    expect(onSubmit).not.toHaveBeenCalled();
  });
});