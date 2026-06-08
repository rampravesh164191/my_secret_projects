import { useCallback, useState } from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

function ChildButton({ onClick, children }: ButtonProps) {
  console.log("Child rendered");
  return <button onClick={onClick}>{children}</button>;
}

export default function UseCallbackParent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildButton onClick={handleClick}>Increase</ChildButton>
    </div>
  );
}
