import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { FormStyles } from "../../utils/styles";
import { GoogleIcon, FacebookIcon, GuthubIcon } from "../../utils/svg";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SignInSide() {
   const classes = FormStyles();
   const [state, setState] = useState<boolean>(false);
   const router = useRouter();

   const socialAuthenticationAction = async (platform: string) => {
      router.push("/");
      await signIn(platform);
   };

   return (
      <>
         <Head>
            <title>TeachnoluxBD | Authentication</title>
         </Head>

         <div className={`container ${state && "sign-up-mode"}`}>
            <div className="forms-container">
               <div className="signin-signup">
                  <form action="#" className="sign-in-form">
                     <h2 className="title">Sign in</h2>
                     <TextField
                        className="textField"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        autoFocus
                     />
                     <TextField
                        className="textField"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        name="password"
                     />
                     <input type="submit" value="Login" className="btn solid" />
                     <div>
                        <Typography variant="caption" className={classes.h2}>
                           <span className={classes.span}>
                              Or Sign in with social platforms
                           </span>
                        </Typography>
                     </div>
                     <div className={classes.socials}>
                        <Button
                           variant="outlined"
                           className={classes.iconBtn}
                           onClick={() => socialAuthenticationAction("google")}
                        >
                           <span className={classes.icon}>
                              <Image
                                 src={GoogleIcon}
                                 height="40"
                                 width="40"
                                 layout="intrinsic"
                              />
                           </span>
                        </Button>

                        <Button
                           variant="outlined"
                           className={classes.iconBtn}
                           onClick={() =>
                              socialAuthenticationAction("facebook")
                           }
                        >
                           <span className={classes.icon}>
                              <Image
                                 src={FacebookIcon}
                                 height="40"
                                 width="40"
                                 layout="intrinsic"
                              />
                           </span>
                        </Button>

                        <Button
                           variant="outlined"
                           className={classes.iconBtn}
                           onClick={() => socialAuthenticationAction("github")}
                        >
                           <span className={classes.icon}>
                              <Image
                                 src={GuthubIcon}
                                 height="40"
                                 width="40"
                                 layout="intrinsic"
                              />
                           </span>
                        </Button>
                     </div>
                  </form>
                  <form action="#" className="sign-up-form">
                     <Typography className="title" component="h1" variant="h5">
                        Sign Up
                     </Typography>
                     <TextField
                        className="textField"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        name="username"
                     />
                     <TextField
                        className="textField"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                     />
                     <TextField
                        className="textField"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        name="password"
                     />
                     <input type="submit" className="btn" value="Sign up" />
                     <div>
                        <Typography variant="caption" className={classes.h2}>
                           <span className={classes.span}>
                              or sign up with social platforms
                           </span>
                        </Typography>
                     </div>
                     <div className={classes.socials}>
                        <Button
                           variant="outlined"
                           className={classes.iconBtn}
                           onClick={() => socialAuthenticationAction("google")}
                        >
                           <span className={classes.icon}>
                              <Image
                                 src={GoogleIcon}
                                 height="40"
                                 width="40"
                                 layout="intrinsic"
                              />
                           </span>
                        </Button>

                        <Button
                           variant="outlined"
                           className={classes.iconBtn}
                           onClick={() =>
                              socialAuthenticationAction("facebook")
                           }
                        >
                           <span className={classes.icon}>
                              <Image
                                 src={FacebookIcon}
                                 height="40"
                                 width="40"
                                 layout="intrinsic"
                              />
                           </span>
                        </Button>

                        <Button
                           variant="outlined"
                           className={classes.iconBtn}
                           onClick={() => socialAuthenticationAction("github")}
                        >
                           <span className={classes.icon}>
                              <Image
                                 src={GuthubIcon}
                                 height="40"
                                 width="40"
                                 layout="intrinsic"
                              />
                           </span>
                        </Button>
                     </div>
                  </form>
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
