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
