import {} from "../types";

type Action = {
   type: string;
   payload: any;
};

export const initialUserState = {
   isLoggedIn: false,
   user: [],
};
export const userReducer = (state: any, action: Action) => {
   switch (action.type) {
      case "asd":
         return { ...state };

      default:
         return state;
   }
};
