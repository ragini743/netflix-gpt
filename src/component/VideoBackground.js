import React, { useEffect } from 'react'
import { options } from '../utils/constant'
const videoBackgroundLogo = "https://image.tmdb.org/t/p/original"

const VideoBackground = ({movieId}) => {
const getBackgroundVideos = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/932420/videos?language=en-US", options)
    const json =await data.json() ; 
    console.log("json",json)
} ;
useEffect(() => {getBackgroundVideos()} ,[]) ;
  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground ;


// {
//     "id": 932420,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "omBi2KxEcRk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-02-02T15:00:00.000Z",
//         "id": "65bdbab1931ea1017c99fabd"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Teaser",
//         "key": "rzo4XdMBSHw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-11-10T21:22:00.000Z",
//         "id": "654ea25f41a561336d878cc6"
//       }
//     ]
//   }