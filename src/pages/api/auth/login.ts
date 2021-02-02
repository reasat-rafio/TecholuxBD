import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/connectDB";
import User from "../../../Models/userModel";
import { createToken } from "../../../utils/createToken";
import { LoginHelper } from "../../../utils/_helperFn";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
   switch (req.method) {
      case "POST":
         await loginUser(req, res);
         break;

      default:
         break;
   }
};

const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      // Getting the data from the request body
      const { email, password } = req.body;

      // Finding the user from database
      const user = await LoginHelper(email, password);

      //   Creating a jwt token
      const token = createToken(user._id);

      res.status(200).json({
         success: true,
         token,
         data: user,
      });
   } catch (error) {
      return res.status(403).json({ success: false, error: error.message });
   }
};
