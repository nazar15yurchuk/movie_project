import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import ThemeSwitch from "react-theme-switch-css";
import {movieActions} from "../../redux";
import {Genres} from "../Genres/Genres";


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isNull = (request) => {
        if (request) {
            dispatch(movieActions.getInputSearch({request}))
        } else {
            navigate('/')
        }
    }

    return (
        <div>
            <div className={css.Header}>
                <Link to={'/movies'}><p className={css.logo}>FilmsPub</p></Link>
                <Genres/>
                <input className={css.searchInput} type={'text'} placeholder={'Search...'} onChange={(e) => isNull(e.target.value)}/>
                <div className={css.theme}>
                <ThemeSwitch/>
                </div>
                <div>
                    <UserInfo/>
                </div>
            </div>
        </div>
    );
};

export {Header};