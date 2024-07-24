async function getAllTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await response.json();
}

export const preloadTodos = () => {
    void getAllTodos();
}
const TodoPage = async () => {
    const todos = await getAllTodos()
    return (
        <div>
            <h1>todos</h1>


            <div className="grid grid-cols-3 gap-4">
                {
                    todos &&
                    Array.isArray(todos) &&
                    todos.map((todo: any) => (
                        <div className="border p-5 shadow-lg " key={todo.id}>
                            <h4>{todo.title}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default TodoPage