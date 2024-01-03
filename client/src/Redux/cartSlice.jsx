import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items : []
}


export const cartSlice = createSlice({
    initialState, 

    name : 'cart',

    reducers : {
        addToCart : (state , action) => {
            const {_id , name, price , image} = action.payload;

            const existingItem = state.items.find((item) => item?._id === _id);

            if(!existingItem){
                state.items.push({_id , name, price, image });
            }
        },

        removeFromCart : (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter((item) => item._id !== productId);
        }
    }
})

export const {addToCart , removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;