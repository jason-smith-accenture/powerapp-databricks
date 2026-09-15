import * as React from "react";
import { handleSalesChange } from "./handleSalesChange";
import { SalesFormErrors } from "../validate";

describe("handleSalesChange", () => {
  it("sets the sales value from the input event", () => {
    const setSales = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {};

    const event = {
      target: {
        value: "1200",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSalesChange({
      event,
      setSales,
      errors,
      setErrors,
    });

    expect(setSales).toHaveBeenCalledWith("1200");
  });

  it("clears the sales validation error when a valid positive number is entered", () => {
    const setSales = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      sales: "Sales amount is required",
    };

    const event = {
      target: {
        value: "1200",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSalesChange({
      event,
      setSales,
      errors,
      setErrors,
    });

    expect(setErrors).toHaveBeenCalledTimes(1);

    const updateErrors = setErrors.mock.calls[0][0];

    const currentErrors: SalesFormErrors = {
      sales: "Sales amount is required",
      product: "Product is required",
    };

    const updatedErrors = updateErrors(currentErrors);

    expect(updatedErrors).toEqual({
      sales: undefined,
      product: "Product is required",
    });
  });

  it("does not clear the sales validation error when the value is empty", () => {
    const setSales = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      sales: "Sales amount is required",
    };

    const event = {
      target: {
        value: "",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSalesChange({
      event,
      setSales,
      errors,
      setErrors,
    });

    expect(setSales).toHaveBeenCalledWith("");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("does not clear the sales validation error when the value is not a number", () => {
    const setSales = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      sales: "Sales must be a valid number",
    };

    const event = {
      target: {
        value: "abc",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSalesChange({
      event,
      setSales,
      errors,
      setErrors,
    });

    expect(setSales).toHaveBeenCalledWith("abc");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("does not clear the sales validation error when the value is zero", () => {
    const setSales = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      sales: "Sales must be greater than 0",
    };

    const event = {
      target: {
        value: "0",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSalesChange({
      event,
      setSales,
      errors,
      setErrors,
    });

    expect(setSales).toHaveBeenCalledWith("0");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("does not clear the sales validation error when the value is negative", () => {
    const setSales = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      sales: "Sales must be greater than 0",
    };

    const event = {
      target: {
        value: "-100",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSalesChange({
      event,
      setSales,
      errors,
      setErrors,
    });

    expect(setSales).toHaveBeenCalledWith("-100");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("does not clear the sales validation error when the value is only whitespace", () => {
    const setSales = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      sales: "Sales amount is required",
    };

    const event = {
      target: {
        value: "   ",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSalesChange({
      event,
      setSales,
      errors,
      setErrors,
    });

    expect(setSales).toHaveBeenCalledWith("   ");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("does not update errors when there is no sales error", () => {
    const setSales = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {};

    const event = {
      target: {
        value: "1200",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSalesChange({
      event,
      setSales,
      errors,
      setErrors,
    });

    expect(setSales).toHaveBeenCalledWith("1200");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("clears the sales validation error for a decimal value greater than zero", () => {
    const setSales = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      sales: "Sales must be a valid number",
    };

    const event = {
      target: {
        value: "1200.50",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSalesChange({
      event,
      setSales,
      errors,
      setErrors,
    });

    expect(setSales).toHaveBeenCalledWith("1200.50");
    expect(setErrors).toHaveBeenCalledTimes(1);
  });
});