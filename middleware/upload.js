import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const todoIconUpload = multer({
    storage:multerSaveFilesOrg({
    apiAccessToken: process.env.SAVEFILESORG_API_KEY,
    relativePath: '/todo-api/todos/*'    
    }),
    preservePath: true   
});

export const userAvatarUpload = multer({
    storage:multerSaveFilesOrg({
    apiAccessToken: process.env.SAVEFILESORG_API_KEY,
    relativePath: '/todo-api/users/*'    
    }),
    preservePath: true   
});