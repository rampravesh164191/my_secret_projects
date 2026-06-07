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