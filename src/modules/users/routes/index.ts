import { Request, Response, Router } from "express";

const usersRouter = Router();

usersRouter.post('/register', (request: Request, response: Response) => {
  return response.json({ message: 'Auth#Registration' })
});


export default usersRouter;
