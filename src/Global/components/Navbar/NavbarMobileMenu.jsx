import { AccountCircle, MailLock, Notifications } from '@mui/icons-material';
import { useContext } from "react";
import { CartContext } from "../../../Cart/contexts/CartContext";
import { Badge, IconButton, Menu, MenuItem } from '@mui/material';

const mobileMenuId = 'primary-search-account-menu-mobile';

export const renderMobileMenu = (mobileMoreAnchorEl,
    isMobileMenuOpen,
    handleMobileMenuClose,
    handleProfileMenuOpen) => {

    const { total } = useContext(CartContext)

    return <Menu
        anchorEl={ mobileMoreAnchorEl }
        anchorOrigin={ {
            vertical: 'top',
            horizontal: 'right',
        } }
        id={ mobileMenuId }
        keepMounted
        transformOrigin={ {
            vertical: 'top',
            horizontal: 'right',
        } }
        open={ isMobileMenuOpen }
        onClose={ handleMobileMenuClose }
    >
        <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={ total } color="error">
                    <MailLock />
                </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
            >
                <Badge badgeContent={ 17 } color="error">
                    <Notifications />
                </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={ handleProfileMenuOpen }>
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
    </Menu>
}