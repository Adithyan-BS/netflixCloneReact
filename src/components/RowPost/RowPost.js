import React,{useEffect,useState,useRef} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube';
function RowPost(props) {
    const [movies, setMovie] = useState([]);
    const [urlid, setUrlid] = useState("");
    useEffect(() => {
        axios.get(props.url).then(response=>{
           // console.log(response.data.results)
            setMovie(response.data.results)
        })
    })
   
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
        
      };
      
      const handleMovie=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.data)
            if(response.data.results.length!==0){
                setUrlid(response.data.results[0])
            }else{
                console.log('no vedio available from the rest API server')
            }
        })

      }
      const ref = useRef(null);
      const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };
      
        
    return (
        <div className='row'>
            <h2 className="rowTitle">{props.title}</h2>

            <div className="scrollButton">
           
            <div  ref={ref} className="posters">
                {movies.map((obj,index)=>
                <figure>
                    <img onClick={()=>handleMovie(obj.id)} alt="imageForRow" className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`}/>
                    <figcaption className="namer">{obj.name||obj.title}</figcaption>

                </figure>
                )}
            </div>
            <div >
            <button className="scrollleft" onClick={() => scroll(-500)}>Left</button>
            <button className="scrollRight"onClick={() => scroll(500)}>Right</button>
            </div>

            </div>
         {urlid && <YouTube opts={opts}  videoId={urlid.key}/>}
               
        </div>
    )
}

export default RowPost
