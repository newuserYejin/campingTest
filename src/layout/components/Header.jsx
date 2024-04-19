import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/whatAboutCampingLogo.png";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import {
  Container,
  Box,
  AppBar,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const drawerWidth = 260;
const navItems = [
  ["캠핑장 찾기🔍", "/캠핑장찾기url"],
  ["행사✨", "/event"],
  ["공공 우수 야영장⛺", "/공공우수야영장url"],
];

const GnbItemMobile = styled.li`
  a {
    display: block;
    width: 100%;
    color: var(--main-font-color);
    padding: 8px 0;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: var(--key-color);
    }
  }
`;

const GnbItemPC = styled.li`
  list-style: none;
  a {
    padding: 5px 10px;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    color: var(--main-font-color);
    text-decoration: none;
    &:hover {
      color: var(--key-color);
    }
  }
`;

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        component="h1"
        sx={{
          backgroundColor: "var(--key-color)",
          marginBottom: "10px",
          padding: "20px 0",
        }}
      >
        <Link to="/">
          <Box
            component="img"
            sx={{
              width: "100px",
              height: "auto",
              filter: "brightness(0%) contrast(100%) invert(1)",
            }}
            alt="캠핑 어때"
            src={logo}
          />
        </Link>
      </Typography>
      <List>
        {navItems.map((item) => (
          <StylesProvider injectFirst>
            <GnbItemMobile key={item}>
              <Link to={item[1]}>{item[0]}</Link>
            </GnbItemMobile>
          </StylesProvider>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
      <AppBar
        component="nav"
        maxWidth="xl"
        sx={{
          height: {
            xs: "70px",
            md: "135px",
          },
          justifyContent: {
            xs: "center",
          },
          backgroundColor: "var(--main-background-color)",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              position: "relative",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                display: {
                  md: "none",
                  color: "var(--color-darkGray)",
                },
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
            <Typography component="h1">
              <Link to="/">
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    width: {
                      xs: "90px",
                      md: "120px",
                    },
                    height: "auto",
                    padding: {
                      xs: "0",
                      md: "15px 0 5px",
                    },
                  }}
                  alt="캠핑 어때"
                  src={logo}
                />
              </Link>
            </Typography>
            <Box
              component="ul"
              sx={{
                display: { xs: "none", md: "flex" },
                gap: "20px",
                margin: "15px 0 10px",
                padding: "0",
              }}
            >
              {navItems.map((item) => (
                <StylesProvider injectFirst>
                  <GnbItemPC key={item}>
                    <Link to={item[1]}>{item[0]}</Link>
                  </GnbItemPC>
                </StylesProvider>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </header>
  );
};

export default Header;
