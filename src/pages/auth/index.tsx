import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { RegistrationSection } from "../../Components/auth/RegistrationSection";
import { LoginSection } from "../../Components/auth/LoginSection";

export default function SignInSide() {
   const [state, setState] = useState<boolean>(false);
   const router = useRouter();

   return (
      <>
         <Head>
            <title>TeachnoluxBD | Authentication</title>
         </Head>

         <div className={`container ${state && "sign-up-mode"}`}>
            <div className="forms-container">
               <div className="signin-signup">
                  <LoginSection />
                  <RegistrationSection />
               </div>
            </div>

            <div className="panels-container">
               <div className="panel left-panel">
                  <div className="content">
                     <h3>New here ?</h3>
                     <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Debitis, ex ratione. Aliquid!
                     </p>
                     <button
                        className="btn transparent"
                        id="sign-up-btn"
                        onClick={() => setState(true)}
                     >
                        Sign up
                     </button>
                  </div>
                  <img src="/log.svg" className="image" alt="" />
               </div>
               <div className="panel right-panel">
                  <div className="content">
                     <h3>One of us ?</h3>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum laboriosam ad deleniti.
                     </p>
                     <button
                        className="btn transparent"
                        id="sign-in-btn"
                        onClick={() => setState(false)}
                     >
                        Sign in
                     </button>
                  </div>
                  <img src="/register.svg" className="image" alt="" />
               </div>
            </div>
         </div>
      </>
   );
}
