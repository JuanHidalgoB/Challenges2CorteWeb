import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoReducer } from './TodoReducer'
import { useReducer } from "react";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Hacer los challenges',
        done: false
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState)

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo
        }
        dispatch( action )
    }

    return (

        <>
        <h1>TodoApp, <small>pendientes: 2</small></h1>
        <hr />

        <div>
            <div>
                <TodoList todos={ todos } />
            </div>

            <div>
                <TodoAdd onNewTodo={handleNewTodo} />
            </div>
        </div>
        </>
    )
}