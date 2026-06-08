import { useMemo, useState } from "react";

export default function UseMemoExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 1000;
  }, [count]);

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOther(other + 1)}>Increase Other</button>
    </div>
  );
}
