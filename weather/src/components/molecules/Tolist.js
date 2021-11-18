import React, {useState} from 'react'
import Todolist from '../atoms/Todolist'
import Todocreate from '../atoms/Todocreate'

const Tolist = () => {
  const [todoList, setTodoList] = useState([])
  console.log('list', todoList)

  return (
    <div>
      <h2>To Do list</h2>
      <br />
        <Todocreate todoList={todoList} setTodoList={setTodoList} />
      <br /> 
        <Todolist 
          title={'할 일'}
          todoList={todoList}
          setTodoList={setTodoList}
          checkedList={false}
        /> 
        <Todolist 
          title={'완료한 항목'} 
          todoList={todoList} 
          setTodoList={setTodoList} 
          checkedList={true}
        />
    </div>

)
}

export default Tolist
