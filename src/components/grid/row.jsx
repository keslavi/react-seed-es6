import { Grid2 as Grid } from "@mui/material";

export const Row = (props) => {
  const { children, columns, ...rest } = props;

  return (
    <Grid
      container
      spacing={2}
      //columns={columns || { xs: 2, sm: 4, md: 12 }}
      {...rest}
    >
      {children}
    </Grid>
  );
};
