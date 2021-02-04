import { useCtx } from "../../store";

import SnackBar from "../Snackbar/Snackbar";
import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { loginUserAction, logOutAaction } from "../../store/actions/userAction";

interface LayoutProps {
   children: React.ReactNode;
}

export const GlobalLayout: React.FC<LayoutProps> = ({ children }) => {
   const { userState, userDispatch } = useCtx();
   const [session, loading] = useSession();

   // setting the user to the store
   useEffect(() => {
      if (session) {
         userDispatch(loginUserAction(session.user));
      } else {
         userDispatch(logOutAaction());
      }
   }, [session]);

   return (
      <>
         {/* {loading && <Loading />} */}
         <SnackBar />
         {children}
      </>
   );
};
