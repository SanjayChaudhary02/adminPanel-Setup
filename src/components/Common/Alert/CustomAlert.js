import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/jsx-props-no-spreading
const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const CustomAlert = ({
    msg, type, closeHandler, autoHideDuration,
}) => {
    const [open, setOpen] = useState(true);
    const handleClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        closeHandler();
    };

    return (
        <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type}>
                {msg}
            </Alert>
        </Snackbar>
    );
};

CustomAlert.propTypes = {
    msg: PropTypes.string,
    type: PropTypes.string,
    closeHandler: PropTypes.func,
    autoHideDuration: PropTypes.number,
};
CustomAlert.defaultProps = {
    msg: '',
    type: 'success',
    closeHandler: null,
    autoHideDuration: 6000,
};
export default CustomAlert;
