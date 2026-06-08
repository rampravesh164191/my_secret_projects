# 🎯 Step 0 — Project Selection

We need one **production-grade project** that covers all modern frontend concepts. The best choice here is:

## 📌 SaaS Dashboard (Admin Panel for a Job Portal)

### Why this project?

- **Covers everything:** Authentication, routing, forms, API integration, state management, data handling, reusable UI, accessibility, performance, testing, deployment.
- **Real-world relevance:** Admin dashboards are widely used in SaaS, e-commerce, HR, and project management.
- **Scalable architecture:** Perfect for practicing feature-based folder structure, Redux Toolkit, RTK Query, and TypeScript typing.

# 🛠 Roadmap & Milestones

Here's how we'll break it down:

1.  **Phase 1 — Project Setup**
Vite + TypeScript + ESLint + Prettier + Git + Workflow

2.  **Phase 2–3 — React Fundamentals & Hooks**
Components, props, state, hooks, custom hooks

3.  **Phase 4–6 — TypeScript Fundamentals + React Integration**
Typing props, state, events, API responses

4.  **Phase 7–8 — Tailwind + Routing**
Utility-first styling, responsive design, React Router setup

5.  **Phase 9–11 — Forms + API Layer + Data Handling**
React Hook Form, Zod validation, Axios, RTK Query

6.  **Phase 12–14 — Context API + Redux Toolkit + RTK Query**
Global state management, caching, mutations

7.  **Phase 15–16 — Advanced React Patterns + UI Components**
Compound components, reusable UI library

8.  **Phase 17–18 — Accessibility + Performance Optimization**

9.  **Phase 19 — Testing**
Vitest + React Testing Library

10.  **Phase 20–21 — Architecture + Authentication**
Feature-based structure, JWT + refresh tokens

11.  **Phase 22 — Deployment**
Vercel + environment configs

12.  **Phase 23 — Interview Prep**
Questions, scenarios, best practices

# ⏱ Estimated Timeline

- Each phase: 2–4 days (depending on depth & practice).
- Full project: ~8–10 weeks with consistent effort.
- You'll finish with a **portfolio-ready SaaS Dashboard.**

# ✅ Progress Tracker

- ⬜ Phase 1 — Project Setup
- ⬜ Phase 2 — React Fundamentals
- ⬜ Phase 3 — React Hooks
- ⬜ Phase 4 — TypeScript Fundamentals
- ⬜ Phase 5 — Advanced TypeScript
- ⬜ Phase 6 — React + TypeScript
- ⬜ Phase 7 — Tailwind CSS
- ⬜ Phase 8 — Routing
- ⬜ Phase 9 — Forms
- ⬜ Phase 10 — API Layer
- ⬜ Phase 11 — Data Handling
- ⬜ Phase 12 — Context API
- ⬜ Phase 13 — Redux Toolkit
- ⬜ Phase 14 — RTK Query
- ⬜ Phase 15 — Advanced React Patterns
- ⬜ Phase 16 — UI Components
- ⬜ Phase 17 — Accessibility
- ⬜ Phase 18 — Performance Optimization
- ⬜ Phase 19 — Testing
- ⬜ Phase 20 — Architecture
- ⬜ Phase 21 — Authentication
- ⬜ Phase 22 — Deployment
- ⬜ Phase 23 — Interview Prep

# 🚀 Step 1 — Project Setup (Start Now)
**Goal:** Initialize a clean, production-ready React + TypeScript project with Vite.

## Why it matters

- Industry projects always start with a **linted, formatted, and structured setup.**
- Prevents messy code, enforces consistency, and prepares for scaling.

## Folder/File Structure (initial draft)

```text
job-portal-dashboard/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── store/
│   ├── types/
│   ├── utils/
│   └── main.tsx
├── public/
├── .eslintrc.cjs
├── .prettierrc
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

## Task

1. Run:

```bash
npm create vite@latest job-portal-dashboard -- --template react-ts
cd job-portal-dashboard
npm install
npm run dev
```

2. Confirm the app runs at:

```text
http://localhost:5173
```

## 📌 Mini Challenge

Set up the project and share your **folder structure screenshot** or `package.json` here.

I'll review it and suggest improvements before we move to ESLint + Prettier.

---

👉 Ram, go ahead and complete **Step 1: Vite + TypeScript Setup.** Once you confirm, I’ll review and move us to ESLint + Prettier.

---

# 📂 Next Step — ESLint + Prettier Setup

**Goal:** Enforce consistent coding style and catch errors early.

## Why it matters

- Industry teams rely on **linting + formatting** to keep codebases clean.
- Prevents bugs, enforces best practices, and ensures every developer writes code in the same style.


## Files to Add:
1. Create `eslint.config.js` in your project root

```js
// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["dist", "node_modules"],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  }
);
```
2.  `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

