import { Document, Schema, models, model, Model } from "mongoose";
import bcrypt from "bcrypt";

export interface SavedUserDocument extends Document {
   email: string;
   password: string;
   name?: string;
   loginUser?: () => string;
}

interface IUserModel extends Model<SavedUserDocument> {
   loginUser(password: string, email: string): string;
}

const userSchema = new Schema(
   {
      username: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
         trim: true,
         lowercase: true,
      },
      password: {
         type: String,
         required: true,
      },
      role: {
         type: String,
         default: "user",
      },
   },
   {
      timestamps: true,
   }
);

// This function will fire before user Regiter
userSchema.pre<any>("save", async function (this, next) {
   try {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
      next();
   } catch (error) {
      console.log(error);
   }
});

let DataSet =
   models.EmailUser || model<IUserModel | any>("EmailUser", userSchema);

export default DataSet;
