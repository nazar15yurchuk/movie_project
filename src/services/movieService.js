import {axiosService} from "./axiosService";
import {urls} from "../configs";

const movieService = {
    getAll: (page=1) => axiosService.get(urls.getAll, {params: {page}}),
    getById: (id) => axiosService.get(`${urls.getById}/${id}`),
    getInputSearch: (inputSearch) => axiosService.get(urls.getInputSearch, {params:{'query':inputSearch}}),
    getAllGenres: () => axiosService.get(urls.getAllGenres),
    getGenresById: (id, page=1) => axiosService.get(urls.getAll, {params: {'with_genres': id, page}})
}

export {
    movieService
}