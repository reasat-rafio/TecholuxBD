import { useContext, createContext, useReducer, useEffect } from "react";
import {
   initialSnackbarState,
   snackbarReducer,
} from "./reducers/snackbarReducer";
import {
   initialSearchbarState,
   searchReducer,
} from "./reducers/searchbarReducer";
import { initialUserState, userReducer } from "./reducers/userReducer";

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
   const [userState, userDispatch] = useReducer(
      userReducer,
      initialUserState,
      () => {
         if (typeof window !== "undefined") {
            const localData = localStorage.getItem("TxBDuserState");
            return localData ? JSON.parse(localData) : initialUserState;
         }
         return initialUserState;
      }
   );
   useEffect(() => {
      localStorage.setItem("TxBDuserState", JSON.stringify(userState));
   }, [userState]);

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
            userState,
            userDispatch,
         }}
      >
         {children}
      </Store.Provider>
   );
};

export const useCtx = () => useContext(Store);
