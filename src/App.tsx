import './App.css'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import { useState } from 'react';

interface FormData{
  todo: string
}

function App() {
  const [todos, setTodos] = useState(["Buy groceries", "Clean the house", "Walk the dog"])
  function handleSubmit(formData: FormData) {
    if(formData && formData.todo)
      setTodos(prev=>{
        return [...prev, formData.todo]
      })
  }
  return (
    <>
      <TodoList todos={todos}/>
      <TodoInput onSubmit={handleSubmit} />
    </>
  )
}

export default App
