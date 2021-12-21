import React, {useState} from 'react'

const Countdown = () => {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const onChange = (e) => {
    setAmount(e.target.value)
  }
  const reset = () => (setAmount(0));
  const onFlip = () => {
    reset();
    setFlipped((current) => (!current))
  };

  return (
    <div>
      <input 
        value={flipped ? amount * 60 : amount}
        placeholder='Minutes' 
        type='number'
        onChange={onChange}
        disabled={flipped}
        />
        <h4>변환할 값 :{amount}</h4>
      <input 
        value={flipped ? amount : Math.round(amount/60)}
        placeholder='Hours' 
        type='number'
        onChange={onChange}
        disabled={!flipped}
        />
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>flip</button>
    </div>
  )
}

export default Countdown
