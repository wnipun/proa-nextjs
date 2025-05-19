import { configureStore } from "@reduxjs/toolkit"
import variablesReducer from "./features/variables-slice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      variables: variablesReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore["getState"]>

export type AppDispatch = AppStore["dispatch"]
