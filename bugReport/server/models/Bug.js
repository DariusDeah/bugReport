import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const BugSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: Number, required: true, default: 1 },
  closed: { type: Boolean, default: false },
  closedDate: { type: Date, default: Date.now() },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
// whenever this is created in the database a fake/virtual property is beign made
// the property being made is creator
BugSchema.virtual('creator', {
  // the local field aka whats in our file is the creator id this is where the info is going
  localField: 'creatorId',
  // forign feild is saying search the accoint that id mathes our local field creator id
  foreignField: '_id',

  justOne: true,
  // we are refrencing the account
  ref: 'Account'
})
