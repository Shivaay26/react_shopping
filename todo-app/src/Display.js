import React from 'react'

const Display = ({todos,HandleDelete}) => {
    return (
        <div>
            {todos.map(todo=>{
               return <div className="todo" onClick={()=>HandleDelete(todo.id)}>  <h1>{todo.todo}</h1> </div>
            })}
        </div>
    )
}

export default Display
