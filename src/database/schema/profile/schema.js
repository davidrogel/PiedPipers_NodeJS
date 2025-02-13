import { Schema } from 'mongoose';
import { Profile } from '../../../dto';
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
    location: { type: PositionSchema },
    friendlyLocation: { type: String },
    contactMe: { type: ContactMethodSchema },
    instruments: {
      type: [String],
      enum: Profile.INSTRUMENTS
    },
    photo: { type: String },
    videos: [{ type: String }],
    description: { type: String },
    followers: [{ type: String }]
  },
  { collection: 'Profile' }
);
