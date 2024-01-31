import { useTheme } from "./ThemeContext";
/**
 * Renders a themed component.
 *
 * @return {JSX.Element} The JSX element representing the themed component.
 */
const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`w-2/3 m-auto p-2 
    ${theme === "success" ? "bg-success-content" : "bg-secondary-content"}
    ${theme === "success" ? "text-success" : "text-secondary"}`}>
      <h2 className="text-center text-lime-600">Themed Component</h2>
      <p className="text-center p-4">
        Current Theme:
        <span className="font-bold text-red-600 p-2">{theme} </span>{" "}
      </p>
      <div className="flex justify-center p-4">
        <button className="btn btn-secondary " onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemedComponent;
