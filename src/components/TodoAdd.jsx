export const TodoAdd =({ onNewTodo }) =>{
    
    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            description: 'Hacer el proyecto',
            done: false
        }

        onNewTodo( newTodo )
    }

    return (
        <form onSubmit={(event) => onFormSubmit(event)}>
            <input 
            type="text"
            placeholder="Tarea"
            />

            <button
            type="submit">
                Agregar
            </button>  
        </form>
    )
}