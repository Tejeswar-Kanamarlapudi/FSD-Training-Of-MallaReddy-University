import React from 'react'

function CounterButton({label,onIncrement}) {
  return (
    <div>
      <button onClick={onIncrement} style={{ marginRight: '10px' }}>
      {label} 
    </button>
    </div>
  )
}

export default CounterButton;
