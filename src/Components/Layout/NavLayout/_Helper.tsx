const navItems1 = [
   { to: "#", placeholder: "Item" },
   { to: "#", placeholder: "Item" },
   { to: "#", placeholder: "Item" },
   { to: "#", placeholder: "Item" },
   { to: "#", placeholder: "Item" },
];

export const NavCategories = [
   {
      src: "/earphone.png",
      alt: "pic",
      title: "Feature1",
      li: navItems1,
      to: "#",
   },
   {
      src: "/earphone.png",
      alt: "pic",
      title: "Feature1",
      li: navItems1,
      to: "#",
   },
   {
      src: "/earphone.png",
      alt: "pic",
      title: "Feature1",
      li: navItems1,
      to: "#",
   },
   {
      src: "/earphone.png",
      alt: "pic",
      title: "Feature1",
      li: navItems1,
      to: "#",
   },
];

export const DownArrow = () => {
   return (
      <span style={{ width: "15px", color: "white", margin: "auto" }}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            aria-labelledby="title"
            aria-describedby="desc"
            role="img"
         >
            <title>Angle Down</title>
            <desc>A line styled icon from Orion Icon Library.</desc>
            <path
               data-name="layer1"
               fill="none"
               stroke="#202020"
               stroke-miterlimit="10"
               stroke-width="2"
               d="M20 26l11.994 14L44 26"
               strokeLinejoin="round"
               strokeLinecap="round"
            ></path>
         </svg>
      </span>
   );
};

export const SearchIcon = () => {
   return (
      <div className="search-icon">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            aria-labelledby="title"
            aria-describedby="desc"
            role="img"
         >
            <title>Search Product</title>
            <desc>A line styled icon from Orion Icon Library.</desc>
            <path
               data-name="layer2"
               fill="none"
               stroke="#000cff"
               stroke-miterlimit="10"
               stroke-width="3"
               d="M38 22H12M2 6h6l10 40h32l4.1-12"
               stroke-linejoin="round"
               stroke-linecap="round"
            ></path>
            <circle
               data-name="layer2"
               cx="20"
               cy="54"
               r="4"
               fill="none"
               stroke="#000cff"
               stroke-miterlimit="10"
               stroke-width="3"
               stroke-linejoin="round"
               stroke-linecap="round"
            ></circle>
            <circle
               data-name="layer2"
               cx="46"
               cy="54"
               r="4"
               fill="none"
               stroke="#000cff"
               stroke-miterlimit="10"
               stroke-width="3"
               stroke-linejoin="round"
               stroke-linecap="round"
            ></circle>
            <circle
               data-name="layer1"
               cx="46"
               cy="16"
               r="10"
               fill="none"
               stroke="#000cff"
               stroke-miterlimit="10"
               stroke-width="3"
               stroke-linejoin="round"
               stroke-linecap="round"
            ></circle>
            <path
               data-name="layer1"
               fill="none"
               stroke="#000cff"
               stroke-miterlimit="10"
               stroke-width="3"
               d="M53.2 23.2L62 32"
               stroke-linejoin="round"
               stroke-linecap="round"
            ></path>
         </svg>
      </div>
   );
};
