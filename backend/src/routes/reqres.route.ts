import { Router } from "express";
import { getListUsers } from "../controllers/reqres.controller";


const router = Router();

router.get( "/list-users", getListUsers )

export default router;