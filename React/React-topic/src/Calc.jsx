import React, { useState, useMemo, useRef } from 'react';

function Calc() {
  const [number, setNumber] = useState(0);
  const renderCount = useRef(0);
  renderCount.current += 1;

  // Expensive calculation function
  const slowSquare = (num) => {
    console.log('Calculating square...');
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *=  i; // Simulate heavy computation
    }
    return result;
  };

  // useMemo to avoid recalculating unless number changes
  const squared = useMemo(() => slowSquare(number), [number]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🧮 Expensive Square Calculator</h2>
      
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder="Enter a number"
      />
      <p>Square: {squared}</p>

      <p>Render Count: {renderCount.current}</p>
    </div>
  );
}

export default Calc;
