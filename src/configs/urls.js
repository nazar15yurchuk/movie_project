const baseURL = 'https://api.themoviedb.org/3'

const movie = '/discover/movie'
const inputSearch = '/search/movie'
const allGenres = '/genre/movie/list'

const urls = {
    getAll: `${movie}`,
    getById: '/movie',
    getInputSearch: `${inputSearch}`,
    getAllGenres: `${allGenres}`,
}

export {
    baseURL, urls
}
