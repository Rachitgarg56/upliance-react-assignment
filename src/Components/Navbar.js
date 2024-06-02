import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // const { user } = useUser();
  // const userId = user.id; 
  // const email = user.primaryEmailAddress.emailAddress;
  // // console.log(userId,email);

  // // console.log(user);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={'/'}>
                  DASHBOARD
              </Link>
            </Typography>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                >
                <MenuIcon className='mx-4' />
            </IconButton>
            <UserButton />
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                >
                <Link to={'/'}><MenuItem onClick={handleMenuClose}>Dashboard</MenuItem></Link>
                <Link to={'/profile'}><MenuItem onClick={handleMenuClose}>Profile</MenuItem></Link>
                {/* <Link><MenuItem onClick={handleMenuClose}>My account</MenuItem></Link> */}
            </Menu>
            </Toolbar>
        </AppBar>
        </Box>
    </nav>
  );
};

export default Navbar;
