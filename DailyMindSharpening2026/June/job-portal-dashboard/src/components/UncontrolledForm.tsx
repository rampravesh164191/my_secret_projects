import { useRef } from "react";

export default function UncontrolledForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hello, ${inputRef.current?.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}
