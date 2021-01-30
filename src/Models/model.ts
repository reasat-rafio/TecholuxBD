import { Document, Schema, models, model, Model } from "mongoose";

export interface SavedUserDocument extends Document {
   //    email: string;
   //    password: string;
   //    name?: string;
   //    loginUser?: () => string;
}

// interface IUserModel extends Model<SavedUserDocument> {
//    loginUser(password: string, email: string): string;
// }

const TSchema = new Schema(
   {
      name: {
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
         default: "Doctor",
      },
      appointment: [
         { type: [Schema.Types.ObjectId], ref: "Appointment", required: true },
      ],
   },
   {
      timestamps: true,
   }
);

let DataSet = models.TSchema || model<IUserModel | any>("Schema", TSchema);

export default DataSet;
