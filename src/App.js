import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (content) => {
        const id = Date.now();

        setTodos((prev) => [
            ...prev,
            {
                id,
                content,
                completed: false,
            },
        ]);
    };

    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) => {
                return todo.id === id
                    ? {
                          ...todo,
                          completed: !todo.completed,
                      }
                    : todo;
            })
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div className="app1">
            <TodoInput onAdd={addTodo} />

            <div className="todos">
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            content={todo.content}
                            completed={todo.completed}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
