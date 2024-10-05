import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToDoItem from './todo_item';
import AddToDo from '../AddToDo/addto';
import EditToDo from '../EditToDo/edittodo';

jest.mock('../AddToDo/addto', () => () => <div data-testid="add-todo-modal">AddToDo Component</div>);
jest.mock('../EditToDo/edittodo', () => () => <div data-testid="edit-todo-modal">EditToDo Component</div>);

describe('ToDoItem Component', () => {
    const props = {
        item: 'Test ToDo Item',
        position: 1
    };

    test('renders ToDoItem component with correct props', () => {
        render(<ToDoItem {...props} />);
        expect(screen.getByText('Test ToDo Item')).toBeInTheDocument();
    });

    test('opens AddToDo modal on add button click', () => {
        render(<ToDoItem {...props} />);
        const addButton = screen.getByLabelText('add');
        fireEvent.click(addButton);
        expect(screen.getByTestId('add-todo-modal')).toBeInTheDocument();
    });

    test('opens EditToDo modal on edit button click', () => {
        render(<ToDoItem {...props} />);
        const editButton = screen.getByLabelText('edit');
        fireEvent.click(editButton);
        expect(screen.getByTestId('edit-todo-modal')).toBeInTheDocument();
    });
});