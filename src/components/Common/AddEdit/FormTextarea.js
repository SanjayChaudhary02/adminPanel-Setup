import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormTextarea = ({
    control, field, classes, watch,
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
    return (
        <TextareaAutosize
            variant="standard"
            multiline="true"
            minRows={2}
            maxRows={2}
            onChange={onChange}
            value={value}
            name={name}
            ref={ref}
            className={classes.textareaField}
            style={{ width: field.fullWidth ? '100%' : '50%' }}
            disabled={!!(field?.controlFieldName && !!watch(field?.controlFieldName))}
            placeholder={field.placeholder}
        />
    );
};
FormTextarea.propTypes = {
    control: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
    classes: PropTypes.object,
    watch: PropTypes.func,
};
FormTextarea.defaultProps = {
    classes: {},
    watch: null,
};
export default FormTextarea;
