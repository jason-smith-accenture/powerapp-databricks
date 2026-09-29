import { makeStyles } from "@fluentui/react-components";

import { appTokens } from "../../../shared/theme";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    boxSizing: "border-box",

    padding: appTokens.spacing.lg,

    backgroundColor: "#0e1b2d",

    borderRadius: "25px",

    color: "white",
  },

  header: {
    marginBottom: appTokens.spacing.lg,
  },

  title: {
    margin: 0,
    marginBottom: appTokens.spacing.xs,

    fontSize: appTokens.typography.pageTitle,

    fontWeight: 600,
  },

  description: {
    margin: 0,

    fontSize: appTokens.typography.body,

    color: "#c5ced9",
  },

  fields: {
    display: "grid",

    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",

    gap: appTokens.spacing.md,
  },

  field: {
    minWidth: 0,
  },

  actions: {
    display: "flex",

    justifyContent: "flex-end",

    gap: appTokens.spacing.sm,

    marginTop: appTokens.spacing.lg,
  },
});