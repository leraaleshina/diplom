import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Routes} from './routes'

function App() {
  const routes = Routes();
  return (
    <div className={App}>
      <BrowserRouter>
      {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
