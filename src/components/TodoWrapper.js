import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
        console.log(todos)
    }

    const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
        console.log(id)
        setTodos(
            todos.map((todo) => 
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
        console.log('editing todos')
    }

    const editTask = (task, id) => {
        setTodos(todos.map((todo) => 
            todo.id === id ? { ...todo, task, isEditing: !todo.isEdiiting }: todo
            )
        );
    };

    return (
        <div className="TodoWrapper">
        <h1>Get Things Done !</h1>
        <TodoForm addTodo={addTodo} />
        {/* display todos */}
        {todos.map((todo) =>
            todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
            <Todo
                key={todo.id}
                task={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
            />
            )
        )}
        </div>
  );
};

export default TodoWrapper
