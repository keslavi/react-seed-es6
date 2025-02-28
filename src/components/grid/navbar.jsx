import { Toolbar, Box, Typography } from "@mui/material";
import { color } from "theme-material";

export const Navbar = (props) => {
  const { contentRight, style } = props;

  return (
    <>
      <Box xs={{ flexGrow: 1 }} style={style || {}}>
          <Typography /*variant="h6"*/ component="div" sx={{ flexGrow: 1 }}>
            {props.children}
          </Typography>
          {contentRight}
        <Toolbar
          disableGutters
          variant="dense"
          style={{
            //backgroundColor:color.primary.white,
            minHeight: "35px",
            width: "96%",
            position: "absolute",
            zIndex: 3000,
            padding: "3px 0px",
          }}
          sx={{
            boxShadow: "none",
            bgcolor: color.primary.white,
            color: color.primary.blue,
          }}
        >
        </Toolbar>
      </Box>
    </>
  );
};
