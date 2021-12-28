import React, {useState} from 'react'

const Countdown = () => {
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
      <h1>변환기</h1>
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

export default Countdown
