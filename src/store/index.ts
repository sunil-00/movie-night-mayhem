import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { api } from "@/services";
import { MovieNightReducer, PopularMoviesReducer } from './slices'

const reducers = combineReducers({
    movieNight: MovieNightReducer,
    movies: PopularMoviesReducer,
    [api.reducerPath]: api.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['movieNight']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                ignoredPaths: ['keypair.keypair'],
            },
            immutableCheck: false,
        }).concat(api.middleware);

        return middlewares;
    },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof reducers>;  