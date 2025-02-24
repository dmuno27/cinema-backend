import { Router } from "express";
import { getGenres, getMovieRatings } from "../controllers/config.controller";

const router = Router();

router.get("/movieGenres", getGenres);
router.get("/movieRatings", getMovieRatings);

export default router;
