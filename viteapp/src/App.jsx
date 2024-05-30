import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400'> tailwind Test </h1>
      <div className="img">
        <img src="/viteapp/public/vite.svg" alt="logo" srcset="" />
      </div>
    </>
  )
}

export default App
