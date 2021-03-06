import React, {useState} from 'react'

import Login from '../organisms/login'
import NaverLogin from '../molecules/naver'
import KakaoLogin from '../molecules/kakao'

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

  const onSuccessHandler = res => {
    console.log(res)
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

      <Login />
      <NaverLogin
        success={onSuccessHandler}
        fail={res => console.log(res)}
      />
      <KakaoLogin
        success={onSuccessHandler}
        fail={res => console.log(res)}
      />
    </div>
  )
}

export default Countdown
