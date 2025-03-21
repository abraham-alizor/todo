/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// api reducers
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { taskReducer } from "./slices/taskSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const appReducer = combineReducers({
  tasksmaster: taskReducer,
});

const persistedAuthReducer = persistReducer(persistConfig, appReducer);
const rootReducer: Reducer = (state, action) => {
  if (action.type === "auths/reset") {
    storage.removeItem("persist:root");

    state = {};
  }
  return persistedAuthReducer(state, action);
};

export const Store = configureStore({
  reducer: rootReducer,
});

setupListeners(Store.dispatch);
export const persistor = persistStore(Store);

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
