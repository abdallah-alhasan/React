import React, { useEffect ,useState} from 'react'

function MovieList() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function getMovies(){
            const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US/61PVJ06oecwvcBisoAQu6SDfdcS')
            const data = await res.json()
            setMovies(data.results)
        }
        getMovies()
    },[])

const moviesList = movies.map(movie => <a href={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie" /></a> )

return (
<section className="main-container" >
<div className="location" id="home">
    <h1 id="home">Popular on Netflix</h1>
    <div className="box">
        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true" alt="movie" /></a>
        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true" alt="movie" /></a>
        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true" alt="movie" /></a>
        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true" alt="movie" /></a>
        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true" alt="movie" /></a>
        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" alt="movie" /></a>

        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true" alt="movie" /></a>
        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true" alt="movie" /></a>
        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true" alt="movie" /></a>
        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true" alt="movie" /></a>
        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true" alt="movie" /></a>
        <a href="//"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p12.PNG?raw=true" alt="movie" /></a>        
    </div>
</div>


<h1 id="myList">Trending Now</h1>
<div className="box">
    {moviesList}
</div>

<h1 id="tvShows">TV Shows</h1>
<div className="box">
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv2.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv3.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv4.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv5.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv6.PNG?raw=true" alt="movie" /></a>

    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv7.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv8.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv9.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv10.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv12.PNG?raw=true" alt="movie" /></a>              
</div>


{/* <h1 id="movies">Blockbuster Action & Adventure</h1>
<div className="box">
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m1.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m3.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m4.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m5.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m6.PNG?raw=true" alt="movie" /></a>                
</div> */}

{/* <h1 id="originals">Netflix Originals</h1>
<div className="box">
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o5.PNG?raw=true" alt="movie" /></a>
    <a href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true" alt="movie" /></a>                
</div> */}
</section>
)
}

export default MovieList