import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {    
    const [movie, setMovie] = useState();
    const [imgC, setImgcounter] = useState(0);
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
  .then(function (response) {
    // console.log(response.data.results)

    // handle success
    if(imgC<response.data.results.length){
        setMovie(response.data.results[imgC])
    }else{
        setImgcounter(0)
    }

  })
  

      
    })
    function imgCounter(){
        setImgcounter(imgC+1)
        //  console.log(imgC)

    }

    
   
    return (
        <div
       onClick={imgCounter}
        style={{ backgroundImage:`url(${movie ?imageUrl+movie.backdrop_path :""})`}}
         className="banner">
            
            <div className="content">
                <h1 className="title">{movie ?movie.name||movie.title :""}</h1>
                <div className="banner_buttons">
                    <button className="button">play</button>
                    <button className="button">my list</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
            
            
        </div>
    )
}

export default Banner;

