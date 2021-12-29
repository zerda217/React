import React from 'react'
import Todoitem from './Todoitem';

const Todolist = ({ title, todoList, setTodoList, checkedList }) => {

  return (
    <div>
      <p>{title}</p>
      {todoList && todoList.map((todoItem) => {
        if (todoItem.deleted) return null;

        if (checkedList !== todoItem.checked) return null;

        return (
      <Todoitem 
        key={todoItem.id}
        todoItem={todoItem}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      )}
    )}
    </div>
  )
}

export default Todolist
