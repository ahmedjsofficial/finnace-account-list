import { createSlice } from '@reduxjs/toolkit';

const FormSlice = createSlice({
    name: 'form',
    initialState: {
        formdata: []
    },
    reducers: {
        setFormData: (state, action) => {
            state.formdata.push(action.payload);
        }
    }
})

export const { setFormData } = FormSlice.actions;
export const selectFormData = (state) => state.form.formdata;
export default FormSlice.reducer;