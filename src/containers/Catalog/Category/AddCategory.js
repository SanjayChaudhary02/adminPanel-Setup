import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import GetWrappedField from '../../../components/Common/AddEdit/FieldWrapper';
import { onAdd, getData, resetData } from '../../../store/ducks/addEdit/addEdit-actions';
import { resetStatus } from '../../../store/ducks/common/common-actions';
import { onImageUpload } from '../../../store/ducks/imageUpload/imageUpload-actions';
import { removeUnusedKeys } from '../../../components/Common/Helper/CommonHelper';
import Styles from '../../../components/Common/AddEdit/AddStyle';
import AppConfig from '../../../config/app.config';

const AddCategory = ({
    actions, classes, match, CategoryData, addStatus, history,
}) => {
    const editId = match?.params?.id || 0;
    const pageTitle = `${editId ? 'Edit' : 'Add'} Category`;
    const {
        handleSubmit, control, watch, reset, formState: { errors, isSubmitting, isSubmitSuccessful }, resetField, setError,
    } = useForm({ defaultValues: CategoryData });
    useEffect(() => {
        if (editId) {
            actions.getData({ id: parseInt(editId, 10) });
        }
        actions.resetStatus();
        return () => actions.resetData();
    }, []);
    //name, url-key, meta_title, meta_key, meta_desc, cat_image, starting_price, available_product_listing_sortby
    const fields = [
        {
            name: 'name', label: 'Name', placeholder: 'Name', type: 'text', required: true,
        },
        {
            name: 'parent_cat', label: 'Parent Category', type: 'autocomplete', options: [{ id: 'root', name: 'Root'}],
        },
        {
            name: 'url_key', label: 'URL Key', placeholder: 'URL Key', type: 'text', required: true,
        },
        {
            name: 'meta_title', label: 'Meta Title', placeholder: 'Meta Title', type: 'text',
        },
        {
            name: 'meta_key', label: 'Meta Key', placeholder: 'Meta Key', type: 'text',
        },
        {
            name: 'meta_desc', label: 'Meta Desc', placeholder: 'Meta Desc', type: 'text',
        },
        {
            name: 'cat_image', label: 'Category Image', placeholder: 'Category Image', type: 'file',
        },
        {
            name: 'starting_price', label: 'Starting Price', placeholder: 'Starting Price', type: 'text',
        },
        {
            name: 'status', label: 'Status', type: 'switch', inline: true, value: 'disabled', options: [{id: 'disabled', name: 'disabled'}, {id: 'enabled', name: 'enabled'}]
        },
        {
            name: 'config_data', label: 'Configuration', placeholder: 'Configuration JSON', type: 'textField',
        },
        {
            name: 'product_option', label: 'Product Options', placeholder: 'Product Options JSON', type: 'textField',
        },
    ];
    const initialValue = {
        name: '',
        rFile: {},
    };
    const [defaultValues, setDefaultValue] = useState(initialValue);
    useEffect(() => {
        if (editId && CategoryData) {
            setDefaultValue({ ...CategoryData });
        }
    }, [CategoryData, editId]);
    const onAdd = (data) => {
        // eslint-disable-next-line no-underscore-dangle
        let formData = {
            ...data, isAdd: !editId,
        };
        const keyInit = { ...initialValue };
        formData = removeUnusedKeys([...Object.keys(keyInit)], formData);
        if (editId) {
            actions.onAdd({ id: editId, data: formData, history, url: `${AppConfig?.API_ENDPOINT}/category/editDetail/${editId}` });
        } else {
            actions.onAdd({ data: formData, history, url: `${AppConfig?.API_ENDPOINT}/category/addDetail` });
        }
    };
    const [isSubmitted, setIsSubmitted] = useState(false);
    useEffect(() => {
        setIsSubmitted(isSubmitSuccessful);
    }, [isSubmitSuccessful]);
    useEffect(() => {
        setIsSubmitted(addStatus.addStatus === 'success');
    }, [addStatus]);
    return (
            <div>
                <form onSubmit={handleSubmit((data) => onAdd(data))}>
                    <div className={classes.formContainer} style={{ padding: '20px' }}>
                        {fields?.map((fieldItem) => (
                            <Fragment key={fieldItem?.name}>
                                <GetWrappedField field={{ ...fieldItem, additionalClass: classes.wrapper50 }} control={control} classes={classes} watch={watch} key={fieldItem?.name} errors={errors} resetField={resetField} />
                                {fieldItem?.divider && <Divider />}
                            </Fragment>
                        ))}
                    </div>
                    <Button type="submit" variant="contained" color="primary" className={classes.primeButton} disabled={isSubmitting || isSubmitted}>Submit</Button>
                </form>
            </div>
    );
};
const mapStateToProps = ({ addEdit, common }) => ({
    data: addEdit.editData,
    addStatus: common.addStatus,

});
const mapDispatchToProps = (dispatch) => ({
    actions: {
        onAdd: bindActionCreators(onAdd, dispatch),
        getData: bindActionCreators(getData, dispatch),
        resetData: bindActionCreators(resetData, dispatch),
        resetStatus: bindActionCreators(resetStatus, dispatch),
        onImageUpload: bindActionCreators(onImageUpload, dispatch),
    },
});
AddCategory.propTypes = {
    actions: PropTypes.object,
    classes: PropTypes.object,
    match: PropTypes.object,
    CategoryData: PropTypes.object,
    addStatus: PropTypes.object,
    history: PropTypes.object,
    permissions: PropTypes.array,
};
AddCategory.defaultProps = {
    actions: {},
    classes: {},
    match: {},
    CategoryData: {},
    addStatus: {},
    history: {},
    permissions: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(AddCategory));
