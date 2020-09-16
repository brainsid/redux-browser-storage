import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers";

const initialState = {};

export const store = createStore(rootReducer, initialState);

// Cached version of store
export const persistor = persistStore(store);
