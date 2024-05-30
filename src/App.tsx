import { useState } from 'react'
import './App.css'
import Example from './components/Switcher.tsx'
import IconSideNav from './components/Navbar.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="nav">
            <IconSideNav />
        </div>
        <div>
            <Example />
        </div>

    </>
  )
}

export default App
