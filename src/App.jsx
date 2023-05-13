import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex gap-3 justify-center items-baseline">
        <button className="flex justify-center mt-3 w-7 p-1 bg-violet-400 rounded text-lime-300 text-3xl" onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <div className="text-2xl">{count}</div>
        <button className="flex justify-center mt-3 w-7 p-1 bg-violet-400 rounded text-lime-300 text-3xl" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
