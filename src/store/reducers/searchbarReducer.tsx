import {
   GET_SEARCHBAR_DATA,
   GLOBAL_LOADING_START,
   SEARCHBAR_LOADING_END,
   SEARCHBAR_LOADING_START,
   GLOBAL_LOADING_END,
} from "../types";

type Action = {
   type: string;
   payload: any;
};

export const initialSearchbarState = {
   isLoading: false,
   globalLoading: false,
   filterProducts: [],
};
export const searchReducer = (state: any, action: Action) => {
   switch (action.type) {
      case SEARCHBAR_LOADING_START:
         return { ...state, isLoading: true };
      case SEARCHBAR_LOADING_END:
         return { ...state, isLoading: false };
      case GET_SEARCHBAR_DATA:
         return { ...state, filterProducts: [...action.payload] };
      case GLOBAL_LOADING_START:
         return { ...state, globalLoading: true };
      case GLOBAL_LOADING_END:
         return { ...state, globalLoading: false };
      default:
         return state;
   }
};
