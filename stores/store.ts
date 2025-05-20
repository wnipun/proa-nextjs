import { configureStore } from "@reduxjs/toolkit"
import variablesReducer from "./features/variables-slice"
import filterReducer from "./features/filter-slice"
import weatherStationsReducer from "./features/weather-stations-slice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      variables: variablesReducer,
      filter: filterReducer,
      weatherStations: weatherStationsReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore["getState"]>

export type AppDispatch = AppStore["dispatch"]
