import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Stars } from './component/stars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Stars count={3}/>
  )
}

export default App
