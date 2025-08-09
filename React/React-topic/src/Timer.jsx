import { useRef, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);
  const renderCount = useRef(0);

  // Increment render count on each render
  renderCount.current += 1;

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div>
      <h1>{seconds}s</h1>
      <p>Render Count: {renderCount.current}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
