import { model,Schema } from "mongoose";
const userScheme = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        lowercase: true,
        unique: true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minLength: [3,'Min 2 chars'],
        maxLenght:[10, 'Max 10 chars'],
        select: false
    }
});


userScheme.pre('save', function(next) {
    const user = this;
    console.log('Pre hook');
    console.log(user);
 
    user.password = user.password + '-encrypted'

    next();
});
userScheme.post('save', function(next) {
    const user = this;
    console.log('Post hook');
    console.log(user);
   
    
    next(user)
});


const User = model('user', userScheme);

export default User;