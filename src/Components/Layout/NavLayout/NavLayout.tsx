import { Grid } from "@material-ui/core";
import LgNav from "../../NavBar/LergeNavbar/Index";
import { SidebarNav } from "../../SidebarNav/SidebarNav";

interface NavLayoutProps {
   children: React.ReactNode;
}

export const NavLayout: React.FC<NavLayoutProps> = ({ children }) => {
   return (
      <>
         <LgNav />
         <Grid container>
            <Grid item md={2}>
               <SidebarNav />
            </Grid>
            <Grid item md={10}>
               {children}
            </Grid>
         </Grid>
      </>
   );
};
