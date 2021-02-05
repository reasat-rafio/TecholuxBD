import Link from "next/link";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FlashOnOutlinedIcon from "@material-ui/icons/FlashOnOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import MeetingRoomOutlinedIcon from "@material-ui/icons/MeetingRoomOutlined";
import { useRouter } from "next/router";

import { useCtx } from "../../store";

interface SidebarNavProps {}

export const SidebarNav: React.FC<SidebarNavProps> = ({}) => {
   const {
      userState: { isLoggedIn },
   } = useCtx();

   const router = useRouter();
   console.log(router);

   return (
      <section className="SidebarNav">
         <ul className="sidenav_ul">
            <li
               style={{
                  background: `${router.pathname == "/" && "#95adbe3b"}`,
               }}
            >
               <Link href="#">
                  <a>
                     <HomeOutlinedIcon className="icon" />
                     <span>Recommended for you</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="#">
                  <a>
                     <FlashOnOutlinedIcon className="icon" />{" "}
                     <span>Falash deals</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="#">
                  <a>
                     <WhatshotOutlinedIcon className="icon" />
                     <span>Special deals</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="#">
                  <a>
                     <AddCircleOutlineOutlinedIcon className="icon" />
                     <span>New arrivals</span>
                  </a>
               </Link>
            </li>
            {isLoggedIn ? (
               <li>
                  <Link href="#">
                     <a>
                        <MeetingRoomOutlinedIcon /> <span>Logout</span>
                     </a>
                  </Link>
               </li>
            ) : (
               <li>
                  <Link href="#">
                     <a>
                        <VpnKeyOutlinedIcon className="icon" />
                        <span>Login / Register</span>
                     </a>
                  </Link>
               </li>
            )}
         </ul>
      </section>
   );
};
