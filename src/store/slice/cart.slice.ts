import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";
import { Cart } from '@/types/cart'
import { Product } from '@/types/product'
import { product } from '../../../sanity/product';


  // Define the initial state using that type
  const initialState: Cart = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  }

  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart : (state, action:PayloadAction<{product:Product, quantity:number}>) => {
          const newItem = action.payload.product
          const existingItem = state.items.find((item)=> {
            return item._id === newItem._id
          })
       
          state.totalQuantity += action.payload.quantity
          

          if(!existingItem){

            const itPrice = action.payload.quantity * Number(newItem.price)
            state.totalAmount += itPrice

            state.items.push({
              ...newItem,
              quantity: action.payload.quantity,
              totalPrice: itPrice
            });
          }else{
            existingItem.quantity += action.payload.quantity
            existingItem.totalPrice += action.payload.quantity * Number(existingItem.price)

            const itPrice = action.payload.quantity * Number(existingItem.price)
            state.totalAmount += itPrice
          }

        },
        clearCart: (state) => {
          // state = initialState
          state.items = []
          state.totalAmount = 0
          state.totalQuantity = 0
        },
        updateCartItemQuantity: (state, action:PayloadAction<{_id:string, quantity:number}>)=>{
          
          const existingItem = state.items.find((item)=> {
            return item._id === action.payload._id
          })

          if(existingItem){
            existingItem.quantity = action.payload.quantity
            existingItem.totalPrice = action.payload.quantity * Number(existingItem.price)

            const itPrice = action.payload.quantity * Number(existingItem.price)
            state.totalAmount += itPrice
          }


          let sum = 0;
          state.items.forEach(element => {
            sum += element.quantity;
          });
          state.totalQuantity = sum
        },
        deleteItemFromCart: (state, action:PayloadAction<{_id:string}>)=>{

          const existingItem = state.items.find((item)=> {
            return item._id === action.payload._id
          })
          
          if(existingItem){
            state.totalQuantity -= existingItem.quantity
            state.totalAmount -= existingItem.totalPrice
          }
          

          state.items = state.items.filter((e)=>{
            return e._id != action.payload._id
          })
        }
      }
  })

  export const CartActions = cartSlice.actions
// Other code such as selectors can use the imported `RootState` type
export default cartSlice.reducer