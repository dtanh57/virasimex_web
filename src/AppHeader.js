import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import useTrans from "./hooks/useTrans";
import { Grid, useTheme } from "@mui/material";

export default function AppHeader() {
  const { Strings, changeLanguage, language, push } = useTrans();
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = [
    { label: Strings.home, value: "/home" },
    { label: Strings.service, value: "/service" },
    { label: Strings.newAndBlog, value: "/service" },
    { label: Strings.portfolio, value: "/newAndBlog" },
    { label: Strings.recruit, value: "/rescruit" },
  ];
  const languages = [
    {
      label: Strings.vietnamese,
      value: "vi",
      icon: "/vi.svg",
    },
    {
      label: Strings.japanese,
      value: "jp",
      icon: "/jp.svg",
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    e && push({ pathname: e });
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (lang) => {
    changeLanguage(lang);
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Grid
            container
            alignItems="center"
            sx={{ width: "fit-content", display: { xs: "none", md: "flex" } }}
          >
            <Image
              alt="virasimex logo"
              href="/"
              src={"/logo.jpeg"}
              width={60}
              height={60}
            />
            <Box sx={{ ml: 1 }}>
              <Typography
                sx={{
                  mr: 2,
                  color: theme.palette.red_app.main,
                  fontSize: "1.3vw",
                }}
              >
                VIRASIMEX
              </Typography>
              <Typography
                color="primary"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex", fontSize: "1.1vw" },
                }}
              >
                鉄道設備輸出入貿易株式会社
              </Typography>
            </Box>
          </Grid>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => handleCloseNavMenu(page.value)}
                >
                  <Typography textAlign="center" color="primary">
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Image
              alt="virasimex logo"
              href="/"
              src={"/logo.jpeg"}
              width={60}
              height={60}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                color="primary"
                key={page.label}
                onClick={() => handleCloseNavMenu(page.value)}
                sx={{ my: 2, display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Grid container justifyContent="flex-end" sx={{ flex: 1 }}>
            <Tooltip title="Open language">
              <Button sx={{ display: "flex" }} onClick={handleOpenUserMenu}>
                <Typography
                  sx={{ mr: 1, textTransform: "none" }}
                  variant="subtitle1"
                >
                  {Strings.language}
                </Typography>
                <Box sx={{ border: "1px solid #d9d9d9", height: 32 }}>
                  <Image
                    src={languages.find((itm) => itm.value === language)?.icon}
                    width="40"
                    height="30"
                    alt="language"
                  />
                </Box>
              </Button>
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
              onClose={handleCloseUserMenu}
            >
              {languages.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => handleCloseUserMenu(item.value)}
                  sx={[
                    {
                      justifyContent: "space-between",
                      backgroundColor:
                        language === item.value
                          ? theme.palette.primary.main
                          : undefined,
                    },
                  ]}
                >
                  <Typography
                    sx={[
                      {
                        "&:hover": {
                          color: "black",
                        },
                      },
                      {
                        mr: 1,
                        color:
                          language === item.value
                            ? "white"
                            : theme.palette.primary.main,
                      },
                    ]}
                    variant="subtitle1"
                    textAlign="center"
                  >
                    {item.label}
                  </Typography>
                  <Image src={item.icon} width="40" height="30" />
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
