export const add_Movie = (movie) => {

    return {

        type : 'ADD_MOVIE',
        payload : movie

    }

}
export const remove_Movie = (id) => {

    return {

        type : 'REMOVE_MOVIE',
        payload : id

    }

}