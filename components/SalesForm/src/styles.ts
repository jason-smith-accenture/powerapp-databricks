import { makeStyles } from "@fluentui/react-components";
import { appTokens } from "../../../shared/theme";

export const useStyles = makeStyles({
  root: {
    padding: appTokens.spacing.xxl,
    backgroundColor: "#0e1b2d",
    borderRadius: "25px",
    maxWidth: "500px",
  },
  title: {
    fontSize: appTokens.typography.pageTitle,
    color: "#ffffff",
    marginTop: 0,
  },
  field: {
    marginBottom: appTokens.spacing.md,

    "& label": {
      color: "#ffffff !important",
    },
  },
  submitButton: {
    marginTop: appTokens.spacing.md,
    backgroundColor: "#3cd7d9",
    color: "#0e1b2d",

    ":hover": {
      backgroundColor: "#a7edee",
      color: "#0e1b2d",
    },
  },
});