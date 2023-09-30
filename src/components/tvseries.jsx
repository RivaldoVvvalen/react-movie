import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchUpcomingMovies } from '../api/api';
const Upcoming = () => {
    
    const [tvSeries, setTvSeries] = useState([]);
  
    useEffect(() => {
      fetchUpcomingMovies()
        .then((response) => {
          setTvSeries(response.data.results);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
    return (
        <>
        <div className="container">
          <h1 className="text-2xl text-white ml-10 mt-20 mb-10" id='tvseries'>Tv Series</h1> 
          <section className="trending-section grid grid-cols-2 md:grid-cols-4 gap-5 px-10">
            {tvSeries.map((movie) => (
             <div className="card relative overflow-hidden rounded-lg shadow-lg bg-opacity-50 backdrop-blur-md transition duration-300 hover:scale-105 z-50" key={movie.id}>
             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover" />
             <div className="card-desc absolute inset-0 flex flex-col justify-center items-center text-gray opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg p-4">
               <h3 className="text-slate-50 lg:text-xl md:text-sm text-center font-bold text-shadow-md" style={{ textShadow: '1px 1px 3px #000000' }}>{movie.name}</h3>
               <p className="text-slate-50 text-md md:text-sm text-center font-semibold text-shadow-md hidden md:block" style={{ textShadow: '1px 1px 3px #000000' }}>{movie.overview}</p>
               <p className="text-slate-50 text-sm text-center font-semibold text-shadow-md block md:hidden" style={{ textShadow: '1px 1px 3px #000000' }}>
                 {movie.overview.length > 100 ? `${movie.overview.slice(0, 100)}...` : movie.overview}
               </p>
               <span className="text-xl text-white mt-2 font-bold" style={{ textShadow: '1px 1px 5px #000000' }}><i className="bi bi-star-fill text-xl text-yellow-500"></i>  {movie.vote_average}</span>
             </div>
           </div>
           
            ))}
          </section>
        </div>
        </>
    )
}
export default Upcoming