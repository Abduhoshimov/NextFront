import { loadState } from "@/lib/storage";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = loadState('product') || {
  products: [],
  count: 0,
  totalPrice: 0
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    totalPrice: (state) => {
      const count = state.products.reduce((a: any, b: any) => {
        return a + b.userPrice;
      }, 0)

      return { ...state, totalPrice: count }
    },
    add: (state, action) => {
      const idf = state.products.find((item: any) => item.id === action.payload.id);
      if (!idf) {
        return {
          ...state, products: [...state.products, {
            ...action.payload, userCount: action.payload.userCount? action.payload.userCount : 1, userPrice: parseInt(action.payload.price),
          },
          ],
        };
      }
      return state;
    },
    remove: (state, action) => {
      console.log(action.payload.id);
      console.log(action.payload.id);

      return { ...state, products: state.products.filter((item: any) => item.id !== action.payload.id) }
    },
    toggleAnmount: (state, action) => {
      if (action.payload.type === "add") {
        const newProducts = state.products.map((item: any) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * item.price
            }
          }
          return item;
        });
        return { ...state, products: newProducts }
      }
      if (action.payload.type === "remove") {
        const newProducts = state.products.map((item: any) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.price
            }
          }
          return item;
        });
        return { ...state, products: newProducts }
      }
    },
    itemCount: (state) => {
      return { ...state, count: state.products.length }
    }
  },
});

export const productReducer = product.reducer;

export const { add, remove, toggleAnmount, totalPrice, itemCount } = product.actions;
