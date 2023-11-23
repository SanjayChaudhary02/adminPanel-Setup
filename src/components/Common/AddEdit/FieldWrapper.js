import React, { Suspense, lazy } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const FormInputText = lazy(() => import('./FormInputText'));
const FormTextarea = lazy(() => import('./FormTextarea'));
const FormFile = lazy(() => import('./FormFile'));
const FormRadio = lazy(() => import('./FormRadio'));
const FormCheckbox = lazy(() => import('./FormCheckbox'));
const FormSwitch = lazy(() => import('./FormSwitch'));
const FormAutoComplete = lazy(() => import('./FormAutoComplete'));

const getFormComp = (fieldType, props) => {
    const {
        field, control, watch, classes, resetField, getValues, errors,
    } = props;
    return (
        <Suspense>
            {(fieldType === 'text' && <FormInputText field={field} control={control} watch={watch} classes={classes} resetField={resetField} getValues={getValues} errors={errors} />)
                || (fieldType === 'textField' && <FormTextarea field={field} control={control} watch={watch} classes={classes} resetField={resetField} getValues={getValues} errors={errors} />)
                || (fieldType === 'file' && <FormFile field={field} control={control} watch={watch} classes={classes} resetField={resetField} getValues={getValues} errors={errors} />)
                || (fieldType === 'radio' && <FormRadio field={field} control={control} watch={watch} classes={classes} resetField={resetField} getValues={getValues} errors={errors} />)
                || (fieldType === 'checkbox' && <FormCheckbox field={field} control={control} watch={watch} classes={classes} resetField={resetField} getValues={getValues} errors={errors} />)
                || (fieldType === 'switch' && <FormSwitch field={field} control={control} watch={watch} classes={classes} resetField={resetField} getValues={getValues} errors={errors} />)
                || (fieldType === 'autocomplete' && <FormAutoComplete field={field} control={control} watch={watch} classes={classes} resetField={resetField} getValues={getValues} errors={errors} />)}
        </Suspense>
    );
};

const GetWrappedField = (props) => {
    const {
        field, classes, watch, children, getValues,
    } = props;
    const fieldType = field?.type;
    return (field?.conditionalRemove && field?.conditionalRemove?.condition && watch(field?.conditionalRemove?.condition) === field?.conditionalRemove?.value) || (
        <div className={`${classes.inputWrapper} ${field?.inline ? classes.inlineWrapper : ''} ${field?.type === 'button' ? classes.smallButton : ''} ${field?.additionalClass}`} key={field?.name}>
            {field?.type !== 'checkbox' && field?.label && <label className={classes.inputLabel} htmlFor={field?.name}>{`${field?.label}${field?.required ? '*' : ''}`}</label>}
            {children || (fieldType && getFormComp(fieldType, props))}
            {(field?.postfix?.type === 'button' && ((field?.postfix?.conditionalRemove && field?.postfix?.conditionalRemove?.condition && watch(field?.postfix?.conditionalRemove?.condition) === field?.postfix?.conditionalRemove?.value) || (<Button variant="contained" color="primary" onClick={() => field?.postfix?.callback?.(getValues(field?.reqParams))} className={`${classes.primeButton} ${classes.leftMargin}`}>{field?.postfix?.title}</Button>))) || field?.postfix?.component}
        </div>
    );
};
GetWrappedField.propTypes = {
    field: PropTypes.object.isRequired,
    classes: PropTypes.object,
    watch: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    getValues: PropTypes.func,
};
GetWrappedField.defaultProps = {
    classes: {},
    watch: null,
    children: '',
    getValues: null,
};
export default GetWrappedField;