## 🎯 Mini Challenge

1. Add the above config files: `eslint.config.js` , `.prettierrc` to your project root.

2. Run:

```bash
npm run lint
```

3. Share your lint output or confirm that formatting works.

👉 Once you confirm linting works cleanly, we'll move to Prettier integration + Folder Structure + Path Aliases.

---

# 📂 Next Step — Folder Structure + Path Aliases

**Goal:** Organize your project so it scales as features grow.

## Why it matters

- Prevents “spaghetti folders” as the app grows.
- Industry teams use **feature-based architecture** with clear separation of concerns.
- Path aliases make imports clean (`@/components/Button` instead of `../../../components/Button`).

## Recommended Folder Structure (Phase 1 baseline)

```text
src/
├── assets/          # Static files (images, icons, fonts)
├── components/      # Reusable UI components (Button, Input, Modal)
├── features/        # Feature-based modules (auth, jobs, dashboard)
├── hooks/           # Custom React hooks
├── layouts/         # Layout components (SidebarLayout, AuthLayout)
├── pages/           # Route-level pages (LoginPage, DashboardPage)
├── store/           # Redux Toolkit store setup
├── types/           # Global TypeScript types/interfaces
├── utils/           # Helper functions (formatDate, debounce)
├── main.tsx         # App entry point
└── App.tsx          # Root component
```

## Path Aliases Setup

### `tsconfig.json`

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

### `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,

    /* Path Aliases */
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

## Now you can import like:

```ts
import Button from "@/components/Button";
```

## 🎯 Mini Challenge

1. Create the folder structure above inside `src/`.
2. Configure **path aliases** in `tsconfig.json` and `vite.config.ts`.
3. Test by creating a simple `Button.tsx` inside `src/components/` and importing it in `App.tsx` using `@/components/Button`.

👉 Once you confirm the folder structure + path aliases are working, we'll move to **Environment Variables + Git Setup + Conventional Commits** to finish Phase 1.

---

# 🌍 Step 2 — Environment Variables

**Goal:** Manage secrets and configs safely.

## Why it matters

- Prevents leaking API keys in code.
- Allows different configs for dev vs production.

## Setup

1. Create a `.env` file in project root:

```env
VITE_API_URL=http://localhost:5000/api
```

2. Access it in code:

```ts
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Add `.env` to `.gitignore` (never commit secrets).

# 🌀 Step 3 — Git Setup

**Goal:** Version control with clean workflow.

## Best Practices

- Always initialize Git before coding.
- Use `.gitignore` to avoid committing `node_modules`, `dist`, `.env`.

## Setup

1. Initialize:

```bash
git init
git branch -M main
```

2. Create `.gitignore`:

```gitignore
node_modules
dist
.env
.DS_Store
```

3. First commit:

```bash
git add .
git commit -m "chore: initial project setup"
```

# Step 4 — Conventional Commits

**Goal:** Standardize commit messages.

## Why it matters

- Industry teams use this for changelogs, CI/CD, and clarity.

## Format

```text
<type>(scope): <description>
```

## Types

- `feat`: new feature
- `fix`: bug fix
- `chore`: tooling/config
- `docs`: documentation
- `style`: formatting
- `refactor`: code restructuring
- `test`: adding tests

## Examples

- `feat(button): add reusable button component`
- `fix(auth): resolve login redirect bug`
- `chore: setup eslint + prettier`


# 🎯 Mini Challenge

- Add `.env` with `VITE_API_URL`.
- Add `.gitignore`.
- Initialize Git and make your first commit using **Conventional Commit format.**

👉 Once you confirm Git + Env setup is complete, we'll mark Phase 1 ✅ and move to Phase 2: React Fundamentals.

---

# 🚀 Phase 2 — React Fundamentals

**Goal:** Master the building blocks of React before layering on hooks, TypeScript, and state management.

## Why it matters

- Every production app is built on these fundamentals.
- Interviewers often test your ability to explain and implement these basics.
- Clean fundamentals = fewer bugs when scaling.

# 📚 Topics We'll Cover

- JSX
- Components (functional, reusable)
- Component composition
- Props & children
- Conditional rendering
- Lists & keys
- Event handling
- Forms (controlled vs uncontrolled)
- Lifting state up
- State management basics

# 📝 Step 1 — JSX & Functional Components

**Goal:** Understand JSX syntax and create your first functional component.

### Example

```tsx
function WelcomeMessage() {
  return <h1>Hello, Ram 👋</h1>;
}

