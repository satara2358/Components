import { useState } from 'react'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href='' target="_blank">
          <img src='../../src/assets/logo.png' className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vit</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App // Exportación común 
