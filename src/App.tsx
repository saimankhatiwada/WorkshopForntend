import TodoInput from "./components/todoinput";
import TodoList from "./components/todolist";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col space-y-4">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
