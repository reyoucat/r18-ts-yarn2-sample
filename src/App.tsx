import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import StyledButton from './StyledButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <StyledButton >헐 -_-lll</StyledButton>
      </header>
    </div>
  )
}

export default App
