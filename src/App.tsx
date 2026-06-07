import { useEffect, useState } from "react";

type User = {
  id: number;
  email: string;
  role: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users`)
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  return (
    <main>
      <h1>Survey Portal Frontend</h1>
      <p>React frontend calling Azure Express API.</p>

      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email} — {user.role}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;