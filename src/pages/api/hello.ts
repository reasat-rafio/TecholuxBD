import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
   switch (req.method) {
      case "GET":
         getXYZ(req, res);
         break;
      default:
         break;
   }
};

const getXYZ = async (req: NextApiRequest, res: NextApiResponse) => {
   try {
   } catch (error) {}
};
