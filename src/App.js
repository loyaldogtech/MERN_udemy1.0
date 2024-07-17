import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Submit from './Submit';
import Navbar from './Navbar';
import NoMatch from './NoMatch';
import About from './About';
import Videos from './Videos';
import Notes from './Notes';
import User from './User'
import UserDetails from './UserDetails';
import Admin from './Admin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/submit' element={<Submit />}></Route>
        <Route path='*' element={<NoMatch />}></Route>

        <Route path='/about' element={<About />}>
          <Route path='videos' element={<Videos />}></Route>
          <Route path='notes' element={<Notes />}></Route>
        </Route>

        <Route path='/user' element={<User />}></Route>
        <Route path='/user/:userId' element={<UserDetails />}></Route>
        <Route path='user/admin' element={<Admin />}></Route>

      </Routes>
    </div>
  );
}

export default App;
