import React from 'react';
import Switch from '@material-ui/core/Switch';
import { useController } from 'react-hook-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';

const FormSwitch = ({ control, field, watch }) => {
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
    return (
        <FormControlLabel
            control={(
                <Switch
                    onChange={onChange}
                    value={value || false}
                    checked={value || false}
                    name={name}
                    inputRef={ref}
                />
            )}
            label={field.switchLabel}
            disabled={!!(field?.controlFieldName && !!watch(field?.controlFieldName))}
        />
    );
};
FormSwitch.propTypes = {
    control: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
    watch: PropTypes.func,
};
FormSwitch.defaultProps = {
    watch: null,
};
export default FormSwitch;
