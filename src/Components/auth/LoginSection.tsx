import { Button, TextField, Typography } from "@material-ui/core";
import Image from "next/image";
import { FacebookIcon, GoogleIcon, GuthubIcon } from "../../utils/svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../utils/yupSchema";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";
import { FormStyles } from "../../utils/styles";
import { useCtx } from "../../store";
import { setSnackbar } from "../../store/actions/snackbarAction";
import {
   globalLoadingEndAction,
   globalLoadingStartAction,
} from "../../store/actions/searchbarAction";
import axios from "axios";
import { loginUserAction } from "../../store/actions/userAction";

interface LoginSectionProps {}
interface onSubmitInterface {
   email: string;
   password: string;
}

export const LoginSection: React.FC<LoginSectionProps> = ({}) => {
   const classes = FormStyles();
   const router = useRouter();

   // store
   const { snackbarDispatch, searchDispatch, userDispatch } = useCtx();

   // Setting up Yup as useFrom resolver
   const { handleSubmit, register, errors } = useForm({
      resolver: yupResolver(LoginSchema),
   });

   //Social auth action
   const socialAuthenticationAction = async (platform: string) => {
      router.push("/");
      await signIn(platform);
   };

   // Form on submit
   const onSignInSubmit = async ({ email, password }: onSubmitInterface) => {
      try {
         searchDispatch(globalLoadingStartAction());
         const { data } = await axios.post(`/api/auth/login`, {
            email,
            password,
         });
         searchDispatch(globalLoadingEndAction());
         userDispatch(loginUserAction(data.data));
         console.log(data.data);

         router.push("/");
         snackbarDispatch(
            setSnackbar(true, "success", "Logged in successfully!")
         );
      } catch (error) {
         snackbarDispatch(
            setSnackbar(true, "error", `${error.response.data.error}`)
         );
      }
   };

   return (
      <form className="sign-in-form" onSubmit={handleSubmit(onSignInSubmit)}>
         <h2 className="title">Sign in</h2>
         <TextField
            className="textField"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            inputRef={register}
            autoFocus
         />
         {errors.email && (
            <Typography variant="body2" color="secondary">
               {errors.email.message}
            </Typography>
         )}
         <TextField
            className="textField"
            variant="outlined"
            margin="normal"
            inputRef={register}
            fullWidth
            label="Password"
            name="password"
         />
         {errors.password && (
            <Typography variant="body2" color="secondary">
               {errors.password.message}
            </Typography>
         )}
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
               onClick={() => socialAuthenticationAction("facebook")}
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
   );
};
