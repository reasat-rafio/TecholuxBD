import bcrypt from "bcrypt";
import User from "../Models/userModel";

export const LoginHelper = async (email: string, password: string) => {
   const user: any = await User.findOne({ email });
   if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
         return user;
      }
      throw Error("Incorrect Password");
   }
   throw Error("Incorrect email");
};
