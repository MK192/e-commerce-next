"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface ITheme {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeDataContext = createContext<ITheme>({
  theme: "light",
  setTheme: function (theme: string): void {
    throw new Error("Function not implemented.");
  },
});
type Props = {
  children: ReactNode;
};

const ThemeContext = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>("light");
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    if (window) {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [colorTheme, theme]);
  return (
    <ThemeDataContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeDataContext.Provider>
  );
};
export default ThemeContext;

export function useTheme() {
  return useContext(ThemeDataContext);
}
