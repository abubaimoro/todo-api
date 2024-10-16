import { UserModel } from "../models/user.js";
import { registerUserValidator } from "../validators/user.js";
import { hashSync } from "bcryptjs";


export const registerUser = async (req, res, next) => {
try {
        // validate user input
    const { error, value } = registerUserValidator.validate(req.body);
    if (error) {
        return res.status(422).json(error);
    }
        // check if user does not exist
    const user = await UserModel.findOne({ email: value.email });
    if (user) {
        return res.status(409).json('user already exists!');
    }
        // hash their password
        // save user to database  
        // send user confirmation email
        // respond to requests 
        res.json('user registered successfully');
} catch (error) {
   next(error); 
}
}
export const loginUser = (req, res, next) => {
    res.json('user logged in');
}
export const logoutUser = (req, res, next) => {
    res.json('user logged out');
}
