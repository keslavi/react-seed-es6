import { color } from "@/theme-material";
import { Grid2 as Grid } from "@mui/material";
import { isEmpty } from "lodash";

export const RowHeader = (props) => {
  const { leftcontent,rightcontent,children,backgroundColor,...rest } = props;

  const leftcontent2 = props.leftcontent || props.children;
  const rightcontent2 = props.rightcontent || "";
  const backgroundColor2 = props.backgroundColor || color.secondary.blue700;
  const textColor2 = props.color || color.primary.white;

  const xsL = isEmpty(rightcontent) ? 12 : props.xs || 10;
  const xsR = 12 - xsL;

  return (
    <Grid
      container
      sx={{
        height: "35px",
        backgroundColor: backgroundColor2,
        color: textColor2,
        fontsize: "1.2rem",
        padding: "3px",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
      }}
      {...rest}
    >
      <Grid container item xs={xsL} justifyContent="flex-begin">
        <div>{leftcontent2}</div>
      </Grid>
      {xsL < 12 && (
        <Grid container item xs={xsR} justifyContent="flex-end">
          <div>{rightcontent2}</div>
        </Grid>
      )}
    </Grid>
  );
};
