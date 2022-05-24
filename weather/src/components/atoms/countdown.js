import React, {useState} from 'react'
import axios from 'axios'

import Login from '../organisms/login'

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

const user = ({
  userId : "creotest",
  password : "1qaz",
  id: "2358700612",
  authenticated: true,
})

// 로그인 인증 문제로 api 호출이 불가능

const login = (e) => {
  axios.post(`https://test.creokorea.com:5001/v1/users/signin`, {
      userId : `${user.userId}`,
      password : `${user.password}`
  })
    .then(function (response) {
      console.log('성공', e)
      window.sessionStorage.setItem("user", JSON.stringify(user));
    })
    .catch(function(error) {
      console.log("실패");
    })
}

const session = () => {
  axios.get(`https://test.creokorea.com:5001/v1/users/checksession`)
    .then(function (response) {
      console.log('성공', response)
    })
    .catch(function(error) {
      console.log("실패");
    })
}

const check = (user) => {
  const userId = user.userId
  axios.get(`https://test.creokorea.com:5001/v1/users/check/${userId}`)
    .then(function (response) {
      console.log('성공', userId)
    })
    .catch(function(error) {
      console.log("실패", userId);
    })
}

const one = (user) => {
  const userId = user.userId
  console.log(userId)
  axios.get(`https://test.creokorea.com:5001/v1/users/one/${userId}`)
    .then(function (response) {
      console.log('조회', response)
    })
    .catch(function(error) {
      console.log("실패", userId);
    })
}

const all = () => {
  // axios({
  //   method:'get',
  //   url: `https://test.creokorea.com:5001/v1/users/all`,
  // })
  axios.get("https://test.creokorea.com:5001/v1/users/all")
    .then(function (response) {
      console.log('all유저', response)
    })
    .catch(function(error) {
      console.log("실패");
    })
}

const reports = (user) => {
  const id = user.id
  console.log(id)
  axios.get(`https://test.creokorea.com:5001/v1/reports/${id}`)
    .then(function (response) {
      console.log('선행기준', response)
    })
    .catch(function(error) {
      console.log("실패", id);
    })
}

const createReports = (user) => {
  const id = user.id
  console.log(id)
  axios.post(`https://test.creokorea.com:5001/v1/reports/create/${id}`, {        
              "title":"하나",
              "creatorName":"하나테스터",
              "questions": [
                {
                  "question":"청결 유지가 잘되어있는가?",
                  "type":"boolean"
                }
              ]
})
    .then(function (response) {
      console.log('생성 성공', response)
    })
    .catch(function(error) {
      console.log("실패", id);
    })
}

const files = (user) => {
  const id = user.id
  axios.get(`https://test.creokorea.com:5001/v1/files/many/${id}`)
    .then(function (response) {
      console.log('파일', response)
    })
    .catch(function(error) {
      console.log("실패", id);
    })
}
  
  return (
    <div>
      {/* <h1>변환기</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "please select" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null} */}
      <hr />

      <input name="userId" value={user.userId} />
      <input name="password" value={user.password} />
      <hr />

      <button onClick={() => login(user)}>로그인</button>
      <button onClick={() => session()}>세션</button>
      <button onClick={() => check(user)}>유효성</button>
      <button onClick={() => one(user)}>조회</button>
      <button onClick={() => all()}>모든유저</button>
      <button onClick={() => reports(user)}>레포트조회</button>
      <button onClick={() => createReports(user)}>레포트생성</button>
      <button onClick={() => files(user)}>파일조회</button>
      <Login />
    </div>
  )
}

export default Countdown
