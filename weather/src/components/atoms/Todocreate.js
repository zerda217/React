import React, { useState, useRef } from 'react'
import { Radio } from 'antd';

const Todocreate = ({ todoList, setTodoList }) => {
  // console.log('tocreate', value)
  const [text, setText] = useState('')
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setText(e.target.value)
  }

  const onClickSubmit = () => {
    const newTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
      delete: false,
    });
    setTodoList(newTodoList);

    //input 후 초기화/포커싱
    setText('');
    inputRef.current.focus();
  }

  const onEnterPress = (e) => {
    if(e.key === 'Enter') {
      onClickSubmit();
    }
  }

  return (
    <div>
      <input type='text' style={{width: "50%"}}
        value={text}
        ref={inputRef}
        onKeyPress={onEnterPress}
        onChange={onChangeInput}
        ></input>

      <Radio.Button onClick={onClickSubmit} style={{marginLeft: '2rem'}}> [추가] </Radio.Button>
    </div>
  )
}

export default Todocreate
