import './App.css';
import { Route, Routes} from 'react-router';
import Inicio from './Pages/Inicio/Inicio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Inicio />} />
      </Routes>
    </div>
  );
}

export default App;
