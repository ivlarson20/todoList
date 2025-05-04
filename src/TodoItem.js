import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleTodo}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    );
};

export default TodoItem;
