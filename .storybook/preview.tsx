import * as React from "react";
import type { Preview } from "@storybook/react";
import { AppThemeProvider } from "../shared/theme";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
    },
  },

  decorators: [
    (Story) => (
      <AppThemeProvider>
        <Story />
      </AppThemeProvider>
    ),
  ],
};

export default preview;
