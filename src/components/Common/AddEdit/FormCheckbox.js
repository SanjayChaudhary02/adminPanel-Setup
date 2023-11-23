import React from 'react';
import { Checkbox } from '@material-ui/core';
import { useController } from 'react-hook-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';

const FormCheckbox = ({ control, field, watch }) => {
    const {
        field: {
            onChange, name, value, ref,
        },
    } = useController({
        name: field.name,
        control,
        rules: { required: !!field.required },
        defaultValue: field.value,
        onChange: (e) => { field?.onChange?.(e); },
    });

    return (
        <FormControlLabel
            control={(
                <Checkbox
                    onChange={onChange}
                    value={value}
                    name={name}
                    inputRef={ref}
                    checked={value === 'true' || value === true}
                />
            )}
            label={(field.conditionalLabel?.condition && field.conditionalLabel?.condition === field.conditionalLabel.value && field.conditionalLabel?.label && (field.conditionalLabel.condition ? field.conditionalLabel.label : field.label)) || field.label}
            disabled={!!(field?.controlFieldName && !!watch(field?.controlFieldName))}
        />
    );
};
FormCheckbox.propTypes = {
    control: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
    watch: PropTypes.func,
};
FormCheckbox.defaultProps = {
    watch: null,
};
export default FormCheckbox;
