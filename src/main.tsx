import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './style/all.scss'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
