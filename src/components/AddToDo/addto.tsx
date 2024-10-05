'use client';
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Dialog, TextField } from '@mui/material'
import useStore from '@/stores/store';


const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function AddToDo({open, setOpen, position}) {
    const [toDoItem, setToDoItem] = React.useState('');
    const addToDoItems = useStore("addToDoItems");

    const handleClose = () => {
        addToDoItems(toDoItem, position);
        setToDoItem('');
        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 300, height: 200, justifyContent:"space-between" }}>
                <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    variant="standard"
                    value={toDoItem}
                    onChange={(e) => setToDoItem(e.target.value)}
                    sx= {{mb: '20px'}}
                />
            </Box>
            <Button onClick={handleClose}>Add</Button>
        </Dialog>
    )
}

AddToDo.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    position: PropTypes.number.isRequired
}

export default AddToDo
