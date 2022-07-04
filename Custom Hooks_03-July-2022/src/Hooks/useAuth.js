import {useState} from 'react'

export function useAuth(data) {
    const [auth] = useState({
        username:'test',
        password:'1234',
    })
    let isLoggedIn = false
        if (data.username === auth.username && data.password === auth.password) {
            sessionStorage.setItem('logged', 'true') 
            isLoggedIn = true
        }
    return isLoggedIn

}
