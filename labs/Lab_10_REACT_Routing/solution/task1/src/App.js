import { Routes, Route, Link } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { Aboutpage } from './pages/Aboutpage';
import { Notfoundpage } from './pages/Notfoundpage';

function App() {
  return (
    <>
      <header>
        <Link to="/">Дом </Link>
        <Link to="/about">след.</Link>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}

export default App;