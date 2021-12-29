import { Router } from "express";
import { getHello } from "../controllers/test.controller";


const router = Router();

// GET - Hello World
router.get( "/hello", getHello );

export default router;