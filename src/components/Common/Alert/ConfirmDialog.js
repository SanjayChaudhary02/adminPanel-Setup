import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

const ConfirmationDialogRaw = ({
    title, titleClass, actionBtns, open, closeHandler, children, ...other
}) => (
    <Dialog
        open={open}
        onClose={closeHandler}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...other}
    >
        <DialogTitle className={titleClass}>{title}</DialogTitle>
        { children && (
            <DialogContent>
                {children}
            </DialogContent>
        )}
        <DialogActions style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            {actionBtns}
        </DialogActions>
    </Dialog>
);

ConfirmationDialogRaw.propTypes = {
    title: PropTypes.string.isRequired,
    titleClass: PropTypes.string,
    actionBtns: PropTypes.arrayOf(PropTypes.element).isRequired,
    open: PropTypes.bool.isRequired,
    closeHandler: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.bool, PropTypes.instanceOf(null)]),
};
ConfirmationDialogRaw.defaultProps = {
    titleClass: '',
    children: '',
    closeHandler: null,
};

export default ConfirmationDialogRaw;
