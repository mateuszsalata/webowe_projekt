import './App.css'
import Example from './components/Switcher.tsx'
import IconSideNav from './components/Navbar.tsx'
import VerticalAccordion from "./components/Sliders.tsx";
function App() {

  return (
    <>
        <body>
            <div className="nav">
                <VerticalAccordion />
                <IconSideNav />
            </div>
            <div>
                <Example />
            </div>
        </body>
    </>
  )
}

export default App
