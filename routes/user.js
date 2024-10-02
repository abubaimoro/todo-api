import { Router } from "express";
import { loginUser, logoutUser, registerUser} from "../controllers/user.js";

// create router
const userRouter = Router();

// define routes
userRouter.post('/users/register', registerUser);
userRouter.post('/users/login', loginUser );
userRouter.post('/users/logout', logoutUser);

// export router
export default userRouter;  
