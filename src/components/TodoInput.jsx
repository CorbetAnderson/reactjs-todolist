import React from 'react'

export default function Todoinput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props

  return (
    <header>  
        <input value ={todoValue} onChange={(e) => {setTodoValue(e.target.value)}} // When the text field is changed the todoValue is changed
        placeholder="Enter todo..." />

        <button onClick={() => {
            handleAddTodos(todoValue) // Add the todo to the list on click
            setTodoValue('') // Reset the default todoValue
        }}>Add</button>
    </header>
  )
}
