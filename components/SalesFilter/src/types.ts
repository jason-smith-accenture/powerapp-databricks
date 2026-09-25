export type FilterFieldType = "text" | "select" | "date";

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterField {
  id: string;
  label: string;
  type: FilterFieldType;

  placeholder?: string;

  options?: FilterOption[];

  /**
   * Allows individual fields to be disabled.
   */
  disabled?: boolean;
}

export type FilterValues = Record<string, string>;

export interface FilterProps {
  fields: FilterField[];

  /**
   * Initial values displayed when the component loads.
   */
  initialValues?: FilterValues;

  /**
   * Called when the user clicks Apply.
   */
  onApply?: (filters: FilterValues) => void;

  /**
   * Called whenever an individual value changes.
   *
   * This is useful later if the parent needs
   * to maintain live state.
   */
  onChange?: (filters: FilterValues) => void;

  /**
   * Called when the user clicks Clear.
   */
  onClear?: () => void;

  /**
   * Whether the Apply button should be displayed.
   */
  showApplyButton?: boolean;

  /**
   * Whether the Clear button should be displayed.
   */
  showClearButton?: boolean;
}