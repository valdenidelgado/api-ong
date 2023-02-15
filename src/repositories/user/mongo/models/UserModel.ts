import { Schema, model, Document } from 'mongoose';
import { IUser } from '../../../../models/IUser';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model<IUser & Document>('User', userSchema);