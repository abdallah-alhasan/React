import React, {Component} from "react";

class Navbar extends Component{
    render(){
        return(
                <nav class="navbar navbar-expand-sm navbar-light bg-primary">
                    <div class="container-fluid">
                        {this.props.link}
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarID">
                            <div class="navbar-nav">
                                Home
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar