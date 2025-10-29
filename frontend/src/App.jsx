import './App.css'
import { Input } from './component/Input.js'
import { Logo } from './component/Logo.js'
import { Button } from './component/Button.js'
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
