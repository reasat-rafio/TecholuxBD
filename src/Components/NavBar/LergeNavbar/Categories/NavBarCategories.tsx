import Link from "next/link";
import Image from "next/image";

interface NavBarCategoriesProps {
   src: string;
   alt: string;
   title: string;
   li: any[];
   to: any;
}

export const NavBarCategories: React.FC<NavBarCategoriesProps> = ({
   src,
   alt,
   title,
   li,
   to,
}) => {
   return (
      <section>
         <Link href={to}>
            <a className="img-wrapper">
               <span className="img">
                  <Image
                     src={src}
                     alt={alt}
                     width={2}
                     height={1}
                     layout="responsive"
                  />
               </span>
            </a>
         </Link>
         <h2>{title}</h2>
         <ul className="mega-links">
            {li.map((l, i) => (
               <li key={i}>
                  <Link href={l.to}>
                     <a>{l.placeholder}</a>
                  </Link>
               </li>
            ))}
         </ul>
      </section>
   );
};
