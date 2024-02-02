import React from 'react'
import netflixlogo from '../images/netflixlogo-removebg-preview.png'
import N from '../images/N.png'
import axios from '../axios/Axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { API_KEY, imageUrl } from '../constants/Constants'
import YouTube from 'react-youtube';
const Main = () => {
  const [movie, setMovie] = useState()
  const [movies, setMovies] = useState([])
  const [urlid ,seturlid] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce) => {
      const movieArray = responce.data.results;
      const randomIndex = Math.floor(Math.random() * movieArray.length);
      setMovie(movieArray[randomIndex]);
    })
  }, [])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovies(response.data.results);

    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    },
  };
  const handleMovies = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((responce)=>{
      if(responce.data.results.length!==0)
      {
        seturlid(responce.data.results[0])
      }
    })
  }
  return (
    <div><>
      <div className="container-fluid ml-0 mr-0 pl-0 pr-0 bg-dark">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" href="#">
            <img
              src={netflixlogo}
              width={100}
              height={30}
              className="d-inline-block align-top"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto font-weight-bold">
              <li className="nav-item">
                <a className="nav-link text-white " href="#">
                  Tv Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#">
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  my List
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
      </div>
      <div className="container-fluid movies-bg-section" style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}>
        <div className="row">
          <div className="col-lg-12 p-5 text-white">
            <div>
              <div className="p-2">
                <img src={N} width={30} />
                <span className="text-monospace font-weight-bold ">
                  S E R I E S
                </span>
              </div>
              <div>
                <h1 className="p-2 movie-text font-weight-bold">
                  {movie ? movie.title : ""}
                </h1>
              </div>
              <div className="p-2  font-weight-bold">
                {movie ? movie.overview : ""}
              </div>
              <div className="p-2">
                <button className="btn btn-light mr-3">Play</button>
                <button className="btn btn-dark">My List</button>
              </div>
            </div>
          </div>
          <div className="col-lg-12 p-3">
            <div className="text-white font-weight-bold">popular on netflix</div>
          </div>
        </div>
        </div>
        <div className='p-2 row  posters'>
       <div className='col-lg-12'>{ urlid && <YouTube videoId={urlid.key} opts={opts}  />}</div>
          <div className=' dflex flex-wrap text-center justify-content-between'>
            {movies.map((obj) =>
              <img onClick={()=> handleMovies(obj.id)} className='moviesimage m-2 ' alt='poster' width={400} src={`${imageUrl + obj.backdrop_path}`} />
            )}
          </div>
        </div>
      
    </>
    </div>
  )
}

export default Main