import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReduser } from "./auth/slice";
import { contactsListReducer } from "./contacts/slice";
import { filterReduser } from "./filters/slice";

const persistConfig = {
  key: "auth-data",
  version: 1,
  whitelist: ["token"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReduser);

export const store = configureStore({
  reducer: {
    contacts: contactsListReducer,
    filter: filterReduser,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
