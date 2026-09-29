import * as React from "react";
import { handleSaleDateChange } from "./handleSaleDateChange";
import { SalesFormErrors } from "../validate";

describe("handleSaleDateChange", () => {
  it("sets the sale date value from the input event", () => {
    const setSaleDate = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {};

    const event = {
      target: {
        value: "2026-09-15",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSaleDateChange({
      event,
      setSaleDate,
      errors,
      setErrors,
    });

    expect(setSaleDate).toHaveBeenCalledWith("2026-09-15");
  });

  it("clears the sale date validation error when a valid date is entered", () => {
    const setSaleDate = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      sale_date: "Sale date is required",
    };

    const event = {
      target: {
        value: "2026-09-15",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSaleDateChange({
      event,
      setSaleDate,
      errors,
      setErrors,
    });

    expect(setErrors).toHaveBeenCalledTimes(1);

    const updateErrors = setErrors.mock.calls[0][0];

    const currentErrors: SalesFormErrors = {
      sale_date: "Sale date is required",
      product: "Product is required",
    };

    const updatedErrors = updateErrors(currentErrors);

    expect(updatedErrors).toEqual({
      sale_date: undefined,
      product: "Product is required",
    });
  });

  it("does not clear the sale date validation error when the value is empty", () => {
    const setSaleDate = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      sale_date: "Sale date is required",
    };

    const event = {
      target: {
        value: "",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSaleDateChange({
      event,
      setSaleDate,
      errors,
      setErrors,
    });

    expect(setSaleDate).toHaveBeenCalledWith("");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("does not clear the sale date validation error when the value is invalid", () => {
    const setSaleDate = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      sale_date: "Please enter a valid date",
    };

    const event = {
      target: {
        value: "not-a-date",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSaleDateChange({
      event,
      setSaleDate,
      errors,
      setErrors,
    });

    expect(setSaleDate).toHaveBeenCalledWith("not-a-date");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("does not update errors when there is no sale date error", () => {
    const setSaleDate = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {};

    const event = {
      target: {
        value: "2026-09-15",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleSaleDateChange({
      event,
      setSaleDate,
      errors,
      setErrors,
    });

    expect(setSaleDate).toHaveBeenCalledWith("2026-09-15");

    expect(setErrors).not.toHaveBeenCalled();
  });
});