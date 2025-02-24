import { Router } from "express";
import {getMovieProgramming, getMovies, saveMovie, saveProgramming,} from "../controllers/movies.controller";

const router = Router();

router.get("/", getMovies);
router.get('/programming/:movieId', getMovieProgramming);

router.post("/", saveMovie);
router.post("/programming", saveProgramming);

export default router;
