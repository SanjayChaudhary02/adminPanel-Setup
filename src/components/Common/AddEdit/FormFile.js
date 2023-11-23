import React, { useState } from 'react';
import { Input, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormFile = ({
    control, field, classes, watch, resetField,
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
    });
    const [fileName, setFileName] = useState(value);
    return (
        <>
            <InputLabel htmlFor={name}>
                <Input
                    inputProps={{
                        accept: field?.acceptType,
                    }}
                    type="file"
                    onChange={(e) => {
                        field?.onChange?.({ file: e?.target?.files?.[0], name: name || field?.name });
                        if (field?.acceptedFormat && !field.acceptedFormat?.includes(e?.target?.files?.[0]?.name?.split('.')?.pop()?.toLowerCase())) {
                            resetField(name, { defaultValue: '' });
                            setFileName('');
                        } else {
                            onChange(e?.target?.files);
                            setFileName(e?.target?.files?.[0]?.name);
                        }
                    }}
                    name={name}
                    inputRef={ref}
                    id={name}
                    disabled={!!(field?.controlFieldName && !!watch(field?.controlFieldName))}
                    className={`${classes.hiddenInput} ${classes.inputField}`}
                />
                <Button variant="contained" component="span" className={classes.primeButton}>
                    {(field.getLabel && field.getLabel(field)) || 'Choose File'}
                </Button>
            </InputLabel>
            { field.noLabel ? '' : <span className={classes.uploadLabel}>{fileName || value?.name || value || field.placeholder || 'No file chosen'}</span> }
        </>
    );
};
FormFile.propTypes = {
    control: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
    classes: PropTypes.object,
    watch: PropTypes.func,
    resetField: PropTypes.func,
};
FormFile.defaultProps = {
    classes: {},
    watch: null,
    resetField: null,
};
export default FormFile;
