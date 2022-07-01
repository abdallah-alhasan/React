import React, { useEffect ,useState} from 'react'
//https://api.themoviedb.org/3/trending/all/day?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US/61PVJ06oecwvcBisoAQu6SDfdcS
function MovieList() {

        //fetch tv shows
    const [tvShows, setTvShows] = useState([])
    useEffect(() => {
        async function getShows(){
            const res = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US/61PVJ06oecwvcBisoAQu6SDfdcS')
            const data = await res.json()
            setTvShows(data.results)
        }
        getShows()
    },[])

const tvList = tvShows.map(show => <a href={`/movie/${show.id}`}><img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} alt="show" /></a> )

    //fetching popular movies
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

    //fetching trending movies
const [trending, setTrending] = useState([])
useEffect(() => {
    async function getMovies(){
        const res = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US/61PVJ06oecwvcBisoAQu6SDfdcS')
        const data = await res.json()
        setTrending(data.results)
    }
    getMovies()
},[])

const tending = trending.map(movie => <a href={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie" /></a> )



return (
<section className="main-container" >
<div className="location" id="home">
    <h1 id="popular">Popular on Netflix</h1>
    <div className="box">
        {tending}
    </div>
</div>


<h1 id="trending">Trending Now</h1>
<div className="box">
    {moviesList}
</div>

<h1 id="tvShows">TV Shows</h1>
<div className="box">
    {tvList}           
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