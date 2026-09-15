import { makeStyles } from "@fluentui/react-components";
import { appTokens } from "../../../shared/theme";
import { tokens } from "@fluentui/react-theme";

export const useStyles = makeStyles({
  root: {
    padding: appTokens.spacing.lg,
  },

  title: {
    fontSize: appTokens.typography.pageTitle,
  },

  tableContainer: {
    width: "100%",
    overflowX: "auto",
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  },

  table: {
    width: "100%",
  },

  headerCell: {
    fontWeight: 600,
    backgroundColor: tokens.colorNeutralBackground3,
  },

  cell: {
    whiteSpace: "nowrap",
  },
});