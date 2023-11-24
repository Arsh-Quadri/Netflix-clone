import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRouter from './components/ProtectedRouter';



function App() {
  return (
    <div className="App scrollbar-hide">
      <AuthContextProvider>

        <Router>

          <Navbar />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/account' element={<ProtectedRouter><Account /></ProtectedRouter>} />
          </Routes>

        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
