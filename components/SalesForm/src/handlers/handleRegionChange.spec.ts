import * as React from "react";
import { handleRegionChange } from "./handleRegionChange";
import { SalesFormErrors } from "../validate";

describe("handleRegionChange", () => {
  it("sets the region value from the input event", () => {
    const setRegion = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {};

    const event = {
      target: {
        value: "UK",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleRegionChange({
      event,
      setRegion,
      errors,
      setErrors,
    });

    expect(setRegion).toHaveBeenCalledWith("UK");
  });

  it("clears the region validation error when a valid value is entered", () => {
    const setRegion = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      region: "Region is required",
    };

    const event = {
      target: {
        value: "UK",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleRegionChange({
      event,
      setRegion,
      errors,
      setErrors,
    });

    expect(setErrors).toHaveBeenCalledTimes(1);

    const updateErrors = setErrors.mock.calls[0][0];

    const currentErrors: SalesFormErrors = {
      region: "Region is required",
      product: "Product is required",
    };

    const updatedErrors = updateErrors(currentErrors);

    expect(updatedErrors).toEqual({
      region: undefined,
      product: "Product is required",
    });
  });

  it("does not clear the region validation error when the value is empty", () => {
    const setRegion = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      region: "Region is required",
    };

    const event = {
      target: {
        value: "",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleRegionChange({
      event,
      setRegion,
      errors,
      setErrors,
    });

    expect(setRegion).toHaveBeenCalledWith("");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("does not clear the region validation error when the value is only whitespace", () => {
    const setRegion = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {
      region: "Region is required",
    };

    const event = {
      target: {
        value: "   ",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleRegionChange({
      event,
      setRegion,
      errors,
      setErrors,
    });

    expect(setRegion).toHaveBeenCalledWith("   ");

    expect(setErrors).not.toHaveBeenCalled();
  });

  it("does not update errors when there is no region error", () => {
    const setRegion = jest.fn();
    const setErrors = jest.fn();

    const errors: SalesFormErrors = {};

    const event = {
      target: {
        value: "UK",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleRegionChange({
      event,
      setRegion,
      errors,
      setErrors,
    });

    expect(setRegion).toHaveBeenCalledWith("UK");

    expect(setErrors).not.toHaveBeenCalled();
  });
});