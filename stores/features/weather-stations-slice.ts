import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IWeatherStationsState {
  value: IWeatherStation[]
}

const initialState: IWeatherStationsState = {
  value: [],
}

export const weatherStationsSlice = createSlice({
  name: "weatherStations",
  initialState,
  reducers: {
    setWeatherStations: (state, action: PayloadAction<IWeatherStation[]>) => {
      state.value = action.payload
    },
  },
})

export const { setWeatherStations } = weatherStationsSlice.actions
export default weatherStationsSlice.reducer
