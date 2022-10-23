import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import useTrans from './hooks/useTrans';

export default function AppHeader() {
  const {Strings, changeLanguage, language, push} = useTrans();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = [
    {label: Strings.home, value: '/home'},
    {label: Strings.service, value: '/service'},
    {label: Strings.newAndBlog, value: '/service'},
    {label: Strings.portfolio, value: '/newAndBlog'},
    {label: Strings.recruit, value: '/rescruit'}
  ];
  const languages = [
    {
      label: Strings.vietnamese,
      value: 'vi',
      icon: '/vi.svg'
    },
    {
      label: Strings.japanese,
      value: 'jp',
      icon: '/jp.svg'
    }
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    e && push({pathname: e});
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (lang) => {
    changeLanguage(lang);
    setAnchorElUser(null);
  };

  return (
    <AppBar position='sticky'>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'}
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={() => handleCloseNavMenu(page.value)}>
                  <Typography textAlign='center'>{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
              <Button key={page.label} onClick={() => handleCloseNavMenu(page.value)} sx={{my: 2, color: 'white', display: 'block'}}>
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{flexGrow: 0}}>
            <Tooltip title='Open language'>
              <Button sx={{display: 'flex'}} onClick={handleOpenUserMenu}>
                <Typography sx={{mr: 1, textTransform: 'none'}} variant='subtitle1' color='white'>
                  {Strings.language}
                </Typography>
                <Image src={languages.find((itm) => itm.value === language)?.icon} width='40' height='30' />
              </Button>
            </Tooltip>
            <Menu
              sx={{mt: '45px'}}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {languages.map((item) => (
                <MenuItem key={item.label} onClick={() => handleCloseUserMenu(item.value)} sx={{justifyContent: 'space-between'}}>
                  <Typography sx={{mr: 1}} variant='subtitle1' textAlign='center'>
                    {item.label}
                  </Typography>
                  <Image src={item.icon} width='40' height='30' />
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
