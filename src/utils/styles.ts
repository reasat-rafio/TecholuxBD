import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const HomeStyles = makeStyles((theme: Theme) =>
   createStyles({
      cardWitdh: {
         width: "80vw",
         [theme.breakpoints.down("sm")]: {
            width: "100%",
         },
         margin: "auto",
      },
   })
);

const bgs = [
   "https://res.cloudinary.com/dapjxqk64/image/upload/v1612285913/technoluxbd/bg1_a690qz.png",
   "https://res.cloudinary.com/dapjxqk64/image/upload/v1612285918/technoluxbd/bg2_vctvp0.png",
];

export const FormStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         height: "100vh",
      },

      image: {
         backgroundImage: `url(${bgs[Math.round(Math.random())]})`,
         backgroundRepeat: "no-repeat",
         backgroundColor:
            theme.palette.type === "light"
               ? theme.palette.grey[50]
               : theme.palette.grey[900],
         backgroundSize: "cover",
         backgroundPosition: "center",
      },
      paper: {
         margin: theme.spacing(8, 4),
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
      },
      form: {
         width: "100%",
         marginTop: theme.spacing(1),
      },
      submit: {
         margin: theme.spacing(3, 0, 2),
      },
      formGrid: {
         backgroundColor: "#FAFAFA",
         boxShadow: "none",
         margin: "auto",
         [theme.breakpoints.down("xs")]: {
            width: "100%",
            height: "100%",
            color: "white",
         },
      },
      h2: {
         width: "100%",
         textAlign: "center",
         borderBottom: " 1px solid #778899",
         lineHeight: "0.1em",
         margin: "10px 0 20px",
         display: "inline-block",
      },
      span: {
         background: "#fff",
         padding: "0 10px",
         color: "#778899",
      },

      icon: {
         margin: theme.spacing(1, 0, 1),
         display: "flex",
         alignItems: "center",
      },
      iconBtn: {
         margin: theme.spacing(1, 1, 1),
      },
      socials: {
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
      },
   })
);
