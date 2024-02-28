import Todo from "../interface/todo";

interface Props {
    todo: Todo
}

function TodoDescription(props: Props) {

    const DeleteTodo = async() => {
        await fetch(`http://localhost:5000/api/todo/delete/${props.todo.id}`, {
            method: "DELETE"
        });

        window.location.reload();
    };

    return (
        <div className="flex space-x-4">
            <div>
                <p className={props.todo.isCompleted ? "line-through" : ""}>{props.todo.name}</p>
            </div>
            <div>
                <button
                    type="button"
                    className="inline-block px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-500"
                    onClick={DeleteTodo}
                >
                    <span className="text-white text-lg font-semibold">Delete</span>
                </button>
            </div>
        </div>
    );
}

export default TodoDescription;