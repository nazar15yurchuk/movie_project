import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {Pagination} from "@mui/material";
import css from './MovieList.module.css';

const MoviesList = () => {
    const {films, total_pages, currentPage, genres, showGenres, loading} = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()
    const {movieId} = useParams()

    useEffect(() => {
        if (movieId) {
            dispatch(movieActions.getMoviesByGenreId({movieId, currentPage}))
        } else {
            dispatch(movieActions.getAll({currentPage}))
        }
    }, [currentPage, dispatch, movieId])

    const changePage = (page) => {
        dispatch(movieActions.setCurrentPage(page))
    }

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            <div className={css.pagination_top}>
                <Pagination
                    page={currentPage}
                    count={total_pages > 500 ? 500 : total_pages}
                    onChange={(_, page) => changePage(page)}
                    shape={'rounded'}
                    color="primary"
                />
            </div>
            {showGenres ?
                <div className={css.genresByOne}>
                    {genres.map(genre =>
                        <NavLink to={`/movies/${genre.id}`}>
                            <div className={css.nameGenre} key={genre.id}>
                                {genre.name}
                            </div>
                        </NavLink>
                    )}
                </div>
                : <div className={css.closeGenres}></div>
            }
            {films.length < 1 ? <h1>These movies didnt find</h1> :
                <div className={css.moviesByOne}>
                    {films.map(film => <MoviesListCard key={film.id} film={film}/>)}
                </div>
            }

                <div className={css.pagination_bottom}>
                <Pagination
                page={currentPage}
                count={total_pages > 500 ? 500 : total_pages}
                onChange={(_, page) => changePage(page)}
                shape={'rounded'}
                color="primary"
                />
                </div>

        </div>
    );
};

export {MoviesList};