import {useAuth} from  '../Hooks/useAuth'
import {useState } from 'react';

function Login(props) {
const [formData, setFormData] = useState({username:'', password:''})
const check = useAuth({username:formData.username , password:formData.password})

const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevData => ({
    ...prevData,
    [name]: value
}))
}
const handleClick = () => {
    check && props.checker()  
}

return (
    <div className="container">
        <div className="form-group col-6">
            <label htmlFor="inputEmail">Username</label>
            <input 
            type="Username" 
            className="form-control" 
            id="Username" 
            placeholder="Username"
            name='username'
            value={formData.username}
            onChange={handleChange}
            />

        </div>
        <div className="form-group col-6 mb-3">
            <label htmlFor="inputPassword">Password</label>
            <input 
            type="password" 
            className="form-control" 
            id="inputPassword" 
            placeholder="Password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            />
        </div>
        <button type="submit" onClick={handleClick} className="btn btn-primary">Sign in</button>
    </div>
    )
}

export default Login