import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToDoList from './todo_list';
import useStore from '../../stores/store';

// Mock the useStore hook
beforeEach(() => {
    useStore.setState({ toDoItems: [] });
});

describe('ToDoList Component', () => {
    it('should render the table with the correct headers', () => {
        
        render(<ToDoList />);
        
        expect(screen.getByText('ToDo Items')).toBeInTheDocument();
    });

    it('should render the correct number of ToDoItem components', () => {
        const mockToDoItems = ['Task 1', 'Task 2', 'Task 3'];
        useStore.setState({ toDoItems: mockToDoItems });
        render(<ToDoList />);
        
        mockToDoItems.forEach((item, index) => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('should render no ToDoItem components when there are no items', () => {
        
        render(<ToDoList />);
        
        expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Task 3')).not.toBeInTheDocument();
    });
});