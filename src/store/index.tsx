import { useContext, createContext, useReducer, useEffect } from "react";
import {
   initialSnackbarState,
   snackbarReducer,
} from "./reducers/snackbarReducer";
import {
   initialSearchbarState,
   searchReducer,
} from "./reducers/searchbarReducer";

const Store = createContext<any>(null);

interface StoreProps {
   children: React.ReactNode;
}

type Action = {
   type: string;
   payload: any;
};

type ProfileReducer = (state: any, action: Action) => any;

export const GlobalState: React.FC<StoreProps> = ({ children }) => {
   // const [searchState, searchDispatch] = useReducer(
   //    searchReducer,
   //    initialSearchbarState,
   //    () => {
   //       if (typeof window !== "undefined") {
   //          const localData = localStorage.getItem("searchState");
   //          return localData ? JSON.parse(localData) : initialSearchbarState;
   //       }
   //       return initialSearchbarState;
   //    }
   // );
   // useEffect(() => {
   //    localStorage.setItem("searchState", JSON.stringify(searchState));
   // }, [searchState]);

   const [searchState, searchDispatch] = useReducer(
      searchReducer,
      initialSearchbarState
   );

   const [snackbarState, snackbarDispatch] = useReducer<ProfileReducer>(
      snackbarReducer,
      initialSnackbarState
   );

   return (
      <Store.Provider
         value={{
            snackbarState,
            snackbarDispatch,
            searchState,
            searchDispatch,
         }}
      >
         {children}
      </Store.Provider>
   );
};

export const useCtx = () => useContext(Store);
