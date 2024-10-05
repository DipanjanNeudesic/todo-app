'use client';
import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import AddToDo from '../AddToDo/addto';
import EditToDo from '../EditToDo/edittodo';



function ToDoItem(props) {
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    
    return (
        <TableRow
            key={props.position}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {props.item}
                <div className='button__container'>
                    <IconButton aria-label="add" onClick={() => setOpen(true)}>
                        <AddIcon />
                    </IconButton>
                    <AddToDo open={open} setOpen={setOpen} position={props.position+1}/>
                    <IconButton aria-label="edit" onClick={() => setOpenEdit(true)}>
                        <EditIcon />
                    </IconButton>
                    <EditToDo openEdit={openEdit} setOpenEdit={setOpenEdit} position={props.position}/>
                </div>

            </TableCell>
        </TableRow>
    )
}

ToDoItem.propTypes = {
    item: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired
}

export default ToDoItem;
