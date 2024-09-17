"use client";

import Image from "next/image";
import styles from "./menu.module.css";
import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InputBase from '@mui/material/InputBase';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import MenuItem from '@mui/material/MenuItem';
import MenuM from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import InstagramIcon from '@mui/icons-material/Instagram';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import MoreIcon from '@mui/icons-material/MoreVert';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Button, FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Popup from 'reactjs-popup';
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from "@mui/icons-material";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#000000',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#341931',
    },
  },
});


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  left: '200px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

export default function Menu() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [modalLogin, setModalLogin] = useState<boolean>(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [showPassword, setShowPassword] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleProfileMenuOpen = () => {
    setModalLogin(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (codigo: number) => {
    router.push(`${pathname}?cMenu=${codigo}`, { scroll: false })
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('pesquisa', value); 
    } else {
      params.delete('pesquisa'); 
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <MenuM
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <HomeIcon />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <FileDownloadIcon />
        </IconButton>
        <p>Downloads</p>
      </MenuItem>
      <MenuItem style={{display: 'none'}}>
        <IconButton
          size="large"
          color="inherit"
        >
          <PeopleIcon />
        </IconButton>
        <p>Comunidade</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <InfoIcon />
        </IconButton>
        <p>Sobre</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <ContactSupportIcon />
        </IconButton>
        <p>Contato</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </MenuM>
  );

  return (
    <Box sx={{ flexGrow: 1 }} id='Menu'>
      <AppBar position="static" sx={{height: '100px', backgroundColor: '#571b3c'}}>
        <Toolbar sx={{height: '100px'}}>
          <Image
            src={'/logo.png'}
            width={206}
            height={200}
            alt="Logo"
            className={styles.imgLogo}
          />
          <Search>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Procurar…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" sx={searchParams.get('cMenu') === '1' ? 
              {
                fontWeight: '600',
                backgroundColor: '#341931'
              }
            : {
                fontWeight: '600', '&:hover': {
                  backgroundColor: '#341931',
                },
              }} onClick={() => handleMenuClick(1)}>
              Home
            </Button>
            <Button color="inherit" sx={searchParams.get('cMenu') === '2' ? 
              {
                fontWeight: '600',
                backgroundColor: '#341931'
              }
            : {
                fontWeight: '600', '&:hover': {
                  backgroundColor: '#341931',
                },
              }} onClick={() => handleMenuClick(2)}>
              Downloads
            </Button>
            <Button color="inherit" sx={searchParams.get('cMenu') === '3' ? 
              {
                fontWeight: '600',
                backgroundColor: '#341931'
              }
            : {
                fontWeight: '600', display: 'none', '&:hover': {
                  backgroundColor: '#341931',
                },
              }} onClick={() => handleMenuClick(3)}>
              Comunidade
            </Button>
            <Button color="inherit" sx={searchParams.get('cMenu') === '4' ? 
              {
                fontWeight: '600',
                backgroundColor: '#341931'
              }
            : {
                fontWeight: '600', '&:hover': {
                  backgroundColor: '#341931',
                },
              }} onClick={() => handleMenuClick(4)}>
              Sobre
            </Button>
            <Button color="inherit" sx={searchParams.get('cMenu') === '5' ? 
              {
                fontWeight: '600',
                backgroundColor: '#341931'
              }
            : {
                fontWeight: '600', '&:hover': {
                  backgroundColor: '#341931',
                },
              }} onClick={() => handleMenuClick(5)}>
              Contato
            </Button>
            <Button
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{'&:hover': {
                backgroundColor: '#9d2053',
                border: '1px solid #fff'
              }, border: '1px solid transparent', 
                 fontSize: '14px', 
                 fontWeight: 600, 
                 gap: '.5rem', 
                 backgroundColor: '#9d2053',
                 marginLeft: '14px'  
                }}
            >
              Login
              <AccountCircle />
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}

      <Popup
        className={styles.globalModalClass}
        modal={true}        
        nested
        open={modalLogin}
        //onOpen={}
        // closeOnDocumentClick
        keepTooltipInside=".tooltipBoundary"
        onClose={() => setModalLogin(false)}      
        contentStyle={{
          backgroundColor: '#fff',        
          padding: '1rem',
          borderRadius: '5px',        
          textAlign: 'center',
          display: 'grid',        
          color:'black',      
          width :'100%' ,
          gap: '10px',
          maxWidth: '50rem',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        overlayStyle={{
          backgroundColor: 'rgba(0,0,0,0.4)',    
          padding: '1rem'
        }}           
      >
        <div className={styles.modalTop}>        
          <button 
            className={styles.modalClose}
            onClick={() => setModalLogin(false)}
          >&times;</button>
        </div>
          <div className={styles.containerLoginForm}>
            <h1>Login</h1>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', padding: '2rem 5rem' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <CssTextField 
                id="input-with-sx" 
                label="Usuário ou email" 
                variant="standard" 
                sx={{width: '100%'}}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', padding: '0 5rem' }}>
              <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <CssTextField 
                id="input-with-sx" 
                label="Senha" 
                variant="standard" 
                type={showPassword ? 'text' : 'password'}
                sx={{width: '100%'}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <p style={{
              color: '#9d2053',
              cursor: 'pointer',
              padding: '1rem 5rem',
              width: 'fit-content',
              alignSelf: 'flex-end'
            }}>Esqueceu a senha ?</p>

            <Button
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{'&:hover': {
                backgroundColor: '#9d2053'
              }, 
                 fontSize: '14px', 
                 fontWeight: 400, 
                 gap: '.5rem', 
                 backgroundColor: '#9d2053',
                 color: '#fff',
                 margin: '2rem 5rem 1rem 5rem'
                }}
            >
              Entrar
              <LoginIcon />
            </Button>

            <span>ou entre com rede social</span>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              width: '100%',
              padding: '1rem 5rem 1rem 5rem'
            }}>
              <IconButton
                size="large"
                color="inherit"
              >
                <GoogleIcon fontSize="large"/>
              </IconButton>

              <IconButton
                size="large"
                color="inherit"
              >
                <InstagramIcon fontSize="large"/>
              </IconButton>

              <IconButton
                size="large"
                color="inherit"
              >
                <XIcon fontSize="large"/>
              </IconButton>
            </div>

            <hr 
              style={{
                color:'#ccc',
                background: '#ccc',
                outline: 'none',
                height: '1px',
                border: 'none',
                margin: '0.5rem 5rem'
              }}
            />

            <span 
              style={{display: 'flex',width: 'fit-content',
                alignSelf: 'flex-end', padding: '.5rem 5rem', gap: '.5rem'}}>Ainda não tem conta? <p style={{
              color: '#9d2053',
              cursor: 'pointer', }}>Cadastrar</p></span>
          </div>
      </Popup>
    </Box>
  );
}
