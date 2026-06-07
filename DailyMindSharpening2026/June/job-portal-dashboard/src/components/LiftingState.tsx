import { useState } from "react";

function NameInput({ onNameChange }: { onNameChange: (name: string) => void }) {
  return (
    <input
      onChange={(e) => onNameChange(e.target.value)}
      placeholder="Enter your name"
    />
  );
}

function Greeting({ name }: { name: string }) {
  return <h2>Hello, {name || "Guest"}!</h2>;
}

export default function LiftingState() {
  const [name, setName] = useState("");

  return (
    <div>
      <NameInput onNameChange={setName} />
      <Greeting name={name} />
    </div>
  );
}
