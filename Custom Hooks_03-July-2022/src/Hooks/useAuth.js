import {useState} from 'react'

export function useAuth(data) {
    const [auth] = useState({
        username:'test',
        password:'1234',
    })
    let message = ''
    data.username === auth.username && data.password === auth.password ? message = console.log('logged in successfully') : message = console.log('login failed')
    return message
}
