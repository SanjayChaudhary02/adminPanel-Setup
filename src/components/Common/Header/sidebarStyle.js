const drawerWidth = 240;
const Styles = ((theme) => {
    const { palette, typography, sidebar } = theme;
    return {
        bodyWrapper: {
            fontWeight: 400,
            fontSize: '.875rem',
            color: palette.primary.light2,
            lineHeight: 1.5,
            fontFamily: typography.fontFamily,
        },
        mainContainer: {
            marginRight: 0,
            position: 'relative',
            display: 'block',
            height: '100%',
            overflow: 'auto',
        },
        mainMargin: {
            marginLeft: '240px',
            transition: '0.2s',
        },
        mainWrapper: {
            padding: 10,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        subDrawer: {
            position: 'fixed',
            left: drawerWidth,
            height: '100%',
            zIndex: 9999,
            width: 550,
            backgroundColor: '#4a4542',
            padding: '30px',
            color: 'white',
        },
        drawerPaper: {
            width: drawerWidth,
            border: '0',
            boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
        },
        drawerBg: {
            backgroundColor: palette.primary.menuBack,
            height: '100%',
        },
        toolbar: {
            paddingRight: '24px',
            backgroundColor: palette.primary.bgcolor,
        },
        right: {
            marginLeft: 'auto',
            transition: '0.3s',
        },
        branding: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
            maxWidth: '15rem',
            height: '64px',
            lineHeight: '64px',
            top: 0,
            left: 0,
            zIndex: 9999,
        },
        appLogoText: {
            width: 'auto',
            height: '100%',
            backgroundColor: palette.primary.white,
            paddingTop: '10px',
            boxSizing: 'border-box',
        },
        appUser: {
            textAlign: 'center',
            width: '100%',
            padding: '1rem 0 .4rem',
            fontFamily: typography.fontFamily,
            background: palette.primary.white,
        },
        appUserPhoto: {
            width: '64px',
            margin: '0 auto 8px',
            height: '64px',
        },
        appUserImg: {
            width: '100%',
            height: 'auto',
            borderRadius: '50%',
        },
        appUsername: {
            fontSize: typography.sidebarItem,
            fontWeight: typography.font_weight_light,
            color: palette.primary.normalLight,
            marginLeft: '-2px',
            transition: '0.3s',
        },
        appUserLock: {
            fontSize: typography.sidebarUser,
            lineHeight: typography.sidebarUser,
            height: typography.sidebarUser,
            width: typography.sidebarUser,
            color: palette.primary.mediumLight,
        },
        menuContainer: {
            color: palette.primary.light2,
            fontFamily: typography.fontFamily,
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        },
        sidebarListItem: {
            maxHeight: '48px',
            overflow: 'hidden',
            transition: 'all .3s cubic-bezier(.35, 0, .25, 1)',
            outline: 'none',
            cursor: 'pointer',
        },
        sidebarContent: {
            fontSize: typography.sidebarItem,
            display: 'block',
            overflow: 'hidden',
            width: '100%',
            transition: 'max-height .3s cubic-bezier(.35, 0, .25, 1)',
            flexDirection: 'row',
            alignItems: 'center',
            boxSizing: 'border-box',
            position: 'relative',
            height: sidebar.itemHeight,
            padding: '0 16px 0 0',
            zIndex: 99,
            color: palette.primary.light2,
            '&:hover': {
                background: palette.primary.sidebarBg,
            },
        },
        sidebarListActive: {
            background: palette.primary.lightBg,
            color: palette.primary.color,
        },
        sideIcon: {
            display: 'inline-block',
            textAlign: 'center',
            marginRight: '8px',
            height: sidebar.itemHeight,
            width: sidebar.itemHeight,
            lineHeight: sidebar.itemHeight,

        },
        mIcon: {
            width: 24,
            height: 48,
        },
        sideIconActive: {
            background: palette.primary.bgcolor,
            color: palette.primary.white,
        },
        sideLabelActive: {
            color: palette.primary.color,
        },
        sidebarLabel: {
            alignItems: 'center',
            height: sidebar.itemHeight,
            padding: '0 16px 0 0',
            zIndex: 99,
            lineHeight: '21px',
            verticalAlign: 'top',
            display: 'inline-block',
        },
        breadcrumsWrapper: {
            backgroundColor: palette.primary.white,
            width: '100%',
            height: '40px !important',
            minHeight: '40px !important',
            padding: '0 .666rem',
            paddingLeft: 10,
            float: 'left',
            boxShadow: '0 3px 1px -2px rgb(0 0 0 / 8%), 0 2px 2px 0 rgb(0 0 0 / 5%), 0 1px 5px 0 rgb(0 0 0 / 5%)',
            marginBottom: 10,
            lineHeight: 40,
        },
        breadItem: {
            lineHeight: '40px',
            color: palette.primary.light2,
            textTransform: 'uppercase',
            '&:hover': {
                textDecoration: 'none',
            },
        },
        pageTitle: {
            padding: '25px 0px 10px',
            marginBottom: '.5rem',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'inherit',
            fontSize: '24px',
        },
        headerContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '21px',
        },
        header: {
            color: 'white',
            fontWeight: 600,
        },
        crossIcon: {
            color: '#9a928d',
            cursor: 'pointer',
        },
        itemHeader: {
            color: '#9a928d',
        },
        menuItem: {
            color: 'white',
            fontSize: '16px',
            marginBottom: '20px',
            fontWeight: 600,
            cursor: 'pointer',
        },
        subLink: {
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 'normal',
            fontSize: '14px',
        }
    };
});
export default Styles;
