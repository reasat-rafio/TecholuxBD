import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import Image from "next/image";
import { FacebookIcon, GoogleIcon, GuthubIcon } from "../../utils/svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../utils/yupSchema";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";
import { FormStyles } from "../../utils/styles";
import * as yup from "yup";
interface RegistrationSectionProps {}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({}) => {
   const classes = FormStyles();
   const router = useRouter();

   // Setting up Yup as useFrom resolver
   const { handleSubmit, register, errors } = useForm({
      resolver: yupResolver(RegisterSchema),
   });
   const socialAuthenticationAction = async (platform: string) => {
      router.push("/");
      await signIn(platform);
   };
   const onSignUpSubmit = async (data) => {
      console.log(data);
   };
   console.log(errors);

   return (
      <form className="sign-up-form" onSubmit={handleSubmit(onSignUpSubmit)}>
         <Typography className="title" component="h1" variant="h5">
            Sign Up
         </Typography>
         <TextField
            className="textField"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Username"
            name="username"
            inputRef={register}
         />
         {errors.username && (
            <Typography variant="body2" color="secondary">
               {errors.username.message}
            </Typography>
         )}

         <TextField
            className="textField"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            inputRef={register}
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
            fullWidth
            label="Password"
            name="password"
            inputRef={register}
         />
         {errors.password && (
            <Typography variant="body2" color="secondary">
               {errors.password.message}
            </Typography>
         )}

         <button type="submit" className="btn">
            Sign up
         </button>
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
