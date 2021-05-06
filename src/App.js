import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'This',
          id: 6736,
          completed: false,
        }
      ],
    }
  }

  addItem = (taskName) => {
    const newTodo = {
        task: taskName,
        id: new Date() ,
        completed: false,
    };
    this.setState({
        todos: [...this.state.todos, newTodo],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return{
            ...todo,
            completed: !todo.completed,
          }
        }else {
          return todo;
        }
      })
    })
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
