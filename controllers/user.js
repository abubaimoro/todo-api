import { UserModel } from "../models/user.js";
import { registerUserValidator } from "../validators/user.js";
import { loginUserValidator } from "../validators/user.js";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken";

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
    const hashedPassword = bcrypt.hashSync(value.password, 10);    
        // save user to database  
        await UserModel.create({
            ...value,
            password: hashedPassword
        });
        // send user confirmation email
        // respond to requests 
        res.json('user registered successfully');
    } catch (error) {
   next(error); 
    }
}
export const loginUser = async (req, res, next) => {
try {
// validate user input
const { error, value } = loginUserValidator.validate(req.body);
if (error) {
    return res.status(422).json(error);
}
// find one user with identifier
const user = await UserModel.findOne({ email: value.email });
if (!user) {
    return res.status(404).json('user does not exist!');
}
// compare their passwords
const correctPassword = bcrypt.compareSync(value.password, user.password);
if (!correctPassword) {
    return res.status(401).json('invalid credentials!');
}
// sign a token for user
const token = jwt.sign(
    {id: user.id},
    process.env.JWT_PRIVATE_KEY,
    {expiresIn: '24h'}

);
// respond to requests
        res.json({
            message: 'user logged in',
            accessToken: token
        }
        );   
} catch (error) {
   next(error); 
}}

export const getProfile = (req, res, next) => {
    res.json('user profile');
}

export const logoutUser = (req, res, next) => {
    res.json('user logged out');
}

export const updateProfile = (req, res, next) => {
    res.json('user profile updated');
}
