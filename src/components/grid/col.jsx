import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export const Col = (props) => {
  //const size=`col-${props.xs || 4}`;
  return (
    <Grid item xs={props.xs || 4}>
      <Item>
        {props.children}
      </Item>
    </Grid>
  );
};
