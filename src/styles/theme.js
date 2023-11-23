import { createTheme } from '@material-ui/core/styles';

const palette = {
    primary: {
        main: '#21baeb',
        bgcolor: '#21baeb',
        color: '#54237f',
        lightBg: 'rgba(0, 0, 0, .015)',
        sidebarBg: 'rgba(0, 0, 0, .03)',
        white: '#FFFFFF',
        black: '#000000',
        normalLight: 'rgba(0, 0, 0, .96)',
        mediumLight: 'rgba(0, 0, 0, .54)',
        light2: 'rgba(0,0,0,0.87)',
        redButton: '#f44336',
        resetBtn: '#f44336',
        cancelBtn: '#ffc107',
        errMsg: '#FF0000',
        placeHolder: 'rgba(0, 0, 0, 0.38)',
        inputBorder: 'rgba(0, 0, 0, 0.12)',
        activeBack: '#fafafa',
        menuBack: 'rgba(255,255,255,0.95)',
    },
    secondary: {
        main: '#ffc107',
    },
};
const brandsConfig = {
    LOCAL: {
        palette,
        spacing: 8,
        typography: {
            fontFamily: '"Roboto", Helvetica Neue, sans-serif',
            fontSize: 14,
            font_weight_bold: 700,
            font_weight_normal: 400,
            font_weight_light: 300,
            sidebarItem: '.875rem',
            sidebarUser: 13,
        },
        sidebar: {
            itemHeight: '48px',
        },
    },
};
const theme = createTheme(brandsConfig.LOCAL);

export default theme;
