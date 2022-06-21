import React from "react";
import Img from '../825940.jpg'

const Card = (props) => {
    return(
    <div class="container my-5" >
        <div class="card">
            <img src={Img} class="card-img-top" alt="..." width={50} height={400}/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted ">{props.subtitle}</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            {props.children}
        </div>
    </div>
    )
}

export default Card