import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './pages/Profile/Profile';
import Dialogs from './pages/Dialogs/Dialogs';
import Background from './components/Background/Background';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsersContainer } from './pages/Users/UsersContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="social-network">
        <Background />
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route 
              path='/profile' 
              element={<Profile />} 
            />
            <Route 
              path='/dialogs' 
              element={<Dialogs />} 
            />
            <Route
              path='/users'
              element={<UsersContainer />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;