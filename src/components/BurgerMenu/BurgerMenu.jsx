'use client';
import { useState } from 'react';
import { IconButton, Menu, MenuItem, MenuList } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import styled from './burgerMenu.module.css';
import { useMediaQuery } from 'react-responsive';
import AuthNav from '../AuthForm/AuthNav/AuthNav';
import '../../app/globals.css';

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const ismediaQuery = useMediaQuery({ minWidth: 590 });

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        type="button"
        name="burger"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
        id="burger"
      >
        <MenuIcon className={styled.menuIcon} />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        className={styled.menu}
      >
        {!ismediaQuery && <AuthNav />}
        <MenuList className={`${styled.menuList} ${styled.noPaddingMenuList}`}>
          <MenuItem onClick={handleMenuClose} className={styled.menuItem}>
            <Link href="/" className={styled.menuItemLink}>
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose} className={styled.menuItem}>
            <Link href="/about" className={styled.menuItemLink}>
              About Me
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose} className={styled.menuItem}>
            <Link href="/gallery" className={styled.menuItemLink}>
              Gallery
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose} className={styled.menuItem}>
            <Link href="/portfolio" className={styled.menuItemLink}>
              Portfolio
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose} className={styled.menuItem}>
            <Link href="/contact" className={styled.menuItemLink}>
              Contact
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default BurgerMenu;
