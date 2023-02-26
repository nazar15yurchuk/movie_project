import {NavLink, useLocation} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

import {Rating} from "@mui/material";
import css from './MovieInfo.module.css'


const MovieInfo = () => {
    const {genres} = useSelector(state => state.movieReducer)

    const {
        state: {
            title,
            vote_average,
            poster_path,
            overview,
            release_date,
            original_language,
            popularity,
            genre_ids,
            backdrop_path
        }
    } = useLocation()

    const genreById = (genreId) => {
        const name = genres.find((item) => item.id === genreId)
        return name?.name
    }

    return (
        <div>
            <div className={css.titleMovie}> {title}</div>
            <div className={css.individualMovies}>
                <div className={css.general}>
                        <div className={css.allGenres}>{genre_ids.map(genreId =>
                            <NavLink to={`/movies/${genreId}`}><div className={css.indGenres} key={genreId}>
                                {genreById(genreId)}
                            </div>
                            </NavLink>
                        )}
                        </div>

                    <img className={css.imageMovie} src={'https://image.tmdb.org/t/p/w300' + poster_path} alt='movie'/>
                </div>
                <div className={css.characteristicsMovies}>
                    <div className={css.descriptionMovie}> {overview}</div>
                    <div className={css.releaseData}>Release Date: {release_date}</div>
                    <div className={css.popularity}>Popularity: {popularity}</div>
                    <div className={css.originalLang}>Original language: {original_language}</div>
                    <div><img className={css.imageMovie} src={'https://image.tmdb.org/t/p/w300' + backdrop_path} alt='movie'/></div>
                    <Rating name="half-rating-read"
                            defaultValue={vote_average}
                            max={10}
                            size={'large'}
                            precision={0.5} readOnly
                    />{'(' + vote_average + ')'}


                </div>
            </div>
        </div>
    );
};

export {MovieInfo};