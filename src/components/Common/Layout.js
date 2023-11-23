import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header/Header';
import Styles from './Header/sidebarStyle';
import CustomAlert from '../../components/Common/Alert/CustomAlert';
import { resetStatus } from '../../store/ducks/common/common-actions';

const Layout = ({
    classes, children, actions, alertStatus,
}) => {
    useEffect(() => {
        document.title = 'Admin';
    }, []);
    
    return (
        <>
            <div className={classes.bodyWrapper}>
                <div className={classes.mainContainer}>
                    <Header />
                    <div className={classes.mainWrapper}>
                        {children}
                    </div>
                </div>
            </div>
            {alertStatus?.status && alertStatus?.message && <CustomAlert msg={alertStatus.message} type={alertStatus.status} closeHandler={() => actions.resetStatus()} />}
        </>
    );
};
Layout.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    actions: PropTypes.object,
    alertStatus: PropTypes.object,
};
Layout.defaultProps = {
    classes: {},
    children: null,
    actions: {},
    alertStatus: {},
};
const mapStateToProps = ({ common }) => ({
    alertStatus: common?.status,
});
const mapDispatchToProps = (dispatch) => ({
    actions: {
        resetStatus : bindActionCreators(resetStatus, dispatch),
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(Layout));
