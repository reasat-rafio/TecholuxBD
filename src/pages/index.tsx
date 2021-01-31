import Head from "next/head";
import { NavLayout } from "../Components/Layout/NavLayout/NavLayout";
import Image from "next/image";
const MyApp = () => {
   return (
      <>
         <Head>
            <title>TeachnoluxBD: Online Shop</title>
            <meta
               name="viewport"
               content="minimum-scale=1, initial-scale=1, width=device-width"
            />
         </Head>
         <NavLayout>
            <div>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
               tempore, itaque impedit vitae quam voluptate nihil adipisci ex
               deleniti? Atque possimus eos nemo sunt provident consequatur
               eaque pariatur consectetur voluptatibus necessitatibus aliquid
               dolorem illo reprehenderit reiciendis, magni sit!!
            </div>
         </NavLayout>
      </>
   );
};

export default MyApp;
