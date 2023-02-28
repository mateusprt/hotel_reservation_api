import { Router } from "express";
import usersRouter from "../modules/users/routes";

const appRoutes = Router();

appRoutes.use('/auth', usersRouter);

export default appRoutes;