import React, { useState } from "react";

const Child = React.memo(({ value }: { value: number }) => {
  console.log("Child rendered");
  return <p>Value: {value}</p>;
});

export default function ReactMemoParent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div>
      <Child value={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOther(other + 1)}>Increase Other</button>
    </div>
  );
}
