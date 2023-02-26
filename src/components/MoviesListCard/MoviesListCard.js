import React from 'react';
import {NavLink} from "react-router-dom";

import {Rating} from "@mui/material";
import css from './MovieListCard.module.css'

const MoviesListCard = ({film}) => {
    const {title, poster_path, vote_average} = film

    return (

        <div className={css.movies}>
            <NavLink to={`/movie_info`} state={{...film}}><img className={css.images} src={'https://image.tmdb.org/t/p/w300' + poster_path} alt ='movie'/></NavLink>
            <div className={css.titleDiv}> {title}</div>
            <Rating name="half-rating-read"
                    defaultValue={vote_average}
                    max={10}
                    size={'medium'}
                    precision={0.5} readOnly
            />{'(' + vote_average + ')'}
        </div>

    );
};

export {MoviesListCard};