import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w500/";
const color_average = (vote) => {
    if (vote >= 8) 
        return 'green'
    else if (vote >= 5)
        return 'orange'
    else
        return 'red'
}

const Movie = ({title,poster_path,overview,vote_average,id}) => 
    <div className="movie">
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3> 
            <span className={color_average(vote_average)}>{vote_average}</span>
        </div>
        <div className="movie-overview">
            <h2>Description:</h2>
            <p>{ overview}</p>
        </div>
    </div>
    
    


export default Movie;