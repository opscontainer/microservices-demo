import { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

export default function Navigation({ cartCount }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#7030A0",
          position: "relative",
          borderRadius: "15px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography sx={{ font: "roboto", color: "white", ml: 2 }}>
          <Link
            to="/"
            underline="none"
            className="no-underline"
            style={{ color: "white", fontFamily: "Arial" }}
          >
            <Box component="img" src={Logo} alt="Logo" sx={{ height: 40 }} />
          </Link>
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography
            sx={{
              font: "roboto",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              to="/"
              component="button"
              underline="none"
              className="no-underline"
              style={{ color: "white", fontFamily: "Arial" }}
            >
              <Box sx={{ display: "flex" }}>
                <HomeIcon sx={{ mr: 1 }} />
                Home
              </Box>
            </Link>
          </Typography>
          <Typography
            sx={{
              font: "roboto",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              href="#"
              underline="none"
              color="inherit"
              className="no-underline"
              style={{ color: "white", fontFamily: "Arial" }}
            >
              <Box sx={{ display: "flex" }}>
                <Badge
                  badgeContent={cartCount.toString()}
                  color="secondary"
                  className="no-underline"
                >
                  <ShoppingCart sx={{ mr: 1 }} />
                </Badge>
                Cart
              </Box>
            </Link>
          </Typography>
        </Box>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleMenuClick}
            size="small"
            sx={{ mr: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar>A</Avatar>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