export default WelcomeMessage;
```

### Usage in App.tsx

```tsx
import WelcomeMessage from "@/components/WelcomeMessage";

function App() {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );
}
```

# 🎯 Mini Challenge

1. Create a new component `WelcomeMessage.tsx` inside `src/components/`.
2. Render a personalized greeting using JSX.
3. Import and display it in `App.tsx`.

👉 Once you confirm this works, we'll move to **Props & Children** to make components reusable.

---

# 📚 Step 2 — Props & Children

**Goal:** Make components reusable by passing data and nested elements.

### Why it matters

- Props let you customize components instead of hardcoding values.
- Children allow flexible layouts (e.g., wrapping text, icons, or other components inside a button).

### Example: Props

```tsx
type WelcomeMessageProps = {
  name: string;
};

export default function WelcomeMessage({ name }: WelcomeMessageProps) {
  return <h1>Hello, {name} 👋</h1>;
}
```

### Usage

```tsx
import WelcomeMessage from "@/components/WelcomeMessage";

function App() {
  return (
    <div>
      <WelcomeMessage name="Ram" />
      <WelcomeMessage name="Frontend Developer" />
    </div>
  );
}
```

### Example: Children

```tsx
type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="border p-4 rounded shadow">
      {children}
    </div>
  );
}
```

### Usage

```tsx
import Card from "@/components/Card";

function App() {
  return (
    <Card>
      <h2>Job Portal Dashboard</h2>
      <p>Welcome to your admin panel.</p>
    </Card>
  );
}
```

# 🎯 Mini Challenge

1. Refactor your `Button` component to accept:

- `children` (for text or icons).
- `onClick` (for event handling).

2. Create a `Card` component that uses children.

3. Use both in `App.tsx`:

```tsx
<Card>
  <Button onClick={() => alert("Clicked!")}>Click Me</Button>
</Card>
```
👉 Once you confirm this works, we’ll move to **Conditional Rendering + Lists & Keys** — the next building blocks of React fundamentals.

---

# 📚 Step 3 — Conditional Rendering + Lists & Keys

🎯 **Goal:** Learn how to render components dynamically based on conditions and data arrays.

## ✅ Conditional Rendering

### Why it matters

Real apps often need to show/hide UI depending on state (loading, logged in, error, etc.).

### Example

```tsx
type WelcomeMessageProps = {
  isLoggedIn: boolean;
  name: string;
};

export default function WelcomeMessage({ isLoggedIn, name }: WelcomeMessageProps) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back, {name}!</h1> : <h1>Please log in.</h1>}
    </div>
  );
}

```

### Usage

```tsx
<WelcomeMessage isLoggedIn={true} name="Ram" />
<WelcomeMessage isLoggedIn={false} name="Ram" />
```

## ✅ Lists & Keys

### Why it matters

Rendering lists is core to dashboards (jobs, users, posts). Keys help React track items efficiently.

### Example

```tsx
type Job = {
  id: number;
  title: string;
  company: string;
};

const jobs: Job[] = [
  { id: 1, title: "Frontend Developer", company: "Microsoft" },
  { id: 2, title: "Backend Developer", company: "Google" },
  { id: 3, title: "Fullstack Developer", company: "Amazon" },
];

