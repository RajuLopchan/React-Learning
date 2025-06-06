import React from "react";
import { useEffect, useState } from "react"; //import useEffect from react
function App() {
  const [count, setCount] = useState(0); //initialize the state with a number
 const [message, setMessage] = useState('Waiting...');

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]); //useEffect will run when the component mounts and when count changes

   useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('3 seconds passed!');
    }, 3000); // set the timer to  seconds

    return () => clearTimeout(timer); // cleanup function to clear the timer
  }, []);
  return (
    <div>
     Count: <button onClick={() => setCount(count + 1)}>{count}</button><br />
      <h1>{message}</h1>;

    </div>
  );
}

export default App;
