import { Movie } from "../entities/Movie";
import { MovieProgramming } from "../entities/MovieProgramming";
import { IMovieProgramming } from "../models/IMovieProgramming.interface";
import {sequelize} from "../database/sequelize";
import {CURRENT_TIME, STATUS} from "../utils/constants";

export const save = (data: any) => {
  return Movie.create(data);
}

export const saveMovieProgramming = async (data: IMovieProgramming) => {
  try {
    const result: MovieProgramming[] = [];
    await sequelize.transaction(async (trx) => {
      data.dateTimes.forEach(async (pd) => {
        pd.times.forEach(async (t) => {
          const saveProgramming = await MovieProgramming.create({
            room_id: data.room_id,
            movie_id: data.movie_id,
            date: pd.date,
            time: t,
            created_at: CURRENT_TIME,
            status: STATUS,
          })
          result.push(saveProgramming);
        });
      })
    })
    return result;
  } catch (error: any) {
    throw new Error("Error al registrar programación de la película");
  }
}

export const searchMovies = async () => {
  return await Movie.findAll({
    include: [
      { association: 'MovieRating', attributes: [ 'id', 'name', 'description' ] },
      { association: 'MovieGenre', attributes: [ 'id', 'name' ] },
    ]
  });
}