export default function JobList() {
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          {job.title} at {job.company}
        </li>
      ))}
    </ul>
  );
}
```

## 🎯 Mini Challenge

1. Create a `JobList.tsx` component that renders a list of jobs using `.map()`.

2. Add conditional rendering:
   - If jobs exist → show the list.
   - If no jobs → show `"No jobs available."`.

3. Import and display `JobList` in `App.tsx`.


👉 Once you confirm this works, we'll move to **Forms (Controlled vs Uncontrolled) + Event Handling** — the final building blocks of React fundamentals before we dive into hooks.

---

# 📚 Step 4 — Event Handling

**Goal:**Capture user interactions (clicks, input changes, submissions).

### Example

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

# 📚 Step 5 — Forms (Controlled vs Uncontrolled)

## Controlled Components

React manages the input value via state.

```tsx
import React, { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hello, ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Uncontrolled Components

DOM manages the input value via ref.

```tsx
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
```

# 📚 Step 6 — Lifting State Up

**Goal:** Share state between components by moving it to their common parent.

## Example

```tsx
import React from "react";

function NameInput({
  onNameChange,
}: {
  onNameChange: (name: string) => void;
}) {
  return (
    <input
      onChange={(e) => onNameChange(e.target.value)}
      placeholder="Enter your name"
    />
  );
}

function Greeting({
  name,
}: {
  name: string;
}) {
  return <h2>Hello, {name || "Guest"}!</h2>;
}

export default function App() {
  const [name, setName] = React.useState("");

  return (
    <div>
      <NameInput onNameChange={setName} />
      <Greeting name={name} />
    </div>
  );
}
```

# 🎯 Mini Challenge

## 1. Create a `ControlledForm` component

- Create a `ControlledForm` component that takes user input and displays it.
- Create an `UncontrolledForm` component using `ref`.
- Demonstrate **lifting state up** by connecting two components (input + display).

👉 Once you confirm these work, we'll mark **Phase 2 ✅** and move to **Phase 3: React Hooks** — where you'll learn `useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`, custom hooks, and React hook patterns in depth.

---

# 🚀 Phase 3 — React Hooks

**Goal:** Learn how to manage state, side effects, references, and performance optimizations using React's built-in hooks.

## Why it matters

- Hooks are the backbone of modern React.
- Every production-grade app relies on them for state, lifecycle, and performance.
- Interviewers often test your ability to explain **when to use each hook** and **when not to.**

# 📚 Topics We'll Cover

- `useState`
- `useEffect`
- `useRef`
- `useMemo`
- `useCallback`
- `useReducer`
- `useContext`
- `Custom Hooks`

## For each:

- When to use ✅
- When not to use ❌
- Performance implications ⚡

# 📝 Step 1 — `useState`

**Goal:** Manage local component state.

### Example: Counter

```tsx
import { useState } from "react";

export default function UseStateCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
```

### Best Practices

- ✅ Use for **simple local state** (numbers, strings, booleans).
- ❌ Don’t use for **complex state objects** → prefer useReducer.
- ⚡ Avoid unnecessary re-renders by grouping related state logically.

# 🎯 Mini Challenge
1. Create a `Counter.tsx` component using `useState`.
2. Add two buttons: **Increase** and **Decrease**.
3. Render it in `App.tsx`.

👉 Once you confirm this works, we'll move to **useEffect** — handling side effects such as API calls, timers, event listeners, and cleanup functions.

---

# 📚 Step 2 — useEffect

**🎯 Goal:** Handle **side effects** in React:

- Fetching data
- Subscribing/unsubscribing (events, sockets)
- Timers
- Updating the DOM outside React

### ✅ Basic Example

```tsx
import { useEffect, useState } from "react";

export default function UseEffectTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  return <p>Timer: {seconds} seconds</p>;
}
```

- `useEffect(() => { ... }, [])` → runs once after mount.
- Cleanup function prevents memory leaks.

### ✅ Data Fetch Example

```tsx
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
```

## ⚡ Best Practices

- ✅ Always add dependencies in the array (`[count]`, `[userId]`).
- ❌ Don't leave it empty unless you truly want "run once".
- ⚡ Use cleanup for subscriptions, timers, or event listeners.

## 🎯 Mini Challenge

- Create a `Timer.tsx` component using `useEffect + setInterval`.
- Create a `Users.tsx` component that fetches and displays user names.
- Import both into `App.tsx` and confirm they work.

👉 Once you confirm this works, we'll move to `useRef` — for DOM access and persisting values without re-renders.

---

# 📚 Step 3 — useRef

## 🎯 Goal

- Persist values across renders without causing re-renders.
- Directly access and manipulate DOM elements.
- Store mutable values (like timers, previous state, etc.).

## ✅ DOM Access Example

```tsx
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
```

`inputRef.current` points to the actual DOM node.

Clicking the button focuses the input.

## ✅ Persisting Values Example

```tsx
import { useRef, useState } from "react";

export default function UseRefRenderCounter() {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  renders.current += 1;

  return (
    <div>
      <p>Count: {count}</p>
      <p>Component rendered: {renders.current} times</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

`renders.current` updates without triggering re-renders.

Useful for tracking values across renders.

## ⚡ Best Practices

✅ Use for DOM access, timers, or persisting values.

❌ Don't use `useRef` as a replacement for state when you need UI updates.

⚡ Great for performance optimizations (avoiding unnecessary re-renders).

## 🎯 Mini Challenge

- Create a `FocusInput.tsx` component that focuses an input when a button is clicked.
- Create a `RenderCounter.tsx` component that tracks how many times it has rendered using `useRef`.
- Import both into `App.tsx` and confirm they work.

👉 Once you confirm this works, we'll move to `useMemo + useCallback` — the performance optimization hooks that prevent wasted re-renders.

---

# 📚 Step 4 — useMemo

**🎯 Goal:** Memoize expensive calculations so they don't re-run unnecessarily.

### Example

```tsx
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
```

- Calculation only runs when `count` changes, not when `other` changes.
- Useful for filtering, sorting, or heavy computations.

# 📚 Step 5 — useCallback

**🎯 Goal:** Memoize functions so they don't get recreated on every render.

### Example

```tsx
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
```

- Without `useCallback`, `handleClick` would be recreated every render → child re-renders unnecessarily.
- With `useCallback`, the function reference stays stable.

## ⚡ Best Practices

- ✅ Use `useMemo` for expensive calculations.
- ✅ Use `useCallback` when passing functions to child components.
- ❌ Don't overuse — they add complexity if the computation is cheap.
- ⚡ Combine with `React.memo` for maximum optimization.

## 🎯 Mini Challenge

- Create an `ExpensiveCalculation.tsx` component using `useMemo`.
- Create a `Parent.tsx` + `ChildButton.tsx` setup using `useCallback`.
- Observe console logs to see when recalculations or re-renders happen.

👉 Once you confirm this works, we'll move to `useReducer + useContext` — the hooks that prepare you for global state management (Redux, Zustand, etc.).

---

# 📚 Step 6 — useReducer

**🎯 Goal:** Manage complex state logic (multiple values, branching updates) in a predictable way.

### Example: Counter with Reducer

```tsx
import { useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export default function UseReducerCounter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

- `useReducer` is like `useState` but with a reducer function.
- Great for complex state transitions.

# 📚 Step 7 — useContext

**🎯 Goal:** Avoid prop drilling by sharing state globally across components.

### Example: Theme Context

```tsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</button>;
}

export default function UseContextTheme() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeButton />
    </ThemeContext.Provider>
  );
}
```

- `useContext` lets you consume values from a provider without passing props down manually.
- Perfect for themes, auth, or global settings.

## ⚡ Best Practices

- ✅ Use `useReducer` for complex state logic.
- ✅ Use `useContext` for global state (theme, auth, language).
- ❌ Don't overuse context for everything — it can cause unnecessary re-renders.
- ⚡ Combine `useReducer` + `useContext` for a mini Redux-like pattern.

## 🎯 Mini Challenge

- Create a `ReducerCounter.tsx` using `useReducer`.
- Create a `ThemeContext.tsx` with a `ThemeButton` that switches between light/dark.
- Import both into `App.tsx` and confirm they work.

👉 Once you confirm this works, we'll wrap up Phase 3 ✅ and move to Phase 4: Advanced React Patterns — covering custom hooks, higher-order components, render props, and context-based state management.

---

# 🚀 Phase 4 — Advanced React Patterns

**Goal:** Learn how to structure and scale React apps with reusable patterns.

### 📚 Topics We'll Cover

- **Custom Hooks** → encapsulate reusable logic.
- **React.memo** → prevent unnecessary re-renders.
- **Higher-Order Components (HOCs)** → wrap components with extra functionality.
- **Render Props** → pass functions as props for flexible rendering.
- **Context + Reducer combo** → mini state management system.
- **Compound Components** → build flexible UI libraries (like `<Tabs>` with `<Tab>` children).

### 📝 Step 1 — Custom Hooks

**Goal:** Extract reusable logic into a hook.

### Example: useLocalStorage

```tsx
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
```

- Encapsulates logic for syncing state with `localStorage`.
- Reusable across multiple components.

## 🎯 Mini Challenge

- Create a `useLocalStorage` custom hook.
- Use it in a component to persist a user's name across refreshes.
- Confirm that typing a new name and refreshing the page keeps the value.

👉 Once you confirm this works, we'll move to `React.memo + HOCs + Render Props` — the patterns that make your components highly reusable and optimized.

---

# 📚 Step 2 — React.memo

**🎯 Goal:** Prevent unnecessary re-renders of child components when props haven't changed.

### Example

```tsx
import React, { useState } from "react";

const Child = React.memo(({ value }: { value: number }) => {
  console.log("Child rendered");
  return <p>Value: {value}</p>;
});

export default function ReactMemoParent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div>
      <Child value={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOther(other + 1)}>Increase Other</button>
    </div>
  );
}
```

- Without `React.memo`, `Child` re-renders every time `Parent` changes.
- With `React.memo`, `Child` only re-renders when its `value` prop changes.

## 📚 Step 3 — Higher-Order Components (HOCs)

**🎯 Goal:** Wrap components to add extra functionality.

### Example

```tsx
import React from "react";

function withLogger<T extends object>(Component: React.ComponentType<T>) {
  return (props: T) => {
    console.log("Props:", props);
    return <Component {...props} />;
  };
}

function Hello({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>;
}

const HelloWithLogger = withLogger(Hello);

export default function HOCs() {
  return <HelloWithLogger name="Ram" />;
}
```

- `withLogger` adds logging to any component.
- HOCs are useful for cross-cutting concerns (auth, logging, analytics).

## 📚 Step 4 — Render Props

**🎯 Goal:** Pass a function as a prop to control rendering.

### Example

```tsx
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
```

- Flexible pattern for reusable logic.
- Often replaced by custom hooks today, but still valuable to know.

## 🎯 Mini Challenge

- Create a `Parent.tsx` + `Child.tsx` setup using `React.memo`.
- Create a `withLogger` HOC that logs props.
- Create a `Counter` component using **render props**.

👉 Once you confirm these work, we'll move to **Compound Components + Context + Reducer combo** — the patterns used in professional UI libraries (like building your own `<Tabs>` or `<Modal>` system).

---

# 📚 Step 5 — Compound Components

**🎯 Goal:** Allow multiple components to work together under a single parent, giving developers flexibility.

### Example: Tabs System

```tsx
import React from "react";

const TabsContext = React.createContext<{ active: string; setActive: (id: string) => void } | null>(null);

function Tabs({ children }: { children: React.ReactNode }) {
  const [active, setActive] = React.useState("tab1");
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "flex", gap: "1rem" }}>{children}</div>;
}

function Tab({ id, children }: { id: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext)!;
  return (
    <button
      style={{ fontWeight: ctx.active === id ? "bold" : "normal" }}
      onClick={() => ctx.setActive(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }: { id: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext)!;
  return ctx.active === id ? <div>{children}</div> : null;
}

export default function CompoundComponents() {
  return (
    <Tabs>
      <TabList>
        <Tab id="tab1">Home</Tab>
        <Tab id="tab2">Profile</Tab>
      </TabList>
      <TabPanel id="tab1">🏠 Welcome Home</TabPanel>
      <TabPanel id="tab2">👤 User Profile</TabPanel>
    </Tabs>
  );
}
```

- `Tabs` manages state.
- `TabList`, `Tab`, and `TabPanel` consume context.
- Flexible, reusable, and scalable.

# 📚 Step 6 — Context + Reducer Combo

**🎯 Goal:** Build a mini state management system (like Redux) inside React.

### Example: Auth Context

```tsx
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
```

## 🎯 Mini Challenge

- Build a `Tabs` compound component with `TabList`, `Tab`, and `TabPanel`.
- Build an `AuthProvider` using `useReducer + useContext`.
- Test logging in/out and switching tabs.

👉 Once you confirm this works, we'll mark **Phase 4 ✅** and move to **Phase 5: TypeScript + React Integration** — where you'll learn typing props, hooks, contexts, and building strongly typed reusable components.

---

# 🚀 Phase 5 — TypeScript + React Integration

**Goal:** Make your React code strongly typed, safe, and self-documenting. This is where you combine your MERN + TS skills to write production-grade components.

### 📚 Topics We'll Cover

- Typing **props** (required, optional, default values).
- Typing **children** (`React.ReactNode`).
- Typing **events** (`React.ChangeEvent<HTMLInputElement>`).
- Typing **hooks** (`useState`, `useReducer`, `useContext`).
- Typing **custom hooks.**
- Typing **HOCs** and **Render Props**.
- Typing **API responses** with generics.

## 📝 Step 1 — Typing Props

### Example

```tsx
type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean; // optional
};

export default function Button({
  onClick,
  children,
  disabled = false,
}: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
```

- `disabled?` → optional prop.
- Default value handled in destructuring.
- `children` typed as `React.ReactNode`.

## 📝 Step 2 — Typing Events

### Example

```tsx
type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ onChange }: InputProps) {
  return <input onChange={onChange} />;
}
```

- Strong typing ensures you get autocomplete and error checking.

## 📝 Step 3 — Typing Hooks

### useState with type:

```tsx
const [count, setCount] = React.useState<number>(0);
```

### useReducer with type:

```tsx
type State = { count: number };
type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const [state, dispatch] = React.useReducer(reducer, { count: 0 });
```

## 🎯 Mini Challenge

- Refactor your `Button` component with a typed `ButtonProps`.
- Create an `Input` component with a typed `onChange` event.
- Refactor your `ReducerCounter` with typed `State` and `Action`.

👉 Once you confirm this works, we'll move to **Phase 6: State Management (Redux, Zustand, Context patterns)** — where you'll learn how to manage global state in a scalable way for your CRM and SaaS dashboard projects.

---

# 🚀 Phase 6 — State Management

**Goal:** Learn how to manage global state in scalable apps. This is critical for your CRM and SaaS dashboard projects.

## 📚 Options We'll Cover

- **Context + Reducer** (already practiced) → good for small apps.
- **Redux Toolkit** → industry standard for large apps.
- **Zustand** → lightweight, modern alternative.
- **React Query (TanStack Query)** → for server state (API data).

## 📝 Step 1 — Redux Toolkit Basics

### Setup

```bash
npm install @reduxjs/toolkit react-redux
```

### Store

```tsx
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Provider

```tsx
import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./Counter";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

### Component

```tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState, increment, decrement } from "./store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

## ⚡ Best Practices

- ✅ Use Redux Toolkit for **predictable global state**.
- ✅ Use Zustand for **lightweight stores.**
- ✅ Use React Query for **server state** (API calls, caching).
- ❌ Don't mix too many state libraries — pick based on project needs.

## 🎯 Mini Challenge

- Install Redux Toolkit.
- Create a `counterSlice` with `increment` and `decrement`.
- Connect it to your app with `Provider`.
- Build a `Counter` component that uses Redux state.

👉 Once you confirm this works, we'll move to **Phase 7: Routing (React Router v6)** — where you'll learn navigation, protected routes, and layout management for your CRM and SaaS dashboard.

---

# 🚀 Phase 7 — Routing (React Router v6)

**Goal:** Add navigation, layouts, and protected routes to your CRM/dashboard app.

## 📚 Topics We'll Cover

- Basic routing (`BrowserRouter`, `Routes`, `Route`)
- Nested routes (layouts)
- Dynamic routes (`:id`)
- Navigation (`Link`, `useNavigate`)
- Protected routes (auth guard)

## 📝 Step 1 — Basic Routing

### Setup

```bash
npm install react-router-dom
```

### Example

```tsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 📝 Step 2 — Nested Routes (Layouts)

### Example

```tsx
function Layout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<h2>Profile Page</h2>} />
          <Route path="settings" element={<h2>Settings Page</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

## 📝 Step 3 — Protected Routes

### Example

```tsx
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = false; // replace with real auth
  return isAuthenticated ? children : <h2>Access Denied</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <h2>Dashboard</h2>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
```

## 🎯 Mini Challenge

- Install `react-router-dom`.
- Create routes for `Home`, `About`, and `Dashboard`.
- Add a `Layout` with nested routes (`Profile`, `Settings`).
- Implement a `ProtectedRoute` that blocks access if not authenticated.

👉 Once you confirm this works, we'll move to **Phase 8: API Integration (REST + GraphQL)** — where you'll connect your frontend to your backend CRM APIs with proper error handling, loading states, and TypeScript typing.

---

# 🚀 Phase 8 — API Integration (REST + GraphQL)

**Goal:** Connect your frontend to backend APIs with proper error handling, loading states, and TypeScript typing.

## 📚 Topics We’ll Cover

- Fetching data with fetch and axios.
- Handling loading, error, and success states.
- Typing API responses with TypeScript.
- Using **React Query (TanStack Query)** for caching and server state.
- GraphQL basics with Apollo Client.

## 📝 Step 1 — REST API with Fetch

### Example

```tsx
import React from "react";

type User = {
  id: number;
  name: string;
};

export default function Users() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

## 📝 Step 2 — React Query (TanStack Query)

### Setup

```bash
npm install @tanstack/react-query
```

### Example

```tsx
import { useQuery } from "@tanstack/react-query";

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <ul>
      {data.map((u: any) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

- Handles caching, retries, and background refetching automatically.
- Perfect for dashboards with live data.

## 📝 Step 3 — GraphQL with Apollo Client

### Setup

```bash
npm install @apollo/client graphql
```

### Example

```tsx
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`;

function Countries() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data.countries.map((c: any) => (
        <li key={c.code}>{c.name}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Countries />
    </ApolloProvider>
  );
}
```

## 🎯 Mini Challenge

- Create a `Users.tsx` component using **fetch** with error + loading states.
- Create a `Users.tsx` component using **React Query**.
- Create a `Countries.tsx` component using **Apollo Client** with GraphQL.

👉 Once you confirm this works, we’ll move to **Phase 9: UI/UX Enhancements (Styling, Component Libraries, Responsive Design)** — where you’ll polish your app with Tailwind, Material UI, or Chakra, and make it production-ready.

---

# 🚀 Phase 9 — UI/UX Enhancements

**Goal:** Polish your app with styling, component libraries, and responsive design so it looks professional and production-ready.

## 📚 Topics We’ll Cover

### Styling Approaches

- CSS Modules
- Styled Components
- Tailwind CSS

### Component Libraries

- Material UI (MUI)
- Chakra UI
- Ant Design

### Responsive Design

- Flexbox & Grid
- Media queries
- Utility classes in Tailwind

## 📝 Step 1 — Tailwind CSS Setup

### Install

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure `tailwind.config.js`

```js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

### Add to `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Usage

```tsx
export default function Card() {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">Dashboard Card</h2>
      <p className="text-gray-600">This is styled with Tailwind.</p>
    </div>
  );
}
```

## 📝 Step 2 — Material UI Example

### Install

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### Usage

```tsx
import Button from "@mui/material/Button";

export default function App() {
  return (
    <Button variant="contained" color="primary">
      MUI Button
    </Button>
  );
}
```

## 📝 Step 3 — Responsive Design

### Example with Tailwind

```tsx
export default function ResponsiveLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-blue-200 p-4">Column 1</div>
      <div className="bg-green-200 p-4">Column 2</div>
      <div className="bg-red-200 p-4">Column 3</div>
    </div>
  );
}
```

- On mobile → 1 column.
- On medium screens → 3 columns.

## 🎯 Mini Challenge

- Set up **Tailwind CSS** and style a `Card` component.
- Add a **Material UI Button** to your app.
- Create a **ResponsiveLayout** with Tailwind grid that adapts to screen size.

👉 Once you confirm this works, we’ll move to **Phase 10: Testing (Unit, Integration, E2E)** — where you’ll learn Jest, React Testing Library, and Cypress to ensure your app is reliable and bug-free.

---

# 🚀 Phase 9 — UI/UX Enhancements

**Goal:** Polish your app with styling, component libraries, and responsive design so it looks professional and production-ready.

## 📚 Topics We’ll Cover

### Styling Approaches

- CSS Modules
- Styled Components
- Tailwind CSS

### Component Libraries

- Material UI (MUI)
- Chakra UI
- Ant Design

### Responsive Design

- Flexbox & Grid
- Media queries
- Utility classes in Tailwind

## 📝 Step 1 — Tailwind CSS Setup

### Install

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p  -----ignore it, just create file manually(tailwind.config.js)
```

### Configure `tailwind.config.js`

```js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

### Add to `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

```tsx
export default function Card() {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">Dashboard Card</h2>
      <p className="text-gray-600">This is styled with Tailwind.</p>
    </div>
  );
}
```

## 📝 Step 2 — Material UI Example

### Install

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### Usage

```tsx
import Button from "@mui/material/Button";

export default function App() {
  return (
    <Button variant="contained" color="primary">
      MUI Button
    </Button>
  );
}
```

## 📝 Step 3 — Responsive Design

### Example with Tailwind

```tsx
export default function ResponsiveLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-blue-200 p-4">Column 1</div>
      <div className="bg-green-200 p-4">Column 2</div>
      <div className="bg-red-200 p-4">Column 3</div>
    </div>
  );
}
```

- On mobile → 1 column.
- On medium screens → 3 columns.

## 🎯 Mini Challenge

- Set up Tailwind CSS and style a `Card` component.
- Add a Material UI `Button` to your app.
- Create a `ResponsiveLayout` with Tailwind grid that adapts to screen size.

👉 Once you confirm this works, we’ll move to **Phase 10: Testing (Unit, Integration, E2E)** — where you’ll learn Jest, React Testing Library, and Cypress to ensure your app is reliable and bug-free.