import { Grid2 as Grid } from "@mui/material";
import { Item, ItemNoPadding } from "./item";

const defaultSize=3;

export const Col = (props) => {
  const { children,size, ...rest } = props;
  return (
    <Grid size={size || defaultSize} {...rest}>
      <ItemNoPadding>{children}</ItemNoPadding>
    </Grid>
  );
};

export const ColPadded = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid size={{xs:props.xs || defaultSize}} {...rest}>
      <Item>{children}</Item>
    </Grid>
  );
};
