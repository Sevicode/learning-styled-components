import {Button} from "./components/Button.styles"
import {Global} from "./components/Global.styles"

function App() {
  return (
    <div>
      <Global />
      <Button lightTheme lightColor>Light Theme</Button>
      <Button>Dark Theme</Button>
      
    </div>
  );
}

export default App;
