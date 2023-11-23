import React from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormAutoComplete = ({
    control, field, classes, resetField, errors,
}) => {
    const {
        field: {
            onChange, name, value, ref,
        },
    } = useController({
        name: field.name,
        control,
        rules: { required: !!field.required },
        defaultValue: field.value,
        onChange: field.onChange,
    });
    const filter = createFilterOptions();
    const getValue = (val) => {
        const res = field.options.length > 0 && field.options.find((item) => item.id === val);
        return res || val;
    };
    const onAutoChange = (newValue) => {
        if (newValue?.inputValue) {
            resetField(field?.name, { defaultValue: newValue });// Create a new value from the user input
        }
        onChange(newValue);
        field?.onChange?.(newValue);
    };
    return (
        <Autocomplete
            name={name}
            value={(typeof value === 'object' && value) || getValue(value) || ''}
            onChange={(_event, newValue) => onAutoChange(newValue)}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);
                // Suggest the creation of a new value
                if (params.inputValue !== '' && field.allowCreate) {
                    filtered.push({
                        inputValue: params.inputValue,
                        name: params.inputValue,
                    });
                }
                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            clearOnEscape
            handleHomeEndKeys
            options={field.options}
            ref={ref}
            className={classes.inputField}
            getOptionLabel={(option) => ((typeof option === 'string' && option) || option.inputValue || option.name || '')}
            renderOption={(option) => option.name}
            onClose={(event) => {
                if (field?.allowCreate && event?.target?.value && typeof event?.target?.value === 'string') {
                    const newValue = {
                        inputValue: event?.target?.value,
                        name: event?.target?.value,
                    };
                    onAutoChange(newValue);
                }
                return true;
            }}
            disabled={!!field.isDisabled}
            renderInput={(params) => (
                <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    label={field.placeholder}
                    inputRef={ref}
                    error={!!(errors && errors[name])}
                    helperText={errors && errors[name] ? ('This field is required') : ''}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
};
FormAutoComplete.propTypes = {
    control: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
    classes: PropTypes.object,
    resetField: PropTypes.func,
    errors: PropTypes.object,
};
FormAutoComplete.defaultProps = {
    classes: {},
    resetField: null,
    errors: {},
};
export default FormAutoComplete;
