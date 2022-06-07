import { createRoot } from 'react-dom/client'
import App from './App'
import './i18n/i18n'

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); */

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
