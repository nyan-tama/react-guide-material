import { useState } from 'react'
import { useDispatchTodos } from "../context/TodoContext";

const Item = ({ todo }) => {
    const [editingContent, setEditingContent] = useState(todo.content);
    const dispatch = useDispatchTodos();

    const changeContent = (e) => setEditingContent(e.target.value);

    const toggleEditing = () => {
        const newTodo = { ...todo, editing: !todo.editing };
        dispatch({ type: "todo/update", todo: newTodo });
    }

    const confirmContent = (e) => {
        // デフォルトの動作をキャンセル
        e.preventDefault();
        const newTodo = { ...todo, content: editingContent, editing: !todo.editing };
        dispatch({ type: "todo/update", todo: newTodo });

    }

    const complete = (todo) => {
        dispatch({ type: 'todo/delete', todo })
    }

    return (<>
        <div key={todo.id}>
            <button onClick={() => complete}>完了</button>
            <form onSubmit={confirmContent} style={{ display: 'inline' }}>
                {
                    todo.editing ?
                        (
                            <input type="text" value={editingContent} onChange={changeContent} />
                        ) : (
                            <span onDoubleClick={toggleEditing}>{todo.content}</span>
                        )
                }
            </form>

        </div>
    </>)
}

export default Item