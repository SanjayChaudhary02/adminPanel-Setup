import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Styles from '../../../components/Listing/listingStyle';
import Listing from '../../../components/Listing/Listing';
import {
    getList, deleteById,
} from '../../../store/ducks/list/list-actions';
import AppConfig from '../../../config/app.config';

const Categorys = ({
    classes, actions, categoryList, totalCount,
}) => {
    const pageTitle = 'Manage Category';
    const searchTitle = 'Category List';
    const [name, setName] = useState('');
    
    const searchFields = [
        {
            type: 'textfield', props: { id: 'categoryName', label: 'Category Name' }, val: name, handlerFun: setName,
        }
    ];
    const buttonGroup = [
        <Link to={`${AppConfig.ROUTE_PATH}/catalog/category/add`} className={classes.actionBtn} key="addBtn"><Button variant="outlined" className={classes.lightButton}><AddIcon /><span className={classes.btnLabel}>Add Category</span></Button></Link>,
    ];
    const columns = [
        {
            field: 'id', headerName: 'Category Id', width: 130, flex: 1, resizable: false, sortable: false,
        },
        {
            field: 'name', headerName: 'Category Name', width: 150, flex: 1, sortable: false,
        },
        {
            field: 'parent_cat', headerName: 'Parent Category', width: 150, flex: 1, sortable: false,
        },
        {
            field: 'url_key', headerName: 'URL Key', width: 150, flex: 1, sortable: false,
        },
        {
            field: 'status', headerName: 'Status', width: 130, flex: 1, sortable: false, valueFormatter: (params) => (params.value === true ? 'Active' : 'Inactive'),
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            flex: 1,
            sortable: false,
            renderCell: (params) => {
                const onDelete = (e) => {
                    e.stopPropagation();
                    // openPopup(deletePopup(params?.id));
                };
                return (params.id ? (
                    <>
                        <Link to={`${AppConfig.ROUTE_PATH}/catalog/categorys/edit/${params?.row?.id}`} className={classes.actionBtn}><EditIcon /></Link>
                        <Button onClick={onDelete} className={`${classes.noPad} ${classes.actionBtn}`}><DeleteIcon /></Button>
                    </>
                )
                    : '');
            },
        },
    ];
    const fetchList = (data) => actions.fetchCategoryList({...data, url: `${AppConfig?.API_ENDPOINT}/category/fetchDetail`});
    return (
        <>
            <Listing
                pageTitle={pageTitle}
                buttonGroup={buttonGroup}
                columns={columns}
                rows={categoryList}
                searchTitle={searchTitle}
                searchFields={searchFields}
                totalCount={totalCount}
                fetchList={fetchList}
            />
        </>
    );
};

Categorys.propTypes = {
    actions: PropTypes.object,
    categoryList: PropTypes.array,
    totalCount: PropTypes.number,
    classes: PropTypes.object,
};
Categorys.defaultProps = {
    actions: {},
    categoryList: [],
    totalCount: 10,
    classes: {},
};

const mapStateToProps = ({ list }) => ({
    categoryList: list.list,
    totalCount: list.totalCount,
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        fetchCategoryList: bindActionCreators(getList, dispatch),
        deleteCategoryItem: bindActionCreators(deleteById, dispatch),
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(Categorys));
