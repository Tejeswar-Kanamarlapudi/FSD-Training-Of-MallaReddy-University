import { useState } from "react";
import Interval from "./components/Interval"

function App(){
  const [count,setCount] = useState(1);
  return(
    <div>
      {count && <Interval/>}
      <button onClick={()=> setCount(0)}>Stop</button>
    </div>
  );
}
export default App;