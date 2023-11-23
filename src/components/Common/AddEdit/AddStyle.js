const Styles = ((theme) => {
    const { palette, typography } = theme;
    return {
        formContainer: {
            backgroundColor: palette.primary.white,
            padding: '5px 20px 20px 20px',
            overflowY: 'scroll',
            height: '84vh',
            boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
        },
        inputWrapper: {
            height: '70px',
            position: 'relative',
            fontSize: typography.fontSize,
            color: palette.primary.light2,
            fontFamily: typography.fontFamily,
            display: 'flex',
            alignItems: 'center',
        },
        inlineWrapper: {
            display: 'inline-flex',
            width: '48%',
        },
        smallButton: {
            width: '3%',
        },
        inputLabel: {
            width: '200px',
            minWidth: '200px',
            display: 'inline-block',
        },
        inputField: {
            minWidth: '250px',
            display: 'inline-block',
        },
        textareaField: {
            borderLeft: 'none',
            borderRight: 'none',
            borderTop: 'none',
            display: 'inline-block',
            minWidth: 'calc(100% - 200px)',
            fontSize: typography.fontSize,
            color: palette.primary.light2,
            fontFamily: typography.fontFamily,
            borderBottom: `1px solid ${palette.primary.inputBorder}`,
            borderWidth: 'thin',
            '&:focus': {
                borderBottomColor: palette.primary.main,
            },
        },
        primeButton: {
            backgroundColor: palette.primary.bgcolor,
            margin: '10px 0',
            boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
            height: '32px',
            textTransform: 'capitalize',
            borderRadius: '2px',
            color: palette.primary.white,
            '&:hover': {
                backgroundColor: palette.primary.bgcolor,
                color: palette.primary.white,
            },
        },
        lightButton: {
            backgroundColor: palette.primary.white,
            textTransform: 'capitalize',
            borderRadius: '2px',
            padding: '10px 10px',
            '&:hover': {
                backgroundColor: palette.primary.white,
                color: palette.primary.normalLight,
            },
        },
        inlineTitle: {
            width: '80%',
            display: 'inline-block',
        },
        deleteWrapper: {
            display: 'inline-block',
            width: '20%',
            float: 'right',
            textAlign: 'right',
        },
        redBtn: {
            backgroundColor: palette.primary.redButton,
            textTransform: 'capitalize',
            color: palette.primary.white,
            right: '20px',
            top: '20px',
            borderRadius: '2px',
            display: 'inline-flex',
            lineHeight: 1.43,
            '&:hover': {
                backgroundColor: palette.primary.redButton,
                color: palette.primary.white,
            },
        },
        leftMargin: {
            marginLeft: '10px',
        },
        uploadLabel: {
            whiteSpace: 'nowrap',
            marginLeft: '10px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        },
        hiddenInput: {
            display: 'none !important',
        },
        disabled: {
            opacity: '.5',
            pointerEvents: 'none',
        },
        '& label.Mui-focused': {
            color: palette.primary.main,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: palette.primary.main,
        },
        'textarea:focus': {
            borderBottomColor: palette.primary.main,
        },
    };
});
export default Styles;
