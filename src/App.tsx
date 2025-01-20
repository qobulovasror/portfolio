import './App.css'
import { ThemeProvider } from "./components/theme-provider"
import {} from "react-router";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <></>
    </ThemeProvider>
  )
}

export default App