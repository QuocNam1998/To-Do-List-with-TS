import './App.css'
import useRoutesElements from './useRoutes'

function App() {
  const routes = useRoutesElements()
  return <div>{routes}</div>
}

export default App
