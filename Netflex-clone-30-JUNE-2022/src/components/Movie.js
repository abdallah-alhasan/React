import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Movie() {
    const [movie, setMovie] = useState([])
    const {id} = useParams()
    useEffect(() => {
        async function getMovie(){
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US/61PVJ06oecwvcBisoAQu6SDfdcS`)
            const data = await res.json()
            setMovie(data)
        }
        getMovie()
    },[id])
    const styles = {
        background:`linear-gradient(rgba(30, 27, 38, 0.95), rgba(30, 27, 38, 0.95)), url('https://image.tmdb.org/t/p/original${movie.poster_path}')`,
        backgroundPosition:' center',
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
    }
    // const genres = movie.genres.map(genre => <li><span>{genre.name},</span></li>)
    const Background = `https://image.tmdb.org/t/p/original${movie.poster_path}`
return (
<div className="container" style={styles}>
<div className="cellphone-container">    
    <div className="movie">       
    <div className="menu"><i className="material-icons"></i></div>
    <div className="movie-img" style={{backgroundImage: `url(${Background})`}}  ></div>
    <div className="text-movie-cont">
        <div className="mr-grid">
        <div className="col1">
            <h1>{movie.original_title}</h1>
            <ul className="movie-gen">
            <li>{movie.original_language}  /</li>
            <li>{movie.runtime} mins  /</li>
            {/* <li>{movie.genres.name}</li> */}
            </ul>
        </div>
        </div>
        <div className="mr-grid summary-row">
        <div className="col2">
            <h5>SUMMARY</h5>
        </div>
        <div className="col2">
            <ul className="movie-likes">
            <li><i className="material-icons">&#xE813;</i>124</li>
            <li><i className="material-icons">&#xE813;</i>3</li>
            </ul>
        </div>
        </div>
        <div className="mr-grid">
        <div className="col1">
            <p className="movie-description">{movie.overview} </p>
        </div>
        </div>
        <div className="mr-grid actors-row">
        <div className="col1">
            <p className="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
        </div>
        </div>
        <div className="mr-grid action-row" style={{margin:'0'}}>
        <div className="col2"><div className="watch-btn"><h3><i className="material-icons">&#xE037;</i>WATCH TRAILER</h3></div>
        </div>
        <div className="col6 action-btn"><i className="material-icons">&#xE161;</i>
        </div>
        <div className="col6 action-btn"><i className="material-icons">&#xE866;</i>
        </div>
        <div className="col6 action-btn"><i className="material-icons">&#xE80D;</i>
        </div>
        </div>
    </div>
    </div>
</div>
</div>
)
}

export default Movie