const Styles = ((theme) => {
    const { palette } = theme;
    const buttonCommon = {
        fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
        border: '1px solid rgba(0,0,0,0)',
        boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
        fontWeight: 400,
        padding: '5px 15px',
        textTransform: 'none',
        textDecoration: 'none',
        borderRadius: '2px',
    };
    return {
        primeButton: {
            backgroundColor: palette.primary.bgcolor,
            margin: '0 0 0 10px',
            ...buttonCommon,
            '&:hover': {
                backgroundColor: palette.primary.bgcolor,
                color: palette.primary.white,
            },
        },
        lightButton: {
            backgroundColor: palette.primary.white,
            ...buttonCommon,
            '&:hover': {
                backgroundColor: palette.primary.white,
                color: palette.primary.normalLight,
            },
        },
        redButton: {
            backgroundColor: palette.primary.resetBtn,
            margin: '0 0 0 10px',
            ...buttonCommon,
            '&:hover': {
                backgroundColor: palette.primary.resetBtn,
                color: palette.primary.white,
            },
        },
        buttonWrapper: {
            width: '100%',
            height: '56px',
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
        },
        listWrapper: {
            backgroundColor: '#FFFFFF',
            height: '80vh',
            width: '100%',
            marginTop: '5px',
            padding: '24px',
            borderRadius: '2px',
            boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
            overflowY: 'scroll',
        },
        gridWrapper: {
            display: 'flex',
            height: '100%',
            boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
        },
        noPad: {
            padding: 0,
        },
        sidePad: {
            paddingRight: '10px',
            paddingLeft: '10px',
        },
        actionBtn: {
            lineHeight: 0,
            minWidth: '24px',
            color: palette.primary.light2,
            textDecoration: 'none',
            borderRadius: '2px',
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        cancelBtnPopup: {
            backgroundColor: palette.primary.cancelBtn,
            color: '#000',
            '&:hover': {
                backgroundColor: palette.primary.cancelBtn,
                color: palette.primary.black,
            },
        },
        btnLabel: {
            marginLeft: '5px',
        },
        whiteLabel: {
            color: palette.primary.white,
        },
        iconLabel: {
            padding: '6px 16px',
            alignItems: 'center',
            display: 'flex',
            height: 'auto',
        },
        npBottomPad: {
            paddingBottom: 0,
        },
        topPad: {
            paddingTop: '12px',
            paddingRight: '5px',
        },
        fullSizeWidth: {
            width: '100%',
        },
        '& label.Mui-focused': {
            color: palette.primary.main,
        },
        '& label.Mui-hovered': {
            color: palette.primary.main,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: palette.primary.main,
        },
    };
});
export default Styles;
