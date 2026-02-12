// ThemeToggle.tsx
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync with <html> class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <h1 className="text-3xl font-bold mb-4">
        {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded bg-blue-500 text-white dark:bg-yellow-500"
      >
        Toggle Theme
      </button>
    </div>
  );
}