import { useEffect, useState } from "react";
import TodoDescription from "./tododescription";
import Todo from "../interface/todo";

function TodoList() {
    const [todos, setTodo] = useState<[Todo]>();

    const fetchAllTodo = async () => {
        const response = await fetch("http://localhost:5000/api/todo/get");
        if(response.ok) {
            const data = await response.json();
            setTodo(data);
        }
    }

    useEffect(() => {
        fetchAllTodo();
    },[]);


    return (
        <div className="flex flex-col space-y-4">
            {todos && todos.length > 0 &&
                todos.map((item) => (
                   <TodoDescription todo={item} key={item.id} />
                ))}
        </div>
    );
}

export default TodoList;