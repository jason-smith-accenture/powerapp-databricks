import { makeStyles } from "@fluentui/react-components";
import { appTokens } from "../../../shared/theme";

export const useStyles = makeStyles({
  root: {
    padding: appTokens.spacing.lg,
    maxWidth: "600px",
  },

  title: {
    fontSize: appTokens.typography.pageTitle,
  },

  tableContainer: {
    padding: appTokens.spacing.xxl,
    backgroundColor: "#0e1b2d",
    borderRadius: "25px",
  },

  tableRowHeader: {
    color: "#ffffff",   
  },

  tableRow: {
    color: "#ffffff",
    ":hover": {
      backgroundColor: "#a7edee",
      color: "#0e1b2d",
    },
  },

  table: {
    width: "100%",
    color: "#ffffff",
  },

  headerCell: {
    fontWeight: 600,
    color: "#ffffff",
  },

  cell: {
    whiteSpace: "nowrap",
  },
});