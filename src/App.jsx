import React, { useState } from 'react'
import './app.css'
import { AppUI } from './AppUI.jsx'
import { TodoProvider } from './TodoContetx/index.jsx'

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App