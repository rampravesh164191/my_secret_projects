import React from "react";

type CounterProps = {
  children: (count: number, increase: () => void) => React.ReactNode;
};

function Counter({ children }: CounterProps) {
  const [count, setCount] = React.useState(0);
  const increase = () => setCount(count + 1);
  return <>{children(count, increase)}</>;
}

export default function RenderProps() {
  return (
    <Counter>
      {(count, increase) => (
        <div>
          <p>Count: {count}</p>
          <button onClick={increase}>Increase</button>
        </div>
      )}
    </Counter>
  );
}
