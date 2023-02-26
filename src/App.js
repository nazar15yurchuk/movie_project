import {Navigate, Route, Routes} from "react-router-dom";

import "./index.css"
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {MovieInfo} from "./components";
import {NotFoundPage} from "./pages";

const App = () => {
    return (

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/movies'}/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}>
                    <Route path={':movieId'} element={<MoviesPage/>}/>
                </Route>
                <Route path={'/movie_info'} element={<MovieInfo/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>


    );
};

export {App}