import '../css/Home.css'
import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {

    const[searchQuery, setSearchQuery] = useState("");

    //rendering movies dynamically
    const movies = [
        {id: 1, title: "Interstellar", release_date: "2020"},
        {id: 2, title: "Batman", release_date: "2020"},
        {id: 3, title: "Spider man", release_date: "2020"},
        {id: 4, title: "Thor", release_date: "2020"},
        
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");

    }

    
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange = {(e) => setSearchQuery(e.target.value)}
            >
            </input>
            <button type="submit" className="search-button">search</button>
        </form>
        
        <div className="movies-grid">
            {movies.map(
                (movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/>
            ))}
            
        
        </div>
    </div>

}

export default Home;