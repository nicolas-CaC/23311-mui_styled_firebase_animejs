import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import { navbarData } from '../../data/navbarData';
import { Link } from 'react-router-dom';

export const NavbarDrawer = () => {

    const [state, setState] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };


    return (
        <>
            <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='open drawer'
                sx={ { mr: 2 } }
                onClick={ toggleDrawer(true) }>
                <MenuOutlined />
            </IconButton>

            <Drawer
                anchor='left'
                open={ state }
                onClose={ toggleDrawer(false) }
            >
                { list(toggleDrawer) }
            </Drawer>
        </>
    )
}




const list = (toggleDrawer) => (
    <Box
        sx={ { width: 250 } }
        role="presentation"
        onClick={ toggleDrawer(false) }
        onKeyDown={ toggleDrawer(false) }
    >
        <List>
            { navbarData.map(section => (
                <ListItem key={ section.name } disablePadding>
                    <ListItemButton>
                        <Link
                            to={ section.link }
                            style={ { textDecoration: 'none' } }>
                            <ListItemText primary={ section.name } />
                        </Link>
                    </ListItemButton>
                </ListItem>
            )) }
        </List>
        <Divider />
        <List>
            { ['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={ text } disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            { index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }
                        </ListItemIcon>
                        <ListItemText primary={ text } />
                    </ListItemButton>
                </ListItem>
            )) }
        </List>
    </Box>
);