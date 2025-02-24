import { BelongsTo, DataTypes, Model, NonAttribute } from "sequelize";
import { sequelize } from "../database/sequelize";
import { RatingType } from "./RatingType";

export class MovieRating extends Model {}

MovieRating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    rating_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'MovieRating',
    tableName: 'movie_rating',
    timestamps: false,
  }
);

MovieRating.belongsTo(RatingType, {foreignKey: 'rating_type_id', targetKey: 'id', as: 'RatingType'});
