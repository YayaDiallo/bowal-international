import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import SignInPage from './pages/signIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
