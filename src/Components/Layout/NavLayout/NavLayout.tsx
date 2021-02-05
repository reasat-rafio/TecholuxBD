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
         <Grid container style={{ padding: "10px" }}>
            <Grid item lg={2} md={3} style={{ position: "relative" }}>
               <SidebarNav />
            </Grid>
            <Grid item lg={10} md={9}>
               {children}
            </Grid>
         </Grid>
      </>
   );
};
