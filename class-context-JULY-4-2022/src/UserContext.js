import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
// Context state
state = {
darkMode: false,
}

// Method to update state
setDarkMode = (darkMode) => {
this.setState((prevState) => ({ darkMode }))
}

render() {
const { children } = this.props
const { darkMode } = this.state
const { setDarkMode } = this

return (
    <UserContext.Provider
    value={{
        darkMode,
        setDarkMode,
    }}
    >
    {children}
    </UserContext.Provider>
)
}
}

export default UserContext

export { UserProvider }