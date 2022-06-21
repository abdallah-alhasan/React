import React from "react";

const Line = (props) => {
    return(
    <div class="card my-5" >
            <img className="me-2" src={props.img}  alt="..." width={50} height={50}/>
            <input className="me-2" type='checkbox' />
            <label>{props.lang}</label>
            {props.children}
    </div>
    )
}

export default Line