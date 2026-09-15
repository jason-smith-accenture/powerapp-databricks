import * as React from "react";
import { handleProductChange } from "./handleProductChange";
import { SalesFormErrors } from "../validate";

describe("handleProductChange", () => {
  it("sets the product value from the input event", () => {
    const setProduct = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {};

    const event = {
      target: {
        value: "Laptop",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleProductChange({
      event,
      setProduct,
      errors,
      setErrors,
    });

    expect(setProduct).toHaveBeenCalledWith("Laptop");
  });

  it("clears the product validation error when a valid value is entered", () => {
    const setProduct = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      product: "Product is required",
    };

    const event = {
      target: {
        value: "Laptop",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleProductChange({
      event,
      setProduct,
      errors,
      setErrors,
    });

    expect(setErrors).toHaveBeenCalledTimes(1);

    const updateErrors = setErrors.mock.calls[0][0];

    const currentErrors: SalesFormErrors = {
      product: "Product is required",
      region: "UK",
    };

    const updatedErrors = updateErrors(currentErrors);

    expect(updatedErrors).toEqual({
      product: undefined,
      region: "UK",
    });
  });

  it("does not clear the product validation error when the value is empty", () => {
    const setProduct = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      product: "Product is required",
    };

    const event = {
      target: {
        value: "",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleProductChange({
      event,
      setProduct,
      errors,
      setErrors,
    });

    expect(setProduct).toHaveBeenCalledWith("");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("does not clear the product validation error when the value is only whitespace", () => {
    const setProduct = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      product: "Product is required",
    };

    const event = {
      target: {
        value: "   ",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleProductChange({
      event,
      setProduct,
      errors,
      setErrors,
    });

    expect(setProduct).toHaveBeenCalledWith("   ");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("does not update errors when there is no product error", () => {
    const setProduct = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {};

    const event = {
      target: {
        value: "Laptop",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleProductChange({
      event,
      setProduct,
      errors,
      setErrors,
    });

    expect(setProduct).toHaveBeenCalledWith("Laptop");

    expect(setErrors).not.toHaveBeenCalled();
  });
});