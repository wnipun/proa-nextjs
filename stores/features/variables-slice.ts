import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface variablesState {
  value: IVariable[]
}

const initialState: variablesState = {
  value: [],
}

export const variablesSlice = createSlice({
  name: "variables",
  initialState,
  reducers: {
    setVariables: (state, action: PayloadAction<IVariable[]>) => {
      state.value = action.payload
    },
  },
})

export const { setVariables } = variablesSlice.actions
export default variablesSlice.reducer
