import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
const handleClick = () => {
  setCount((prevCount) => prevCount + 1);
  setCount((prevCount) => prevCount + 1)
 
  console.log(count);
};
  return (
    <>
     <p>Button is cLicked {count} times</p>
     <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
