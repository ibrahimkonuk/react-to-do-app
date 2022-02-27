import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todos, isLoading } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const reducers = {
    todos,
    isLoading,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);