import Movie from "./components/Movie"

const App = () => {
  //const movieList = []

   // for (let index = 0; index <100; index++){
   //   movieList.push(<Movie />)
   // }


  return (
    <div>
      <div className="movies flex items-center justify-center gap-3 h-screen">
        <Movie title="Ironman"/>
        <Movie title="HulK"/>
        <Movie title="Avengers"/>

      </div>
    </div>
  )
}

export default App
