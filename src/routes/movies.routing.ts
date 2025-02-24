import { Router } from "express";
import {getMovies, saveMovie, saveProgramming,} from "../controllers/movies.controller";

const router = Router();

router.get("/", getMovies);

router.post("/", saveMovie);
router.post("/programming", saveProgramming);

export default router;
