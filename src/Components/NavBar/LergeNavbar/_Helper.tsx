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
            <title>Search Find</title>
            <desc>A line styled icon from Orion Icon Library.</desc>
            <path
               data-name="layer2"
               d="M42.098 36.855L58.12 52.879a3 3 0 1 1-4.242 4.242L37.855 41.098"
               fill="none"
               stroke="#202020"
               stroke-miterlimit="10"
               stroke-width="2"
               stroke-linejoin="round"
               stroke-linecap="round"
            ></path>
            <path
               data-name="layer1"
               d="M26 46a20 20 0 1 1 20-20 20.022 20.022 0 0 1-20 20z"
               fill="none"
               stroke="#202020"
               stroke-miterlimit="10"
               stroke-width="2"
               stroke-linejoin="round"
               stroke-linecap="round"
            ></path>
            <path
               data-name="layer1"
               d="M26 11a15 15 0 1 0 15 15 15.016 15.016 0 0 0-15-15z"
               fill="none"
               stroke="#202020"
               stroke-miterlimit="10"
               stroke-width="2"
               stroke-linejoin="round"
               stroke-linecap="round"
            ></path>
         </svg>
      </div>
   );
};
