const Styles = ((theme) => {
    const { palette } = theme;
    const buttonCommon = {
        fontWeight: 400,
        textTransform: 'none',
        borderRadius: '2px',
        boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
        height: '36px',
        minWidth: '88px',
    };
    const placeHolder = {
        '& label': {
            fontSize: '14px',
            fontWeight: 400,
            color: palette.primary.placeHolder,
            font: 'inherit',
            lineHeight: 1.2,
            '&$focused': {
                color: palette.primary.main,
            },
        },
        '&:hover': {
            '&:before': {
                borderBottom: `1px solid ${palette.primary.bgcolor}`,
            },
        },
        '& :before': {
            transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            borderBottom: `1px solid ${palette.primary.inputBorder}`,
        },
    };
    return {
        textMuted: {
            fontWeight: 400,
            marginTop: 0,
            marginBottom: '8px',
            lineHeight: 1,
        },
        searchWrapper: {
            width: '100%',
        },
        cards: {
            boxShadow: 'none',
        },
        cardContent: {
            padding: 0,
        },
        filterSelect: {
            height: '70px',
            margin: '0 10px',
            color: palette.primary.bgcolor,
            ...placeHolder,
        },
        filterOption: {
            lineHeight: '48px',
            height: '48px',
            padding: '0 16px',
            fontSize: '.875rem',
        },
        filterInput: {
            height: '70px',
            minWidth: '200px',
            color: palette.primary.bgcolor,
            ...placeHolder,
        },
        fullWidth: {
            width: '100%',
        },
        oneHalf: {
            width: '49.5%',
        },
        oneThird: {
            width: '33%',
        },
        oneForth: {
            width: '25%',
        },
        fieldWrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
        },
        buttonWrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        },
        placeRight: {
            marginLeft: 'auto',
        },
        primeButton: {
            backgroundColor: palette.primary.bgcolor,
            ...buttonCommon,
            '&:hover': {
                backgroundColor: palette.primary.bgcolor,
                color: palette.primary.white,
            },
        },
        resetButton: {
            backgroundColor: palette.primary.resetBtn,
            ...buttonCommon,
            '&:hover': {
                backgroundColor: palette.primary.resetBtn,
                color: palette.primary.white,
            },
        },
        '& label.Mui-focused': {
            color: palette.primary.main,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: palette.primary.main,
        },
    };
});
export default Styles;
