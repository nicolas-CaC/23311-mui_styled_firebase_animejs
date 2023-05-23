import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useContext } from 'react';
import { CartContext } from '../../../Cart/contexts/CartContext';
import { AccountCircle, MoreVert, SearchOutlined, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { renderMobileMenu } from './NavbarMobileMenu';
import { renderMenu } from './NavbarMenu';
import { Search, SearchIconWrapper, StyledInputBase } from '../../styles/navbarStyled';
import { NavbarDrawer } from './NavbarDrawer';



export const Navbar = () => {

    const { total } = useContext(CartContext)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={ { mr: 2 } }
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <NavbarDrawer />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={ { display: { xs: 'none', sm: 'block' } } }
                    >
                        TU NEGOCIO
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchOutlined />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={ { 'aria-label': 'search' } }
                        />
                    </Search>
                    <Box sx={ { flexGrow: 1 } } />
                    <Box sx={ { display: { xs: 'none', md: 'flex' } } }>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={ total } color="error">
                                <Link to='/carrito' style={ { color: 'white' } }>
                                    <ShoppingCart />
                                </Link>
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={ 1 } color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            // aria-controls={ menuId }
                            aria-haspopup="true"
                            onClick={ handleProfileMenuOpen }
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={ { display: { xs: 'flex', md: 'none' } } }>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            // aria-controls={ mobileMenuId }
                            aria-haspopup="true"
                            onClick={ handleMobileMenuOpen }
                            color="inherit"
                        >
                            <MoreVert />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            { renderMobileMenu(
                mobileMoreAnchorEl,
                isMobileMenuOpen,
                handleMobileMenuClose,
                handleProfileMenuOpen) }

            { renderMenu(
                anchorEl,
                handleMenuClose,
                isMenuOpen)
            }
        </Box>
    );
}