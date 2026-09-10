import * as React from "react";
import {
    FluentProvider,
    webLightTheme
} from "@fluentui/react-components";

export interface AppThemeProviderProps {
    children: React.ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
    children
}) => {
    return (
        <FluentProvider theme={webLightTheme}>
            {children}
        </FluentProvider>
    );
};