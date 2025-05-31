import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="border-l-emerald-500 border-l-4 p-4 mb-4">
        <h1 className="text-2xl font-bold mb-2">Welcome to Vite + React!</h1>
        <p className="text-pink-700">
          This is a simple setup using Vite and React with Tailwind CSS. You can
          start building your application from here.
        </p>
        <p className='text-pink-400'>Hola mia empecemos Nuestro REPO JUNTOS</p>
        <p className='text-green-200'>Te Amo</p>
        <p className='text-red-600'>❤</p>
      </div>
      <div className="logo-container flex gap-4 mb-6 justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
