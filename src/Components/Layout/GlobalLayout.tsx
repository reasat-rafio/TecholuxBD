import { useCtx } from "../../store";

import SnackBar from "../Snackbar/Snackbar";

interface LayoutProps {
   children: React.ReactNode;
}

export const GlobalLayout: React.FC<LayoutProps> = ({ children }) => {
   // const {
   //    state: { loading },
   // } = useCtx();
   return (
      <>
         {/* {loading && <Loading />} */}
         <SnackBar />
         {children}
      </>
   );
};
