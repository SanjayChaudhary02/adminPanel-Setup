import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import Searchbar from './Searchbar';
import Styles from './listingStyle';
import useFirstRender from '../../components/Listing/FirstRender';
import { resetStatus } from '../../store/ducks/common/common-actions';
import ConfirmDialog from '../../components/Common/Alert/ConfirmDialog';


const Listing = (props) => {
    const {
        breadcrumsItem, buttonGroup, rows, columns, totalCount, rowPerPage, pageMode, classes, searchFields, searchTitle, statusGroup, customButtonGroup, fetchList, actions,
    } = props;
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(true);
    const getParams = (pageNo) => ({
        page: pageNo || 1, limit,
    });
    const refineSearchResults = (data) => {
        setLoading(true);
        fetchList(data || getParams());
    };
    const onSubmit = () => (refineSearchResults());
    const onReset = () => {
        // setName('');
        setPage(0);
        return refineSearchResults({ page: 1, limit });
    };
    useEffect(() => {
        refineSearchResults();
        return () => actions.resetStatus();
    }, []);
    const firstRender = useFirstRender();
    useEffect(() => {
        if (!firstRender) {
            refineSearchResults(getParams(page + 1));
        }
    }, [page]);
    useEffect(() => {
        if (!firstRender) {
            if (page === 0) {
                refineSearchResults(getParams(1));
            } else {
                setPage(0);
            }
        }
    }, [limit]);
    useEffect(() => (setLoading(false)), [rows]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [currentPopup, setCurrentPopup] = useState({});
    const openPopup = (popupName) => {
        setCurrentPopup(popupName);
        setShowConfirm(true);
    };
    const deletePopup = (deleteId) => ({
        title: 'Delete Font',
        message: 'Are you sure you want to delete this font?',
        actionBtn: [<Button key="ok" onClick={() => { setShowConfirm(false); actions.deleteFontItem({ id: deleteId }); }} className={`${classes.primeButton} ${classes.whiteLabel}`}>OK</Button>, <Button key="cancel" onClick={() => setShowConfirm(false)} className={`${classes.redButton} ${classes.cancelBtnPopup}`}>Cancel</Button>],
    });
    
    return (
        <>
            {buttonGroup && buttonGroup.length > 0 && (
                <div className={classes.buttonWrapper}>
                    <div className={`${classes.right}`}>
                        {buttonGroup}
                    </div>
                </div>
            )}
            <div className={classes.listWrapper}>
                {onSubmit && (
                    <Searchbar
                        searchFields={searchFields}
                        resetHandler={onReset}
                        submitHandler={onSubmit}
                        searchTitle={searchTitle}
                        statusGroup={statusGroup}
                        customButtonGroup={customButtonGroup}
                    />
                )}
                <div className={classes.gridWrapper}>
                    <div style={{ flexGrow: 1 }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={limit}
                                onPageSizeChange={(newPageSize) => setLimit(newPageSize)}
                                rowsPerPageOptions={rowPerPage}
                                page={page}
                                onPageChange={(newPage) => setPage(newPage)}
                                paginationMode={pageMode}
                                rowCount={totalCount}
                                disableColumnMenu
                            />
                    </div>
                </div>
            </div>
            {showConfirm && currentPopup?.title && currentPopup?.actionBtn && <ConfirmDialog title={currentPopup.title} actionBtns={currentPopup.actionBtn} open>{currentPopup?.message}</ConfirmDialog>}
            </>
    );
};
Listing.propTypes = {
    buttonGroup: PropTypes.array,
    rows: PropTypes.array,
    columns: PropTypes.array,
    rowPerPage: PropTypes.array,
    page: PropTypes.number,
    pageMode: PropTypes.string,
    classes: PropTypes.object,
    searchFields: PropTypes.array,
    resetHandler: PropTypes.func,
    submitHandler: PropTypes.func,
    searchTitle: PropTypes.string,
    statusGroup: PropTypes.object,
    customButtonGroup: PropTypes.object,
    totalCount: PropTypes.number,
    fetchList: PropTypes.func,
    actions: PropTypes.object,
};
Listing.defaultProps = {
    buttonGroup: [],
    rows: [],
    columns: [],
    rowPerPage: [2, 5, 10, 25, 100],
    pageMode: 'server',
    classes: {},
    searchFields: [],
    resetHandler: null,
    submitHandler: null,
    searchTitle: '',
    statusGroup: null,
    customButtonGroup: null,
    totalCount: 100,
    fetchList: null,
    actions: {},
};
const mapStateToProps = () => ({

});
const mapDispatchToProps = (dispatch) => ({
    actions: {
        resetStatus: bindActionCreators(resetStatus, dispatch),
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(Listing));
