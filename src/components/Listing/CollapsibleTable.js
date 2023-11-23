/*
 * Confidential and Proprietary.
 * Do not distribute without 1-800-Flowers.com, Inc. consent.
 * Copyright 1-800-Flowers.com, Inc. 2019. All rights reserved.
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Styles from './listingStyle';

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const CustomeTableRow = (props) => {
    const {
        rowItem, classes, editPopup, deletePopup, position, order, updateSubmenu,
    } = props;
    const [open, setOpen] = useState(false);
    const [subItem, setSubItem] = useState(rowItem?.subItems);
    useEffect(() => {
        setSubItem(rowItem?.subItems);
    }, [rowItem?.subItems]);
    const statusFormat = (params) => (params ? 'Active' : 'In-Active');
    const onDelete = (evt, selected_rowItem) => {
        evt.stopPropagation();
        deletePopup(selected_rowItem?.id);
    };
    const onEdit = (evt, selected_rowItem) => {
        evt.stopPropagation();
        editPopup(selected_rowItem, true, false);
    };
    const onAddSubMenuItem = (evt, selected_rowItem) => {
        evt.stopPropagation();
        editPopup(selected_rowItem, false, true);
    };
    const onSubMenuEdit = (evt, menu_item_id, selected_sub_Item) => {
        evt.stopPropagation();
        editPopup(selected_sub_Item, true, true, menu_item_id);
    };
    const onSubMenuDelete = (evt, menu_item_id, selected_sub_Item) => {
        evt.stopPropagation();
        // eslint-disable-next-line no-underscore-dangle
        deletePopup(menu_item_id, selected_sub_Item?._id);
    };
    const onSubmenuDragEnd = (result) => {
        // dropped outside the list
        if (!result?.destination) {
            return;
        }

        const items = reorder(
            subItem,
            result?.source?.index,
            result?.destination?.index,
        );

        setSubItem(items);
        updateSubmenu(items, rowItem?.id);
    };
    return (
        <>
            <Draggable draggableId={order?.toString()} index={order} key={order?.toString()}>
                {(provided) => (
                    <TableRow
                        sx={{ '& > *': { borderBottom: 'unset' } }}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...provided.draggableProps}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...provided.dragHandleProps}
                        ref={provided?.innerRef}
                    >
                        <TableCell component="th" scope="row" style={{ width: 300 }}>
                            {rowItem?.title}
                        </TableCell>
                        <TableCell style={{ width: 150 }}>{position === 'footer' ? rowItem?.columnNumber : rowItem?.columnCount}</TableCell>
                        <TableCell style={{ width: 150 }}>{statusFormat(rowItem?.status)}</TableCell>
                        <TableCell style={{ width: 150 }}>
                            <>
                                {rowItem?.subItems?.length ? (
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        onClick={() => setOpen(!open)}
                                    >
                                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                ) : ''}
                                <Button onClick={(evt) => onEdit(evt, rowItem)} className={`${classes.sidePad} ${classes.actionBtn}`}>
                                    <EditIcon />
                                </Button>
                                <Button onClick={(evt) => onDelete(evt, rowItem)} className={`${classes.sidePad} ${classes.actionBtn}`}>
                                    <DeleteIcon />
                                </Button>
                            </>
                        </TableCell>
                        <TableCell align="left" style={{ width: 300 }}>
                            <Button variant="contained" color="primary" className={classes.primeButton} onClick={(evt) => onAddSubMenuItem(evt, rowItem)}> <AddIcon /> <span className={classes.btnLabel}> Add Sub-Menu Item</span></Button>
                        </TableCell>
                    </TableRow>
                )}
            </Draggable>
            <TableRow key={`${rowItem?.id}collapssible`}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{
                            width: '84%', margin: '30px auto',
                        }}
                        >
                            {(
                                subItem?.length ? (
                                    <Table size="small" aria-label="purchases">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Title</TableCell>
                                                <TableCell>Link Type</TableCell>
                                                <TableCell align="center">Status</TableCell>
                                                <TableCell align="center">Actions</TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <DragDropContext onDragEnd={onSubmenuDragEnd}>
                                            <Droppable droppableId={`droppable${rowItem?.id}`}>
                                                {(providedDrop) => (
                                                    <>
                                                        <TableBody
                                                            // eslint-disable-next-line react/jsx-props-no-spreading
                                                            {...providedDrop.droppableProps}
                                                            ref={providedDrop?.innerRef}
                                                        >
                                                            {subItem?.map((subMenu, ind) => (
                                                                // eslint-disable-next-line no-underscore-dangle
                                                                <Draggable draggableId={subMenu?._id} index={ind} key={subMenu?._id}>
                                                                    {(providedDrag) => (
                                                                        // eslint-disable-next-line no-underscore-dangle
                                                                        <TableRow
                                                                            // eslint-disable-next-line react/jsx-props-no-spreading
                                                                            {...providedDrag.draggableProps}
                                                                            // eslint-disable-next-line react/jsx-props-no-spreading
                                                                            {...providedDrag.dragHandleProps}
                                                                            ref={providedDrag?.innerRef}
                                                                            // eslint-disable-next-line no-underscore-dangle
                                                                            key={subMenu?._id}
                                                                        >
                                                                            <TableCell component="th" scope="row" style={{ width: 250 }}>
                                                                                {subMenu?.title}
                                                                            </TableCell>
                                                                            <TableCell component="th" scope="row" style={{ width: 250 }}>
                                                                                {subMenu?.linkType}
                                                                            </TableCell>
                                                                            <TableCell style={{ width: 250 }} align="center">{statusFormat(subMenu?.status)}</TableCell>
                                                                            <TableCell align="center" style={{ width: 250 }}>
                                                                                <>
                                                                                    <Button onClick={(evt) => onSubMenuEdit(evt, rowItem?.id, subMenu)} className={`${classes.sidePad} ${classes.actionBtn}`}>
                                                                                        <EditIcon />
                                                                                    </Button>
                                                                                    <Button onClick={(evt) => onSubMenuDelete(evt, rowItem?.id, subMenu)} className={`${classes.sidePad} ${classes.actionBtn}`}>
                                                                                        <DeleteIcon />
                                                                                    </Button>
                                                                                </>
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    )}
                                                                </Draggable>
                                                            ))}
                                                        </TableBody>
                                                        {providedDrop.placeholder}
                                                    </>
                                                )}
                                            </Droppable>
                                        </DragDropContext>
                                    </Table>
                                ) : ''
                            )}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

const CollapsibleTable = (props) => {
    const {
        rows, columns, classes, editPopup, deletePopup, position, onSubmitOrder,
    } = props;
    const [navItem, setNavItem] = useState(rows);
    useEffect(() => {
        setNavItem(rows);
    }, [rows]);
    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result?.destination) {
            return;
        }

        const items = reorder(
            navItem,
            result?.source?.index,
            result?.destination?.index,
        );

        setNavItem(items);
    };
    const updateSubmenu = (newList, id) => {
        const newItems = navItem?.map((item) => ({ ...item, subItems: item?.id === id ? newList : item?.subItems }));
        setNavItem(newItems);
    };
    const submitOrder = () => {
        const sortObj = navItem?.map((item, key) => {
            const subItems = item?.subItems?.map((subNav, ind) => ({
                // eslint-disable-next-line no-underscore-dangle
                id: subNav?._id,
                sortBy: ind,
            }));
            return {
                sortBy: key,
                id: item?.id,
                subItems,
            };
        });
        onSubmitOrder({ items: sortObj });
    };
    return (
        <>
            <div className={classes.buttonWrapper} key="sortOrderBtn">
                <div className={`${classes.right}`}>
                    <Button variant="contained" color="primary" className={classes.primeButton} onClick={() => submitOrder()} style={{ marginRight: 10 }}><span className={classes.btnLabel}>Save Menu Order</span></Button>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((columnItem) => (
                                    <TableCell key={columnItem?.headerName}>{columnItem?.headerName}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <>
                                    <TableBody
                                        // eslint-disable-next-line react/jsx-props-no-spreading
                                        {...provided.droppableProps}
                                        ref={provided?.innerRef}
                                    >
                                        {navItem?.map((rowItem, key) => (
                                            <CustomeTableRow
                                                rowItem={rowItem}
                                                classes={classes}
                                                editPopup={editPopup}
                                                deletePopup={deletePopup}
                                                position={position}
                                                key={rowItem?.id}
                                                updateSubmenu={updateSubmenu}
                                                order={key}
                                            />
                                        ))}
                                    </TableBody>
                                    {provided.placeholder}
                                </>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Table>
            </TableContainer>
        </>
    );
};

CollapsibleTable.propTypes = {
    classes: PropTypes.object,
    editPopup: PropTypes.func,
    deletePopup: PropTypes.func,
    columns: PropTypes.array,
    rows: PropTypes.array,
    position: PropTypes.string,
    onSubmitOrder: PropTypes.func,
};
CollapsibleTable.defaultProps = {
    classes: {},
    editPopup: null,
    deletePopup: null,
    columns: [],
    rows: [],
    position: '',
    onSubmitOrder: null,
};

CustomeTableRow.propTypes = {
    classes: PropTypes.object,
    rowItem: PropTypes.object,
    editPopup: PropTypes.func,
    deletePopup: PropTypes.func,
    position: PropTypes.string,
    order: PropTypes.number,
    updateSubmenu: PropTypes.func,
};
CustomeTableRow.defaultProps = {
    classes: {},
    editPopup: null,
    deletePopup: null,
    rowItem: {},
    position: '',
    order: 1,
    updateSubmenu: null,
};

export default withStyles(Styles)(CollapsibleTable);
