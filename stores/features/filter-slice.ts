import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IFilterState {
  value: string
}

const initialState: IFilterState = {
  value: "",
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer
