import { useState } from "react";
import Link from "next/link";
import SearchBar from "material-ui-search-bar";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";
import { useCtx } from "../../../../store";
import {
   srcLoadingEndAction,
   srcLoadingStartAction,
   searchDataAction,
} from "../../../../store/actions/searchbarAction";

interface SearchFieldProps {}

export const SearchField: React.FC<SearchFieldProps> = ({}) => {
   // This funtion will deside wether the dropdown is getting shown or not
   const [searchDropdown, setSearchDropdown] = useState<boolean>(false);
   // Global state
   const {
      searchState: { isLoading, filterProducts },
      searchDispatch,
   } = useCtx();

   const searchAction = async (filter) => {
      try {
         searchDispatch(srcLoadingStartAction());
         console.log(filter);

         if (filter.length != 0) {
            setSearchDropdown(true);
         } else {
            setSearchDropdown(false);
         }

         const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users",
            {
               params: {
                  username: filter || undefined,
                  // _limit: 5,
               },
            }
         );

         searchDispatch(searchDataAction(data));
         searchDispatch(srcLoadingEndAction());
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <div>
            <SearchBar
               onChange={(e) => searchAction(e)}
               placeholder="Search the entire store here ..."
               cancelOnEscape={true}
               onCancelSearch={() => setSearchDropdown(false)}
            />
         </div>

         {/* {isLoading && <LinearProgress />} */}

         {searchDropdown && (
            <ul className="dropdown-menu">
               {filterProducts.map((p, i) => (
                  <li key={i}>
                     <Link href="#">
                        <a className="menu-item">{p.username}</a>
                     </Link>
                  </li>
               ))}
               <li>
                  <Link href="#">
                     <a className="menu-item">Item 1</a>
                  </Link>
               </li>
            </ul>
         )}
      </>
   );
};
