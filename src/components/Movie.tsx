import { useState } from "react";
import type { Imovie } from "../interfaces/movie";
import { FaPlay, FaRegHeart } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";

interface IMovieComponent {
    movieInfos: Imovie, 
    handleParentClick: (movieTitle : string) => void
 }

const Movie = ({movieInfos, handleParentClick}: IMovieComponent) => {

    //let Counter : number = 0
    const [counter, setCounter] = useState<number>(0)
    const myFunction = () => {
        setCounter(counter + 1)
        console.log(counter)
    }

    return (
        <div className="p-4 border rounded-2xl">
            <div className="movie mb-4 flex flex-col items-center">
                <img width={300} src={'https://image.tmdb.org/t/p/w500' + movieInfos.poster_path} alt="" />
               
            </div>
            <div>
                <h3 className="text-2xl font-bold">{movieInfos.title}</h3>
                <p>{movieInfos.overview} </p>

            </div>
                
            <div className="actions flex  gap-4">
                {/* 
                {myFunction}
                appeler une fonction par reference appeler {myfunction} si une fonction ne prends pas de params
                {() => myFunction } 
                */}
{/*                 <button onClick={()=> myFunction()} className="btn">Like {counter}</button>

 */}                
                <FaRegHeart onClick={() => myFunction()}  /> {counter}
                <FaPlay onClick={() => handleParentClick(movieInfos.title)}/> 
                <GrAddCircle/>
            </div>
             
        </div>
    )
}
/* const myFunction = () => {
        console.log("cliqued")

        const button = document.querySelector('button')
        button.addEventlistener(')
    } */




export default Movie;
