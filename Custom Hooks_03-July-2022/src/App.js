import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  const [isAuthorized, setIsAuthorized] = useState('false')
  const [Logout, setLogout] = useState('false')
  
  const checkLogin = sessionStorage.getItem('logged')

  const handleAuthorization = () => {
    sessionStorage.setItem('logged' ,  'true')
    setIsAuthorized(oldState => !oldState)
  }
  console.log(isAuthorized)
  const handleLogout = () => {
    sessionStorage.setItem('logged' ,  'false')
    setLogout(oldState => !oldState)
}
  return (
    <div className="container">
        {<Navbar Logout={handleLogout} />}
        {checkLogin === 'false' && <Login checker={handleAuthorization}/>}
    </div>
  );
}

export default App;
