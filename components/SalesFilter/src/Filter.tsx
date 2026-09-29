import React, { useState } from "react";

import { Button, Field, Input, Select } from "@fluentui/react-components";

import type { FilterField, FilterProps, FilterValues } from "./types";

import { useStyles } from "./styles";

export const Filter: React.FC<FilterProps> = ({
  fields,
  initialValues = {},
  onApply,
  onChange,
  onClear,
  showApplyButton = true,
  showClearButton = true,
}) => {
  const styles = useStyles();

  const [values, setValues] = useState<FilterValues>(() => initialValues);

  const updateValue = (fieldId: string, value: string) => {
    setValues((currentValues) => {
      const updatedValues: FilterValues = {
        ...currentValues,
        [fieldId]: value,
      };

      onChange?.(updatedValues);

      return updatedValues;
    });
  };

  const handleApply = () => {
    onApply?.(values);
  };

  const handleClear = () => {
    const clearedValues: FilterValues = {};

    setValues(clearedValues);

    onChange?.(clearedValues);
    onClear?.();
  };

  const renderField = (field: FilterField) => {
    const value = values[field.id] ?? "";

    switch (field.type) {
      case "text":
        return (
          <div key={field.id} className={styles.field}>
            <Field label={field.label}>
              <Input
                value={value}
                placeholder={field.placeholder}
                disabled={field.disabled}
                onChange={(event) => {
                  updateValue(field.id, event.target.value);
                }}
              />
            </Field>
          </div>
        );

      case "select":
        return (
          <div key={field.id} className={styles.field}>
            <Field label={field.label}>
              <Select
                value={value}
                disabled={field.disabled}
                onChange={(event) => {
                  updateValue(field.id, event.target.value);
                }}
              >
                <option value="">
                  {field.placeholder ?? `Select ${field.label}`}
                </option>

                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
        );

      case "date":
        return (
          <div key={field.id} className={styles.field}>
            <Field label={field.label}>
              <Input
                type="date"
                value={value}
                disabled={field.disabled}
                onChange={(event) => {
                  updateValue(field.id, event.target.value);
                }}
              />
            </Field>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>Filters</h2>

        <p className={styles.description}>
          Refine the data displayed in the table.
        </p>
      </div>

      <div className={styles.fields}>{fields.map(renderField)}</div>

      {(showApplyButton || showClearButton) && (
        <div className={styles.actions}>
          {showClearButton && (
            <Button appearance="secondary" onClick={handleClear}>
              Clear
            </Button>
          )}

          {showApplyButton && (
            <Button appearance="primary" onClick={handleApply}>
              Apply filters
            </Button>
          )}
        </div>
      )}
    </section>
  );
};
