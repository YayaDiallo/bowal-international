import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import SignInPage from './pages/signIn';
import Error from './pages/error';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signIn' element={<SignInPage />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
