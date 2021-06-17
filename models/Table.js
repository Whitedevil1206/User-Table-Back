import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tableSchema = Schema({
  tdata: [
    {
      idx: String,
      name: String,
      phone: String,
      email: String,
      hobbies: String,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  _id: Schema.Types.ObjectId,
});

const Table = mongoose.model('Table', tableSchema);
export default Table;
