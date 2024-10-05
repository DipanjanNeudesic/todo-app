import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToDo from './addto';
import useStore from '../../stores/store';



describe('AddToDo Component', () => {
    const setOpen = jest.fn();
    

    beforeEach(() => {
        useStore.setState({ toDoItems: [] });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders AddToDo component', () => {
        render(<AddToDo open={true} setOpen={setOpen} position={1} />);
        expect(screen.getByLabelText(/search field/i)).toBeInTheDocument();
        expect(screen.getByText(/Add/i)).toBeInTheDocument();
    });

    test('calls setOpen with false when dialog is closed', () => {
        render(<AddToDo open={true} setOpen={setOpen} position={1} />);
        fireEvent.click(screen.getByText(/add/i));
        expect(setOpen).toHaveBeenCalledWith(false);
    });

    test('calls addToDoItems with correct arguments', () => {
        render(<AddToDo open={true} setOpen={setOpen} position={1} />);
        const input = screen.getByLabelText(/search field/i) as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'New ToDo' } });
        fireEvent.click(screen.getByText(/add/i));
        expect(setOpen).toHaveBeenCalledWith(false);
    });

    test('clears the input field after adding a todo item', () => {
        render(<AddToDo open={true} setOpen={setOpen} position={1} />);
        const input = screen.getByLabelText(/search field/i);
        fireEvent.change(input, { target: { value: 'New ToDo' } });
        fireEvent.click(screen.getByText(/Add/i));
        expect((input as HTMLInputElement).value).toBe('');
    });
});