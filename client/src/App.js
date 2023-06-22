import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import Browse from './pages/Browse';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';

const App = () => {
  const {user} = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='*' element={<Navigate to='/register' />} />
        <Route path='/login' element={user ? <Navigate to='/browse' /> : <Login />}>
        </Route>
        <Route path='/browse' element={<Browse />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
