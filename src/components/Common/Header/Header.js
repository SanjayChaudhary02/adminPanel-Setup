import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import { styled, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Styles from './sidebarStyle';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerwidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerwidth,
        width: `calc(100% - ${drawerwidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Header = ({
    classes, open, toggleDrawer, drawerWidth,
}) => {
    return (
        <AppBar position="relative" open={open} drawerwidth={drawerWidth}>
            <Toolbar className={classes.toolbar}>
                <Tooltip title="Toggle Hide/Open">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Tooltip>

                <IconButton color="inherit" className={classes.right} onClick={() => console.log('logout')}>
                    <ExitToAppIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
Header.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    toggleDrawer: PropTypes.func,
    drawerWidth: PropTypes.number,
};
Header.defaultProps = {
    classes: {},
    open: true,
    toggleDrawer: null,
    drawerWidth: 0,
};
export default withStyles(Styles)(Header);
