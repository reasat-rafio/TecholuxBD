import LgNav from "../../NavBar/LergeNavbar/Index";

interface NavLayoutProps {
   children: React.ReactNode;
}

export const NavLayout: React.FC<NavLayoutProps> = ({ children }) => {
   return (
      <>
         <LgNav />
         {children}
      </>
   );
};
