import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from "../Axios"
import YouTube from 'react-youtube'
import { API_KEY, imageURL } from '../../Constants/Constants'
const RowPost = (props) => {

  const[urlid,SetUrlid]=useState('')

  const[movies,SetMovie]=useState([])

useEffect(()=>{
 axios.get(props.url).then(responce=>{
    console.log(responce.data)
    SetMovie(responce.data.results)

 }).catch(err=>{
  alert('network error')
 })
}, [])
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};


 const handlemovie=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(responce=>{
      console.log(responce.data)
    if(responce.data.results.length!==0){
      SetUrlid(responce.data.results[0])}
      else{
        console.log('array empty')
      }
  })
 }
 

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handlemovie(obj.id)

            }className={props.isSmall?'smallposter':"poster"}src={`${imageURL+obj.backdrop_path}`} />
          )}
          
            
           
        </div>
      {urlid && <YouTube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default RowPost