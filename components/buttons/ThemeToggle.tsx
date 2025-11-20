"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  const themes = [
    { value: "light", icon: Sun, label: "Claro" },
    { value: "dark", icon: Moon, label: "Oscuro" },
    { value: "system", icon: Monitor, label: "Sistema" },
  ];

  return (
    <div className="flex gap-2 items-center p-1 rounded-lg bg-gray-200 dark:bg-gray-800">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`p-2 rounded-md transition-colors ${
            theme === value
              ? "bg-white dark:bg-gray-700 shadow-sm"
              : "hover:bg-gray-300 dark:hover:bg-gray-700"
          }`}
          aria-label={label}
          title={label}
        >
          <Icon className="w-2.5 h-2.5" />
        </button>
      ))}
    </div>
  );
}
