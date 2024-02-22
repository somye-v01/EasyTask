import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type:String,
    required:true,
    unique:true
},
   // String is shorthand for {type: String}
   email: {
    type:String,
    required:true,
    unique:true
},
password: {
    type:String,
    required:true,
},
img: {
    type:String,
    required: false,
},
Country: {
    type:String,
    required: true,
},
PhoneNumber: {
    type:Number,
    required: false,
},
desc:{
    type:String,
    required: false,
},
isSeller:{
    type:Boolean,
    default: false,
},
}, {timestamps:true});

export default mongoose.model("User",userSchema);