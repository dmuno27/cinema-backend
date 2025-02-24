import { Request, Response } from "express";
import { constants } from "node:http2";
import { searchGenres, searchMovieRatings } from "../services/config.service";

export const getGenres = async (req: Request, res: Response) => {
  try {
    const result = await searchGenres();
    res.status(constants.HTTP_STATUS_OK).json(result); 
  } catch (error: any) {
    res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
    .json(error);
  }
};

export const getMovieRatings = async (req: Request, res: Response) => {
  try {
    const result = await searchMovieRatings();
    res.status(constants.HTTP_STATUS_OK).json(result); 
  } catch (error: any) {
    res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
    .json(error);
  }
};

