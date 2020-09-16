import { combineReducers } from "redux";
import filtersReducer from "./filtersReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses browser window local storage

// redux-persist configuration object
const persistConfig = {
  key: "root", // Path to store in local storage (/root)
  storage, // type of storage
  whitelist: ["filter"], // array of reducers to be persisted
};

const rootReducer = combineReducers({
  filter: filtersReducer,
});

export default persistReducer(persistConfig, rootReducer); // wrap-up our reducer with persist capabilities
