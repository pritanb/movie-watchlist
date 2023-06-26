import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import Browse from './pages/browse/Browse';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';
import TvShows from './pages/browse/TvShows';
import Movies from './pages/browse/Movies';
import MyList from './pages/browse/MyList';

const App = () => {
  const {user} = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='*' element={<Navigate to='/register' />} />
        <Route path='/login' element={user ? <Navigate to='/browse' /> : <Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/browse' element={user ? <Browse /> : <Navigate to='/login' />} />
        <Route path='/browse/tvshows' element={user ? <TvShows /> : <Navigate to='/login' />} />
        <Route path='/browse/movies' element={user ? <Movies /> : <Navigate to='/login' />} />
        <Route path='/browse/mylist' element={user ? <MyList /> : <Navigate to='/login' />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
