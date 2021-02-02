import jwt from "jsonwebtoken";

interface tokenInterface {
   _id: string;
}

const secret: any = process.env.JWT_SECRET;

export const createToken = (id: tokenInterface) => {
   return jwt.sign({ id }, secret, {
      expiresIn: 3 * 24 * 60 * 60,
   });
};
