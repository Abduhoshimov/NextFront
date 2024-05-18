import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { itemCount, productReducer } from "./reducer/cart";
import { add, remove, toggleAnmount, totalPrice } from "./reducer/cart";
import { saveState } from "@/lib/storage";
import { likeReducer } from "./reducer/like";
import { addLikeItem, removeLikeItem, likeItemCount } from "./reducer/like"
const storageMiddleware = createListenerMiddleware();

storageMiddleware.startListening({
  matcher: isAnyOf(add, remove, toggleAnmount),
  effect: (_, api) => {
    api.dispatch(totalPrice());
    api.dispatch(itemCount())
  }
})
storageMiddleware.startListening({
  matcher: isAnyOf(addLikeItem, removeLikeItem),
  effect: (_, api) => {
    // api.dispatch(addLikeItem());
    // api.dispatch(removeLikeItem());
    api.dispatch(likeItemCount())
  }
})

export const store = configureStore({
  reducer: {
    product: productReducer,
    like: likeReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().prepend(storageMiddleware.middleware)
});

store.subscribe(() => {
  saveState('product', store.getState().product),
    saveState('like', store.getState().like)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;