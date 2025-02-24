import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class MovieGenre extends Model {}

MovieGenre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'MovieGenre',
    tableName: 'movie_genre',
    timestamps: false
  }
)