// src/App.tsx
import { useState } from "react";
import "./App.css";

// Define a TypeScript interface for our Todo item for better type safety
interface Todo {
  id: number;
  text: string;
}

function App() {
  // State for the list of todos, now storing objects with id and text
  const [todos, setTodos] = useState<Todo[]>([]);
  // State for the text currently in the input field
  const [newTodoText, setNewTodoText] = useState("");

  // Function to add a new todo item
  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      // Ensure input is not empty or just whitespace
      const newTodoItem: Todo = {
        id: Date.now(), // Simple unique ID: timestamp of creation
        text: newTodoText,
      };
      setTodos([...todos, newTodoItem]); // Add new todo to the array immutably
      setNewTodoText(""); // Clear the input field
    }
  };

  // Function to remove a todo item by its unique ID
  const handleRemoveTodo = (idToRemove: number) => {
    // Filter out the todo item with the matching ID
    // This creates a *new* array without the specified item (immutability)
    setTodos(todos.filter((todo) => todo.id !== idToRemove));
  };

  return (
    <>
      <h1>My To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTodoText} // Binds input value to state (controlled component)
          onChange={(e) => setNewTodoText(e.target.value)} // Updates state on change
          placeholder="Add a new to-do"
          // Optional: Allow adding with Enter key
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo();
            }
          }}
        />
        <button onClick={handleAddTodo}>Add To-Do</button>
      </div>

      <h2>Todos:</h2>
      {todos.length === 0 ? (
        <p>No todos yet! Add some above.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            // Use todo.id as the key for better React performance and stability
            <li key={todo.id}>
              {todo.text}
              {/* Call handleRemoveTodo with the specific todo's ID */}
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
