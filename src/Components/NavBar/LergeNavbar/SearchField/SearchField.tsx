import { useEffect, useState } from "react";
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
   // Search Filter Items
   const [searchFilter, setSearchFilter] = useState<any>();

   // This funtion will deside wether the dropdown is getting shown or not
   const [searchDropdown, setSearchDropdown] = useState<boolean>(false);

   // Global state
   const {
      searchState: { isLoading, filterProducts },
      searchDispatch,
   } = useCtx();

   // Fetching the data for search
   useEffect(() => {
      const fetchData = async () => {
         try {
            searchDispatch(srcLoadingStartAction());
            // const { data } = await axios.get(
            //    "https://jsonplaceholder.typicode.com/users",
            //    {
            //       params: {
            //          username: filter || undefined,
            //       },
            //    }
            // );
            const { data } = await axios.get(
               "https://jsonplaceholder.typicode.com/users"
            );

            searchDispatch(searchDataAction(data));
            searchDispatch(srcLoadingEndAction());
         } catch (error) {
            console.log(error);
         }
      };

      fetchData();
   }, []);

   const searchAction = async (filter) => {
      try {
         if (filter.length != 0) {
            setSearchDropdown(true);
         } else {
            setSearchDropdown(false);
         }
         setSearchFilter(filter);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <div>
            <SearchBar
               className="searchBar"
               onChange={(e) => searchAction(e)}
               placeholder="Search the entire store here ..."
               cancelOnEscape={true}
               onCancelSearch={() => setSearchDropdown(false)}
            />
         </div>

         {/* {isLoading && <LinearProgress />} */}

         {searchDropdown && (
            <ul className="dropdown-menu">
               {filterProducts
                  .filter((val) => {
                     if (
                        val.username
                           .toLowerCase()
                           .includes(searchFilter.toLowerCase())
                     ) {
                        return val;
                     }
                  })
                  .map((p, i) => (
                     <li key={i}>
                        <Link href="#">
                           <a className="menu-item">{p.username}</a>
                        </Link>
                     </li>
                  ))}
            </ul>
         )}
      </>
   );
};
