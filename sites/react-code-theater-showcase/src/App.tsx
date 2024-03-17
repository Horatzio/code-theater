import { useEffect } from 'react'
import './App.css'
import CodeTheater from './components/CodeTheater'
import { createEditor } from 'C:/Projects/code-theater-test/dist/editor.js'

function App() {
  useEffect(() => {
    createEditor();
  }, [])

  return (
    <div style={{ width: "200px" }}>
      <CodeTheater></CodeTheater>
    </div>
  )
}

export default App
