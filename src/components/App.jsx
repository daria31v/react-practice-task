// import { RecipeList } from "./RecipeList/RecipeList";
// import recipes from '../recipes.json';
import { Component } from 'react';
// import { ColorPicker } from './ColorPicker/ColorPicker';
// import { Counter } from './Counter/Counter';
import { CounterHuki} from './Counter/Counter-huki';
// import { Dropdown } from './Dropdown/Dropdown';
// import { TodoList } from './TodoList/TodoList';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ]

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: true },
      { id: 'id-3', text: 'Todo 3', completed: false },
      { id: 'id-4', text: 'Todo 4', completed: true },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    // const { todos } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodos = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0
    // );

    return (
      <>
        {/* <RecipeList recipes={recipes} />
        <h1>State components</h1> */}
        {/* <Counter initialValue={10} /> */}
        <CounterHuki initialValue={10}/>
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <div>
          <p>All todos: {totalTodoCount}</p>
          <p>Done todos: {completedTodos} </p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
         */}
      </>
    );
  }
}

