/*
export const Header=(props) => {
  const {menu} =props;

  const renderMenu = (menu) => {
    if (!menu) return; //may not appear due to multiple rendering... React.StrictMode?
    return menu.map(x=>{
      if (x.items) { return renderMenu(x.items) }
      return <li key={x.text}><NavLink to={x.link}>{x.text}</NavLink></li>
    })
  }

  return (
    <div className='navbar'>
      {/* <textarea rows={10} cols={100} value={JSON.stringify(menu, null, 2)}></textarea> * /}
      <ul>
        {renderMenu(menu)}
      </ul>
    </div>)
}

export default Header;
*/

import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { NavLink } from "react-router-dom";
import { color } from "@/theme-material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Header = (props) => {
  const { menu } = props;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const onOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const onOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const onCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const renderMenu = (menu) => {
    return menu.map((x) => {
      if (x.items) {
        return renderMenu(x.items);
      }
      return (
        <NavLink to={x.link} key={x.link}>
          {({ isActive }) => (
            <Button
              sx={{
                padding: 0,
                my: 2,
                color: color.white,
                display: "block",
                marginRight: "10px",
              }}
              variant={isActive ? "contained" : ""}
            >
              {x.text}
            </Button>
          )}
        </NavLink>
      );
    });
  };

  const renderMenuXs = (menu) => {
    return menu.map((x) => {
      if (x.items) {
        return renderMenuXs(x.items);
      }
      return (
        <NavLink to={x.link} key={x.link}>
          {({ isActive }) => (
            <MenuItem onClick={onCloseNavMenu} selected={isActive}>
              <Typography textAlign="center">{x.text}</Typography>
            </MenuItem>
          )}
        </NavLink>
      );
    });
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: color.primary.blue,
        color: color.white,
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <CoPresentIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Seed2024
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={onOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={onCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {renderMenuXs(menu)}
            </Menu>
          </Box>
          <CoPresentIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Seed2024
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {renderMenu(menu)}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={onOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={onCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={onCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
