import { useState } from "react"
import Movie from "./components/Movie"
import { movieData  } from "./data/movieData"
import NavigationBar from "./components/NavigationBar"

const  App =  () => {

  const [selectedMovie, setSelectedMovie] = useState<string>(" ")
  const [selectedSnack, setSelectedSnack] = useState<string[]>([])

  const getMovieFromChild = (myMovie: string) => {
    setSelectedMovie(myMovie)
    console.log(myMovie)

  }
// J'ai une fonction j'appele une fonction
  const addSnack = (snack:string) => {
/*     
  setSelectedSnack(selectedSnack.push(snack))
 */
    if(!selectedSnack.includes(snack))
    setSelectedSnack([...selectedSnack, snack])


  }
     return (
      <div>
        <div>
              <NavigationBar />
                <p>You choose this movie : {selectedMovie}</p>
        </div>
  
          <div className="movie gap-3 h-screen grid grid-cols-4 ">
        {
            movieData.length > 0 && movieData.map((item, index) => (
              <div>
                

                <Movie key={index} movieInfos={item} handleParentClick={getMovieFromChild} />
                <button onClick={() => addSnack('Pop-corn')} className="btn btn-primary">Pop corn</button>
                <p>You choose this movie : {selectedSnack.join(' , ')}</p> 
                {/* On ajoute .join(' , ') convertir en chaine de caractere avec virgule */}

              </div>
            ))    
          }

        </div>
      </div>
  )
        
}
export default App;