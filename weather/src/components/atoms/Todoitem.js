import React, { useState } from 'react'
import styled from 'styled-components'

const TodoItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
`
const Input = styled.input`
  border: 1px solid #dee2e6;
  box-sizing: border-box;
`;

const ListText = styled.div`
  font-size: 20px;
`;

const Retouch = styled.div`
  color: green;
`;

const Remove = styled.div`
  color: red;
`;

const Todoitem = ({ todoItem, todoList, setTodoList }) => {
  const [edited, setEdited] = useState(false);
  const [newText, setNewTest] = useState(todoItem.text);

  const onChangeCheckbox = () => { 
    const newTodoList = todoList.map((item) => ({ 
    ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked, }));

    setTodoList(newTodoList);
  }

  const onClickEditButton = () => {
    setEdited(true)
  }

  const onChangeEditInput = (e) => { 
    setNewTest(e.target.value) 
  };

  const onClickSubmitButton = () => {
    const newTodoList = todoList.map((item) => ({
      ...item,
      text: item.id === todoItem.id ? newText : item.text,
    }));
    setTodoList(newTodoList)

    setEdited(false)
  }

  const onEnterPress = (e) => {
    if(e.key === 'Enter') {
      onClickSubmitButton();
    }
  }

  const onClickDeleteButton = () => { 
    if (window.confirm('정말로 지우실건가요?')) { 
      const nextTodoList = todoList.map((item) => ({ 
        ...item, 
        deleted: item.id === todoItem.id ? true : item.deleted, })); 
        
        setTodoList(nextTodoList); 
      } 
    };

  return (
    <TodoItem>
      <Input type='checkbox' 
        checked={todoItem.checked}
        onChange={onChangeCheckbox}
      />
      {edited ? (
        <input type='text' value={newText} onChange={onChangeEditInput} onKeyPress={onEnterPress} />
      ) : (<>
        {!todoItem.checked ? (
        <ListText>{todoItem.text}</ListText>
      ): <ListText style={{color: 'gray', textDecoration: 'line-through'}}>{todoItem.text}</ListText>}
      </>)
      }

      {!todoItem.checked ? (
        edited ? (
        <Retouch type='button'
          onClick={onClickSubmitButton}>[수정 중]</Retouch>
        ) : (
          <Retouch type='button' onClick={onClickEditButton}>[수정]</Retouch> 
        )
      ): null}

      <Remove onClick={onClickDeleteButton}>[삭제]</Remove>
    </TodoItem>
  )
}

export default Todoitem
