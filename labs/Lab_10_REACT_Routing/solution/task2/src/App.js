import { Routes, Route, Link } from 'react-router-dom';

import { Userspage } from './pages/Userspage';
import { Userpage } from './pages/Userpage';
import { Aboutpage } from './pages/Aboutpage';
import { Homepage } from './pages/Homepage';

function App() {
  let users = [
    {id: 1, name: "username1"},
    {id: 2, name: "username2"},
    {id: 3, name: "username3"},
    {id: 4, name: "username4"},
    {id: 5, name: "username5"},
    {id: 6, name: "username6"}
  ]
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/users" element={<Userspage users={users}/>} />
        <Route path="/users/:id" element={<Userpage users={users}/>} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </>
  );
}

export default App;