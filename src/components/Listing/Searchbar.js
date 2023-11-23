import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import RefreshIcon from '@material-ui/icons/Cached';
import PropTypes from 'prop-types';
import Styles from './searchbarStyle';

const Searchbar = ({
    classes, searchFields, resetHandler, submitHandler, searchTitle, customButtonGroup, statusGroup,
}) => {
    let fieldClass;
    const searchFieldsLength = searchFields?.length;
    if (searchFieldsLength === 1) {
        fieldClass = classes.fullWidth;
    } else if (searchFieldsLength === 2) {
        fieldClass = classes.oneHalf;
    } else if (searchFieldsLength === 3) {
        fieldClass = classes.oneThird;
    } else {
        fieldClass = classes.oneForth;
    }
    const generateForm = searchFields?.map((searchItem) => {
        let filterOption = '';
        if (searchItem?.type === 'textfield') {
            filterOption = <TextField key={searchItem?.props?.label} id={searchItem?.props?.id} label={searchItem?.props?.label} value={searchItem?.val} onChange={(e) => searchItem?.handlerFun(e?.target?.value)} variant="standard" disabled={searchItem?.props?.disabled || false} className={`${classes.filterInput} ${fieldClass}`} inputProps={{ maxLength: searchItem?.props?.maxlength }} />;
        } else if (searchItem?.type === 'select') {
            const options = [{ id: 0, name: searchItem?.props?.label }];
            if (searchItem?.options) {
                options.push(...searchItem.options);
            }
            const listItems = options?.map((item) => (<MenuItem value={item?.id} key={item?.id} className={classes.filterOption}>{item?.name}</MenuItem>));
            filterOption = (
                <FormControl key={searchItem?.props?.label} value={searchItem?.val} onChange={(e) => searchItem?.handlerFun(e?.target?.value)} className={`${classes.filterSelect} ${fieldClass}`}>
                    <InputLabel id={searchItem?.props?.labelId}>{searchItem?.props?.label}</InputLabel>
                    <Select
                        labelId={searchItem?.props?.labelId}
                        id={searchItem?.props?.id}
                        value={searchItem?.val}
                        onChange={(e) => searchItem?.handlerFun(e?.target?.value)}
                        displayEmpty
                        MenuProps={{ style: { maxHeight: 350 } }}
                    >
                        {listItems}
                    </Select>
                </FormControl>
            );
        }
        return filterOption;
    });
    const buttonGroup = () => {
        if (customButtonGroup) {
            return customButtonGroup;
        }
        return (
            <div className={classes.buttonWrapper}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.primeButton}
                    onClick={submitHandler}
                >Submit
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={`${classes.placeRight} ${classes.resetButton}`}
                    onClick={resetHandler}
                ><RefreshIcon />Reset Default
                </Button>
            </div>
        );
    };

    return (
        <div className={classes.searchWrapper}>
            <Card className={classes.cards}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h6" margin="dense">
                        <div>
                            <p className={classes.textMuted}>{searchTitle}</p>
                        </div>
                    </Typography>
                    <div className={classes.fieldWrapper}>
                        {generateForm}
                    </div>
                    {statusGroup}
                    {buttonGroup()}
                </CardContent>
            </Card>
        </div>
    );
};
Searchbar.propTypes = {
    classes: PropTypes.object,
    searchFields: PropTypes.array,
    resetHandler: PropTypes.func,
    submitHandler: PropTypes.func,
    searchTitle: PropTypes.string,
    customButtonGroup: PropTypes.object,
    statusGroup: PropTypes.object,
};
Searchbar.defaultProps = {
    classes: {},
    searchFields: [],
    resetHandler: null,
    submitHandler: null,
    searchTitle: '',
    customButtonGroup: null,
    statusGroup: null,
};
export default withStyles(Styles)(Searchbar);
