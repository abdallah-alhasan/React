import logo from '../logo.svg';
import React, { Component } from 'react'
import UserContext from '..//UserContext'

export default class Navbar extends Component {
    state={
        darkMode:true
    }
    static contextType = UserContext
    
    componentDidMount() {
    const darkMode = this.context.darkMode

    console.log(darkMode) 
  }
  render() {
    return (
        <nav 
        className={this.state.darkMode ? "dark": ""}
    >
        <img 
            className="nav--logo_icon"
            src={logo}
            alt="logo"
        />
        <h3 className="nav--logo_text">ReactFacts</h3>
        
        <div 
            className="toggler" 
        >
            <p className="toggler--light">Light</p>
            <div 
                className="toggler--slider"
                // onClick={props.toggleDarkMode}
                onClick={() => {
                    this.setState({darkMode: !this.state.darkMode})
                    console.log(this.state)
                }}
            >
                <div className="toggler--slider--circle"></div>
            </div>
            <p className="toggler--dark">Dark</p>
        </div>
    </nav>
    )
  }
}
