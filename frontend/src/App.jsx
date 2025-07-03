
import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  
  const movieNumber = 1;
  return (
    <>
    //conditional rendering
    {/* { movieNumber === 1 ? (
      <MovieCard movie={{title: "Interstellar", release_date: "2024"}}/>
    ):
      (
        <MovieCard movie={{title: "Thor", release_date: "2020"}}/>
      )
      
    } */}

    {movieNumber === 1 && <MovieCard movie={{title: "Interstellar", release_date: "2024"}}/>}
    </>
    
  )
}



export default App
