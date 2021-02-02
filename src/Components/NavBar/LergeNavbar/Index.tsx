import Image from "next/image";
import Link from "next/link";
import { NavBarCategories } from "./Categories/NavBarCategories";
import { SearchField } from "./SearchField/SearchField";
import { NavCategories } from "./_Helper";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Badge, Button, IconButton } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useCtx } from "../../../store";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
   // store
   const {
      userState: { isLoggedIn },
   } = useCtx();

   // auth session
   const [session, loading] = useSession();

   // router
   const router = useRouter();
   return (
      <>
         <nav className="navbar">
            <header className="header">
               <a href="#" className="logo">
                  <Image
                     src="/Logo_BD.png"
                     alt="logo"
                     height={50}
                     width={100}
                     layout="intrinsic"
                  />
               </a>
               🚀
               <nav>
                  <ul className="menu-items">
                     <li>
                        <Link href="/">
                           <a className="menu-item">Home</a>
                        </Link>
                     </li>

                     <li>
                        <a href="#" className="menu-item">
                           Categories <ExpandMoreIcon fontSize="small" />
                        </a>

                        <div className="mega-menu">
                           <div className="content">
                              {NavCategories.map(
                                 ({ src, alt, title, li, to }, i) => (
                                    <div className="col" key={i}>
                                       <NavBarCategories
                                          src={src}
                                          alt={alt}
                                          title={title}
                                          li={li}
                                          to={to}
                                       />
                                    </div>
                                 )
                              )}
                           </div>
                        </div>
                     </li>

                     <li>
                        <a href="#" className="menu-item">
                           Contact Us
                        </a>
                     </li>
                     <li>
                        <a href="#" className="menu-item">
                           Faqs
                        </a>
                     </li>
                  </ul>
               </nav>
               <section className="menu-searchSection dropdown">
                  <SearchField />
               </section>
               <section className="formAction">
                  <IconButton color="inherit" className="cart">
                     <Badge badgeContent={1} color="primary">
                        <ShoppingCartOutlinedIcon />
                     </Badge>
                  </IconButton>
                  {session ? (
                     <>
                        <Button
                           variant="contained"
                           className="muiBtn authBtn"
                           onClick={async () => await signOut()}
                           startIcon={<VpnKeyIcon fontSize="small" />}
                        >
                           Logout
                        </Button>
                        <span>{session.user.name}</span>
                     </>
                  ) : (
                     <Button
                        variant="contained"
                        className="muiBtn authBtn"
                        onClick={() => router.push("/auth")}
                        startIcon={<VpnKeyIcon fontSize="small" />}
                     >
                        Login
                     </Button>
                  )}
               </section>
            </header>
         </nav>
      </>
   );
};

export default Index;
