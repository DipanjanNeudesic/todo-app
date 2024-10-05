import React from 'react'
import PropTypes from 'prop-types'
import useStore from '@/stores/store';
import { Box, Button, Dialog, TextField } from '@mui/material';

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

function EditToDo({openEdit, setOpenEdit, position}) {
    const [toDoItem, setToDoItem] = React.useState('');
    const editToDoItems = useStore("editToDoItems");

    const handleClose = () => {
        editToDoItems(toDoItem, position);
        setToDoItem('');
        setOpenEdit(false);
    }

    return (
        <Dialog
            open={openEdit}
            onClose={() => setOpenEdit(false)}
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
            <Button onClick={handleClose}>Edit</Button>
        </Dialog>
    )
}

EditToDo.propTypes = {
    openEdit: PropTypes.bool.isRequired,
    setOpenEdit: PropTypes.func.isRequired,
    position: PropTypes.number.isRequired
}

export default EditToDo
