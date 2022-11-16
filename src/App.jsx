import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Error from './pages/error';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
