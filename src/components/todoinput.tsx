import { useState } from "react";
import CreateTodo from "../interface/createtodo";

function TodoInput() {

    const [todoCreate, setTododCreate] = useState<CreateTodo>();

    const handleInputChange = (event) => {
        const todoname = event.target.value;
        const tododCreateObj: CreateTodo = { name: todoname, isCompleted: false};
        setTododCreate(tododCreateObj);
    };

    const AddTodo = async() => {
        await fetch("http://localhost:5000/api/todo/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todoCreate)
        });

        window.location.reload();
    };

    return (
        <div className="flex space-x-4">
            <input
                type="text"
                className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none bg-gray-100 hover:bg-gray-200 placeholder-gray-400 leading-6 font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-inner shadow-gray-100/20"
                placeholder="Please enter Todo"
                aria-label="Text Input"
                value={todoCreate?.name}
                onChange={handleInputChange}
            />
            <button
                type="button"
                className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-500"
                onClick={AddTodo}
            >
                <span className="text-white text-lg font-semibold">Add</span>
            </button>
        </div>
    );
}

export default TodoInput;