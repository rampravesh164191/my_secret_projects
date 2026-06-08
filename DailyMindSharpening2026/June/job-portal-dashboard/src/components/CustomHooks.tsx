import { useEffect, useState } from "react";

function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}

export default function CustomHooks() {
  const [name, setName] = useLocalStorage("name", "Ram");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
