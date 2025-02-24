import { Request, Response } from "express";
import { constants } from "node:http2";
import {searchMovies, save, saveMovieProgramming, getProgrammingByMovie} from "../services/movie.service";
import IMovie from "../models/IMovie.interface";
import { CURRENT_TIME, STATUS } from "../utils/constants";
import {IMovieProgramming} from "../models/IMovieProgramming.interface";

export const getMovies = async (req: Request, res: Response) => {
  try {
    const result = await searchMovies();
    res.status(constants.HTTP_STATUS_OK).json(result);
  } catch (error: any) {
    res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
    .json(error);
  }
};

export const saveMovie = async (req: Request, res: Response) => {
  try {
    const body: IMovie = req.body;
    body.created_at = CURRENT_TIME;
    body.updated_at = CURRENT_TIME;
    body.status = STATUS;
    const result = await save(body);
    res.status(constants.HTTP_STATUS_OK).json(result);
  } catch (error: any) {
    res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
    .json(error);
  }
}

export const saveProgramming = async (req: Request, res: Response) => {
  try {
    const body: IMovieProgramming = req.body;
    body.created_at = CURRENT_TIME;
    body.status = STATUS;
    const result = await saveMovieProgramming(body);
    res.status(constants.HTTP_STATUS_OK).json(result);
  } catch (error: any) {
    res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
        .json(error);
  }
}

export const getMovieProgramming = async (req: Request, res: Response) => {
  try {
    const movieId = Number(req.params.movieId);
    const result = await getProgrammingByMovie(movieId);
    res.status(constants.HTTP_STATUS_OK).json(result);
  } catch (error: any) {
    res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
        .json(error);
  }
}


