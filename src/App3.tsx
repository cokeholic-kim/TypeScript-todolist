import React from 'react';
import TodoInput from './components/TodoInput';
import TodoListsEdit2 from './components/TodoListsEdit2';
import TodolisContext from './context/TodolisContext';

const App3 = () => {
    return (
        <TodolisContext>
            <TodoInput/>
            <TodoListsEdit2/>
        </TodolisContext>
    );
};

export default App3;