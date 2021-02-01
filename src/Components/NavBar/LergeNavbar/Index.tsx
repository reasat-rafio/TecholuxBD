import Image from "next/image";
import Link from "next/link";
import { NavBarCategories } from "./Categories/NavBarCategories";
import { SearchField } from "./SearchField/SearchField";
import { DownArrow, NavCategories } from "./_Helper";
interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
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

               <nav>
                  <ul className="menu-items">
                     <li>
                        <Link href="/">
                           <a className="menu-item">Home</a>
                        </Link>
                     </li>
                     {/* <li className="dropdown">
               <Link href="#">
                  <a className="menu-item">Dropdown Menu</a>
               </Link>

               <ul className="dropdown-menu">
                  <li>
                     <Link href="#">
                        <a className="menu-item">Item 1</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="#">
                        <a className="menu-item">Item 2</a>
                     </Link>
                  </li>
                  <li className="dropdown dropdown-right">
                     <Link href="#">
                        <a className="menu-item">
                           Item 3<i className="fas fa-angle-right"></i>
                        </a>
                     </Link>

                     <ul className="menu-right">
                        <li>
                           <a href="#" className="menu-item">
                              Item 3.1
                           </a>
                        </li>
                        <li>
                           <a href="#" className="menu-item">
                              Item 3.2
                           </a>
                        </li>
                        <li>
                           <a href="#" className="menu-item">
                              Item 3.3
                           </a>
                        </li>
                        <li>
                           <a href="#" className="menu-item">
                              Item 3.4
                           </a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="#" className="menu-item">
                        Item 4
                     </a>
                  </li>
               </ul>
            </li> */}
                     <li>
                        <a href="#" className="menu-item">
                           Categories <DownArrow />
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
                                       ></NavBarCategories>
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
                  </ul>
               </nav>
               <section className="menu-searchSection dropdown">
                  <SearchField />
               </section>
            </header>
         </nav>{" "}
      </>
   );
};

export default Index;
