import { useContext, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import { usePasswordToggler } from "./hooks/usePasswordToggler";
import { AppContext } from "./context/AppContext";
import { fetchTodos } from "./services/api";
import Home from "./pages/Home";
import Counter from "./pages/Counter";

function App() {
  const { type, passwordVisibility, handlePasswordVisibility } =
    usePasswordToggler();
  const { state, setState } = useContext(AppContext);

  const getTodosData = async () => {
    try {
      const response = await fetchTodos();
      setState((prevState) => ({
        ...prevState,
        todos: response.todos,
      }));
    } catch (error) {
      console.log("🚀 ~ getTodosData ~ error:", error);
    }
  };

  useEffect(() => {
    getTodosData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Home name="john doe" />
      <Counter />
      <div className="my-3 d-flex align-items-center gap-2">
        <input type={type} placeholder="Enter password..." />
        <Button variant="primary" size="lg" onClick={handlePasswordVisibility}>
          {passwordVisibility ? "Show" : "Hide"} Password
        </Button>
      </div>
      <div>
        <pre>{JSON.stringify(state.todos, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
