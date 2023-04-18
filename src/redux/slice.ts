import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface State {
    fieldSize: number;
    modes: { name: string, field: number, id: string }[];
}

const initialState: State = {
    fieldSize: 0,
    modes: [],
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setSize: (state, action: PayloadAction<number>) => {
            state.fieldSize = action.payload;
        },
        setModes:(state,action:PayloadAction<{ name: string, field: number, id: string }[]>)=>{
            state.modes=action.payload;
        }
    }
});

export const {setSize, setModes} = gameSlice.actions;

export default gameSlice.reducer;
