import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import css from "../Genres/Genres.module.css";

const Genres = () => {
    const dispatch = useDispatch()
    const {clickButton} = useSelector(state => state.movieReducer)

    useEffect(() => {
        dispatch(movieActions.getAllGenres())
    }, [dispatch])


    return (
        <div className={css.genres}>
            <div>
                {clickButton ?
                    <p onClick={() => dispatch(movieActions.setShowGenres())}>Genres</p>
                    :
                    <p  onClick={() => dispatch(movieActions.setShowGenres())}>Genres</p>
                }
            </div>
        </div>
    );
};

export {Genres};