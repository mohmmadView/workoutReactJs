import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
/**
 * Creates a theme provider component that wraps the provided children components.
 *
 * @param {Object} props - The props object containing the children component.
 * @param {ReactNode} props.children - The children component to be wrapped.
 * @return {JSX.Element} - The theme provider component.
 */
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("success");
  /**
   * Toggles the theme between "success" and "secondary".
   *
   * @return {void} No return value.
   */
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "success" ? "secondary" : "success"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
/**
 * Returns the current theme from the ThemeContext.
 *
 * @return {Theme} The current theme object.
 */
const useTheme = () => {
  return useContext(ThemeContext);
};
export { ThemeProvider, useTheme };
