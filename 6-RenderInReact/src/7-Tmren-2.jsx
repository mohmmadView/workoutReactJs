import {useState} from 'react'



let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function Tmren2() {
  const [todos, setTodos] = useState(
    initialTodos
  );
  function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <ul className='flex flex-col '>
      {todos.map(todo => (
        <li className='flex justify-between' key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input 
        className='input input-warning'
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <button className='btn btn-primary ' onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button className='btn btn-info ml-4' onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        className=' checkbox checkbox-secondary'
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <button className='btn btn-accent ml-4' onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}

  function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState('');
    return (
      <div className=''>
        <input
          className='input input-success'
          placeholder="Add todo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button className='btn btn-primary h-auto' onClick={() => {
          setTitle('');
          onAddTodo(title);
        }}>Add</button>
      </div>
    )
  }
  
  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <div className=' flex flex-col'>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
