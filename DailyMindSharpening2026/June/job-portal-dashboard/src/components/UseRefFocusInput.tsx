import { useRef } from "react";

export default function UseRefFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
