import React from 'react';
import { useController } from 'react-hook-form';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';

const FormRadio = ({ control, field, watch }) => {
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
        <RadioGroup
            row
            aria-label={field.name}
            onChange={onChange}
            value={value || ''}
            name={name}
            ref={ref}
            disabled={!!(field?.controlFieldName && !!watch(field?.controlFieldName))}
        >
            {field.options && field.options.length > 0 && (field.options).map((item) => (<FormControlLabel value={item.id} control={<Radio />} key={item.name} label={item.name} />))}
        </RadioGroup>
    );
};
FormRadio.propTypes = {
    control: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
    watch: PropTypes.func,
};
FormRadio.defaultProps = {
    watch: null,
};
export default FormRadio;
