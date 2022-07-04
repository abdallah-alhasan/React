import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { UserProvider } from './UserContext'


export default function App() {
    const darkMode = true
    
    return (
        <UserProvider value={darkMode}>
            <div className="container">
                <Navbar 
                    darkMode={darkMode} 
                />
                <Main darkMode={darkMode} />
            </div>
        </UserProvider>
    )
}
