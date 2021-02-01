import {
   GET_SEARCHBAR_DATA,
   SEARCHBAR_LOADING_END,
   SEARCHBAR_LOADING_START,
} from "../types";

type Action = {
   type: string;
   payload: any;
};

export const initialSearchbarState = {
   isLoading: false,
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
      default:
         return state;
   }
};
