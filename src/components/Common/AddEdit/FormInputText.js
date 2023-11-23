import React from 'react';
import { TextField } from '@material-ui/core';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormInputText = ({
    control, field, classes, watch, errors,
}) => {
    const isDepReq = field.requiredDependent ? watch(field.requiredDependent) : false;
    const {
        field: {
            onChange, name, value, ref,
        },
    } = useController({
        name: field.name,
        control,
        rules: {
            required: field.required ? true : isDepReq,
        },
        onChange: field.onChange,
    });
    return (
        <TextField
            onChange={onChange}
            value={(field?.inputType === 'number' || value) ? value : ''}
            name={name}
            placeholder={field.placeholder}
            inputRef={ref}
            className={classes.inputField}
            fullWidth={!!field.fullWidth}
            disabled={!!(field?.controlFieldName && !!watch(field?.controlFieldName))}
            inputProps={{
                className: classes.inputField, pattern: field.pattern || undefined, min: field?.inputType === 'number' ? 0 : undefined, ...field?.props,
            }}
            defaultValue={field?.inputType === 'number' && field?.defaultValue === 0 ? 0 : undefined}
            error={!!(errors && errors[name])}
            helperText={errors && errors[name] ? (errors[name]?.message || ('This field is required')) : ''}
            style={{ minWidth: '250px' }}
            type={field?.inputType || 'text'}
        />
    );
};
FormInputText.propTypes = {
    control: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
    classes: PropTypes.object,
    watch: PropTypes.func,
    errors: PropTypes.object,
};
FormInputText.defaultProps = {
    classes: {},
    watch: null,
    errors: {},
};
export default FormInputText;
