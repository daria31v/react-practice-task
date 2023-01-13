import './TodoList.css';

export const TodoList = ({ todos, onDeleteTodo }) => (
    <ul className='TodoList'>
        {todos.map(({ id, text }) => (
        <li key={id} className='TodoList__item'>
                <p className='TodoList__text'>{text}</p>
                <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
        ))}
    </ul>
);