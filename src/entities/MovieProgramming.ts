import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";
import { Room } from "./Room";
import { Movie } from "./Movie";

export class MovieProgramming extends Model {}

MovieProgramming.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    created_at: {
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
    modelName: 'MovieProgramming',
    tableName: 'movie_programming',
    timestamps: false
  }
);

MovieProgramming.belongsTo(Room, {foreignKey: 'room_id', targetKey: 'id', as: 'Room'});
MovieProgramming.belongsTo(Movie, {foreignKey: 'movie_id', targetKey: 'id', as: 'Movie'});
