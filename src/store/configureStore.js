import { createStore, combineReducers } from 'redux'
import moviesreducer from '../reducers/moviesreducer'
const configureStore = () => {

    const store = createStore(combineReducers({

        movies : moviesreducer

    }))
    
    return store

}
export default configureStore