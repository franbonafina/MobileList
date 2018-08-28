import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import rootReducer from '../reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const baseUrl = axios.create({baseUrl: 'https://jsonplaceholder.typicode.com/', responseType:'json'});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(thunkMiddleware, axiosMiddleware(baseUrl)));
let persistor = persistStore(store);

export default {store, persistor};