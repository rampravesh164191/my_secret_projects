import React from "react";

type State = { user: string | null };
type Action = { type: "login"; user: string } | { type: "logout" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "login":
      return { user: action.user };
    case "logout":
      return { user: null };
    default:
      return state;
  }
}

const AuthContext = React.createContext<{ state: State; dispatch: React.Dispatch<Action> } | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, { user: null });
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext)!;
}

// Usage
function LoginButton() {
  const { dispatch } = useAuth();
  return <button onClick={() => dispatch({ type: "login", user: "Ram" })}>Login</button>;
}

function LogoutButton() {
  const { dispatch } = useAuth();
  return <button onClick={() => dispatch({ type: "logout" })}>Logout</button>;
}

function UserInfo() {
  const { state } = useAuth();
  return <p>{state.user ? `Logged in as ${state.user}` : "Not logged in"}</p>;
}

export default function AuthContextReducer() {
  return (
    <AuthProvider>
      <UserInfo />
      <LoginButton />
      <LogoutButton />
    </AuthProvider>
  );
}
