import React, {useState} from 'react'

function NomardList() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo])
    setToDo('');
  }
  return (
    <div>
      <h1>노마드 투두리스트 ({toDos.length})</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} type='text' 
          placeholder='to do'>
        </input>
        <button>추가</button>
      </form>
      <hr />
      {toDos.map((item, index) => <li key={index}>{item}</li> ) }
    </div>
  )
}

export default NomardList
