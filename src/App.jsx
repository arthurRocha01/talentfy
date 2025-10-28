import './App.css'
import { Input } from './component/Input.jsx'
import { Logo } from './component/Logo.jsx'
import { Button } from './component/Button.jsx'
function App() {
  return (
    <>
      {/* <Logo />   */}
      <Input text="Input" placeholder="input..." type="text" />
      <Button text="Button" />
    </>
  )
}

export default App
