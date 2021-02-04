import {
   SEARCHBAR_LOADING_START,
   SEARCHBAR_LOADING_END,
   GET_SEARCHBAR_DATA,
   GLOBAL_LOADING_START,
   GLOBAL_LOADING_END,
} from "../types";
import axios from "axios";
const ITEMS_PER_PAGE = 30;
const api = axios.create({
   baseURL: "https://api.punkapi.com/v2",
});

export const srcLoadingStartAction = () => {
   return {
      type: SEARCHBAR_LOADING_START,
   };
};

export const srcLoadingEndAction = () => {
   return {
      type: SEARCHBAR_LOADING_END,
   };
};

export const searchDataAction = (data) => {
   return {
      type: GET_SEARCHBAR_DATA,
      payload: data,
   };
};

export const globalLoadingStartAction = () => {
   return {
      type: GLOBAL_LOADING_START,
   };
};

export const globalLoadingEndAction = () => {
   return {
      type: GLOBAL_LOADING_END,
   };
};
