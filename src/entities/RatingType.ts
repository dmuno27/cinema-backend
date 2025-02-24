import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class RatingType extends Model {}

RatingType.init(
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
    modelName: 'RatingType',
    tableName: 'rating_type',
    timestamps: false
  }
)