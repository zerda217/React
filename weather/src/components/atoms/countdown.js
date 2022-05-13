import React, {useState} from 'react'
import axios from 'axios'

const MinutesToHours = () => {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (e) => {
    setAmount(e.target.value)
  }
  const reset = () => (setAmount(0));
  const onInvert = () => {
    reset();
    setInverted((current) => (!current))
  };

  return (
    <div>
      <div>
        <label>Minutes :</label>
        <input 
          value={inverted ? amount * 60 : amount}
          placeholder='Minutes' 
          type='number'
          onChange={onChange}
          disabled={inverted}
          />
        </div>
        <h4>변환할 값 :{amount}</h4>

      <div>
        <label>Hours :</label>
        <input 
          value={inverted ? amount : Math.round(amount/60)}
          placeholder='Hours' 
          type='number'
          onChange={onChange}
          disabled={!inverted}
          />
      </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onInvert}>
          {inverted? "Turn back" : "Invert"}
        </button>
    </div>
  )
}

function KmToMiles () {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (e) => {
    setAmount(e.target.value)
  }
  const reset = () => (setAmount(0));
  const onInvert = () => {
    reset();
    setInverted((current) => (!current))
  };

  return (
    <div>
      <div>
        <label>KiloMeters :</label>
        <input 
          value={inverted ? amount/0.621371 : amount}
          placeholder='Minutes' 
          type='number'
          onChange={onChange}
          disabled={inverted}
          />
        </div>
        <h4>변환할 값 :{amount}</h4>

      <div>
        <label>Miles :</label>
        <input 
          value={inverted ? amount : amount * 0.621371}
          placeholder='Hours' 
          type='number'
          onChange={onChange}
          disabled={!inverted}
          />
      </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onInvert}>
          {inverted? "Turn back" : "Invert"}
        </button>
    </div>
  )
}

  const Countdown = () => {
  const [index, setIndex] = useState("0");
  const onSelect = (e) => {
    setIndex(e.target.value);
  };

  const global = "https://test.creokorea.com:5001/v1"

const [user, setUser] = useState([{
  userId : "creotest",
  password : "1qaz"
}])

const login = (e) => {
  axios({
    method:'post',
    url: `${global}/users/signin`,
    data:{
      userId : `${user[0].userId}`,
      password : `${user[0].password}`
    }
  })
    .then(function (response) {
      console.log('성공', e)
    })
    .catch(function(error) {
      console.log("실패");
    })
}

const check = (user) => {
  const userId=user[0].userId
  // console.log(user[0].userId)
  axios({
    method:'get',
    url: `${global}/users/check/${userId}`,
  })
    .then(function (response) {
      console.log('성공', userId)
    })
    .catch(function(error) {
      console.log("실패");
    })
}

const one = (user) => {
  const userId=user[0].userId
  console.log(user[0].userId)
  axios({
    method:'get',
    url: `${global}/users/one/${userId}`,
  })
    .then(function (response) {
      console.log('조회', response)
    })
    .catch(function(error) {
      console.log("실패");
    })
}
  
  return (
    <div>
      <h1>변환기</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "please select" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
      <hr />

      <input value='creotest'>{user.userId}</input>
      <input value='1qaz'>{user.password}</input>
      <button onClick={() => login(user)}>로그인</button>
      <button onClick={() => check(user)}>유효성</button>
      <button onClick={() => one(user)}>조회</button>
    </div>
  )
}

export default Countdown
