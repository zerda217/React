import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Route } from 'react-router-dom';
import Posts from './Posts';
import Menu from './Menu';

const App = () => {
  return (
    <>
      <Menu/>
      <Route path='/Posts' component={Posts}/>
    </>
  )
}

// class App extends Component {
//   state = {
//     input: '',
//     todos: [
//       {id:0, text: '리액트 공부하기', done: true},
//       {id:1, text: '컴포넌트 스타일링 해보기', done: false}
//     ]
//   }

//   id = 1
//   getId = () => {
//     return ++ this.id;
//   }

//   handleChange = (e) => {
//     const {value} = e.target;
//     this.setState({
//       input: value
//     });
//   }

//   handleInsert = () => {
//     const { todos, input } = this.state;
//     const newTodo = {
//       text: input,
//       done: false,
//       id: this.getId()
//     };
//     this.setState({
//       todos: [...todos, newTodo],
//       input: ''
//     });
//   }

//   handleToggle = (id) => {
//     const { todos } = this.state;
//     const index = todos.findIndex(todo => todo.id === id);
//     const toggled = {
//       ...todos[index],
//       done: !todos[index].done
//     };
//     this.setState({
//       todos:[
//         ...todos.slice(0, index),
//         toggled,
//         ...todos.slice(index +1, todos.length)
//       ]
//     });
//   }

//   handleRemove = (id) => {
//     const { todos } = this.state;
//     const index = todos.findIndex(todo => todo.id === id);
//     this.setState({
//       todos:[
//         ...todos.slice(0, index),
//         ...todos.slice(index +1, todos.length)
//       ]
//     });
//   }

//   render() {
//     const { input, todos } = this.state;
//     const {
//       handleChange,
//       handleInsert,
//       handleToggle,
//       handleRemove
//     } = this;

//     return (
//         <div>
//         <PageTemplate>
//           <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
//           <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
//         </PageTemplate>
//         </div>
//     );
//   };
// }

export default App;