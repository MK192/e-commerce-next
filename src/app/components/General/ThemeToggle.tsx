"use client";
import { useEffect, useState } from "react";

//context
import { useTheme } from "@/app/context/ThemeContext";

//style
import { StyledThemeToggle } from "../StyledComponents/ThemeToggle.styled";

export default function ThemeToggle() {
  const [isChecked, setIsChecked] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const theme = isChecked ? "dark" : "light";
    setTheme(theme);
  }, [isChecked, setTheme, theme]);
  return (
    <StyledThemeToggle>
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={() => setIsChecked((prev) => !prev)}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>
    </StyledThemeToggle>
  );
}
