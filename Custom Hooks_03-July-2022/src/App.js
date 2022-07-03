import './App.css';
import {useAuth} from  './Hooks/useAuth'
import { useEffect, useState } from 'react';

function App() {
  const [formData, setFormData] = useState({username:'', password:''})
  const check = useAuth({username:formData.username , password:formData.password})

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
  }))
  console.log(formData)
  }
  const handleClick = () => {
    return check
  }

  return (
    <div className="container">
        <div class="form-group col-6">
            <label for="inputEmail">Username</label>
            <input 
            type="Username" 
            class="form-control" 
            id="Username" 
            placeholder="Username"
            name='username'
            value={formData.username}
            onChange={handleChange}
            />

        </div>
        <div class="form-group col-6 mb-3">
            <label for="inputPassword">Password</label>
            <input 
            type="password" 
            class="form-control" 
            id="inputPassword" 
            placeholder="Password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            />
        </div>
        <button type="submit" onClick={handleClick} class="btn btn-primary">Sign in</button>
    </div>
  );
}

export default App;
