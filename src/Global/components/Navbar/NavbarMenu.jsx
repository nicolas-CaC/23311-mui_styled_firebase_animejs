import { Divider, Menu, MenuItem } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../../../Login/contexts/LoginContext";

const menuId = 'primary-search-account-menu';

export const renderMenu = (anchorEl,
    handleMenuClose,
    isMenuOpen) => {

    const { logout } = useContext(LoginContext)

    return <Menu
        anchorEl={ anchorEl }
        anchorOrigin={ {
            vertical: 'top',
            horizontal: 'right',
        } }
        id={ menuId }
        keepMounted
        transformOrigin={ {
            vertical: 'top',
            horizontal: 'right',
        } }
        open={ isMenuOpen }
        onClose={ handleMenuClose }
    >
        <MenuItem onClick={ handleMenuClose }>Profile</MenuItem>
        <MenuItem onClick={ handleMenuClose }>My account</MenuItem>
        <Divider />
        <MenuItem onClick={ logout }>Logout</MenuItem>
    </Menu>
}