import React, {Component} from "react";

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : 'Welcome visitor',
            button:'subscribe'
        }
    }

    changefunction(){
        if (this.state.message === 'Welcome visitor') {
            this.setState({
                    message: 'Thank you',
                    button:'unsubscribe'
                }
            )
        }else{
            this.setState({
                message : 'Welcome visitor',
                button:'subscribe'
            })
        }
    }
    render(){
        return(
            <div className="container">
                <h3>{this.state.message}<span class="badge bg-primary">New</span></h3>
                <div>
                <button onClick = {() => this.changefunction()} type="button" name="" id="" class="btn btn-primary">{this.state.button}</button>
                </div>
            </div>
        )
    }
}

export default Message