import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    films: [],
    errors: null,
    loading: null,
    total_pages: null,
    currentPage: 1,
    genres: [],
    showGenres: false,
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({currentPage}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(currentPage)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getInputSearch = createAsyncThunk(
    'movieSlice/getInputSearch',
    async ({request}, thunkAPI) => {
        try {
            const {data} = await movieService.getInputSearch(request)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieService.getAllGenres()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getMoviesByGenreId = createAsyncThunk(
    'movieSlice/getMoviesByGenreId',
    async ({movieId, currentPage}, thunkAPI) => {
        try {
            const {data} = await movieService.getGenresById(movieId, currentPage)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setShowGenres: (state, action) => {
            state.showGenres = false ? state.showGenres === true : state.showGenres === false
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, total_pages} = action.payload
                state.films = results
                state.total_pages = total_pages
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })

            .addCase(getInputSearch.fulfilled, (state, action) => {
                const {results} = action.payload
                state.films = results
                state.loading = false
            })
            .addCase(getInputSearch.pending, (state) => {
                state.loading = true
            })

            .addCase(getAllGenres.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genres = genres
                state.loading = false
            })
            .addCase(getAllGenres.pending, (state) => {
                state.loading = true
            })

            .addCase(getMoviesByGenreId.fulfilled, (state, action) => {
                const {results, total_pages} = action.payload
                state.films = results
                state.total_pages = total_pages
                state.loading = false
            })
            .addCase(getMoviesByGenreId.pending, (state) => {
                state.loading = true
            })

})

const {reducer: movieReducer, actions: {setCurrentPage, setShowGenres}} = movieSlice

const movieActions = {
    getAll, getInputSearch, setCurrentPage, getAllGenres, setShowGenres, getMoviesByGenreId
}

export {
    movieActions, movieReducer
}