import { Schema } from 'mongoose';
import PositionSchema from '../position';
import ContactMethodSchema from '../contact-method';

export default Schema(
  {
    cuid: {
      type: String,
      unique: true,
      required: true,
      dropDups: true,
      index: true
    },
    dateAdded: { type: 'Date', default: Date.now, required: true },
    name: { type: String, index: true },
    location: { type: PositionSchema, required: true, index: true },
    price: { type: Number, required: true, index: true },
    contact: { type: ContactMethodSchema, required: true },
    photos: { type: [String], default: [], required: true },
    description: { type: String, required: true }
  },
  { collection: 'Locals' }
);
