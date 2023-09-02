'use client';
import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import styled from './burgerMenu.module.css';

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
        id="burger"
      >
        <MenuIcon
          sx={{
            fontSize: '40px',
            color: '#f12711',
          }}
        />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link href="/about">About Me</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link href="/blog">Blog</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link href="/dashboard">Dashboard</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link href="/portfolio">Portfolio</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link href="/contact">Contact</Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default BurgerMenu;
