import { color } from "@/theme-material";
import { Row, Col } from "components";
import { AppBar, Toolbar } from "@mui/material";

export const NavSticky = (props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "57px",
        //bottom: 0,
        boxShadow: "none",
        bgcolor: color.primary.white,
        zIndex: 3000,
      }}
    >
      <Toolbar
        disableGutters
        variant="dense"
        sx={{
          px: 2,
          boxShadow: "none",
          bgcolor: color.primary.white,
        }}
      >
        {props.children}
      </Toolbar>
    </AppBar>
  );
};
