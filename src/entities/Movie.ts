import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";
import { MovieRating } from "./MovieRating";
import { MovieGenre } from "./MovieGenre";

export class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movie_rating_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    movie_genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Movie',
    tableName: 'movie',
    timestamps: false
  }
)

Movie.belongsTo(MovieRating, {foreignKey: 'movie_rating_id', targetKey: 'id', as: 'MovieRating'});
Movie.belongsTo(MovieGenre, {foreignKey: 'movie_genre_id', targetKey: 'id', as: 'MovieGenre'});
