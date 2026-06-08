import { useRef, useState } from "react";

export default function UseRefRenderCounter() {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  renders.current += 1;

  return (
    <div>
      <p>Count: {count}</p>
      <p>Component rendered: {renders.current} times</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
