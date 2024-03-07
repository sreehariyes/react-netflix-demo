import React, { useEffect, useState } from 'react'
import "./Bannerr.css"
import axios from "../Axios"
import { API_KEY, imageURL } from '../../Constants/Constants'

const Bannerr = () => {

const[movie,SetMovie]=useState()

const[mymovie,SetMymovie]=useState([])

const[posterid,setposterid]=useState([])

const mymovies=()=>{
  axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=10749`).then((response)=>{
    console.log(response.data.results)
    SetMymovie(response.data.results)
  })}


useEffect(()=>{
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[8])
    SetMovie(response.data.results[8])
  })
},[])
   
  const posters=(id)=>{
    console.log(id)
    const selectedMovie = mymovie.find((movie) => movie.id === id);
    setposterid(selectedMovie);
  }

  return (


    <div>
    <div
   style={{ backgroundImage:` url(${posterid ?imageURL + posterid.backdrop_path : imageURL + (movie ? movie.backdrop_path : '')})` }} 
            
   
    className='banner'>
     

    <div className='content'>
      <h1 className='title'>{posterid?.title }</h1>
        <div className='banner-buttons'>
            <button className='button'>play</button>
            <button onClick={mymovies} className='button'>My list</button>
        </div>
        <h1 className='description'>{posterid?.overview} </h1>
    </div>
    <div className="fade_bottom"></div>
       
    </div>

    <div className='row1'>
        
        <div className="posters1">
          
          {mymovie.map((obj)=>
    <img onClick={()=>{posters(obj.id)}}className='poster1' src={`${imageURL+obj.backdrop_path}` } alt='postar'/>
          )}
</div>
    </div>m
    
    </div>
  )
}

export default Bannerr