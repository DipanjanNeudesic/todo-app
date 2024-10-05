import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditToDo from './edittodo';
import useStore from '../../stores/store';



describe('editToDo Component', () => {
    const setOpen = jest.fn();
    

    beforeEach(() => {
        useStore.setState({ toDoItems: [] });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders editToDo component', () => {
        render(<EditToDo openEdit={true} setOpenEdit={setOpen} position={1} />);
        expect(screen.getByLabelText(/search field/i)).toBeInTheDocument();
        expect(screen.getByText(/edit/i)).toBeInTheDocument();
    });

    test('calls setOpen with false when dialog is closed', () => {
        render(<EditToDo openEdit={true} setOpenEdit={setOpen} position={1} />);
        fireEvent.click(screen.getByText(/edit/i));
        expect(setOpen).toHaveBeenCalledWith(false);
    });

    test('calls editToDoItems with correct arguments', () => {
        render(<EditToDo openEdit={true} setOpenEdit={setOpen} position={1} />);
        const input = screen.getByLabelText(/search field/i) as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'New ToDo' } });
        fireEvent.click(screen.getByText(/edit/i));
        expect(setOpen).toHaveBeenCalledWith(false);
    });

    test('clears the input field after editing a todo item', () => {
        render(<EditToDo openEdit={true} setOpenEdit={setOpen} position={1} />);
        const input = screen.getByLabelText(/search field/i);
        fireEvent.change(input, { target: { value: 'New ToDo' } });
        fireEvent.click(screen.getByText(/edit/i));
        expect((input as HTMLInputElement).value).toBe('');
    });
});