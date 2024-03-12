import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store=>store.movies.trailerVideo)
  useMovieTrailer(movieId) ;
  if(trailerVideo===null) return;
  return (
    <div className="absolute w-[100%] 
    -top-2 inset-0  aspect-video">
      <iframe
       className="w-[100%] aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
       
     
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      
      ></iframe>
    </div>
  );
};

export default VideoBackground;

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
