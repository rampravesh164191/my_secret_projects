import { useEffect, useState } from "react";

export default function UseEffectUsers() {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map((u: any) => u.name)));
  }, []);

  return (
    <ul>
      {users.map((user, i) => (
        <li key={i}>{user}</li>
      ))}
    </ul>
  );
}
