import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";
import { MovieProgramming } from "./MovieProgramming";
import { RoomSeat } from "./RoomSeat";

export class Booking extends Model {}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    movie_programming_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    room_seat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_email: {
      type: DataTypes.STRING,
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
    modelName: 'Booking',
    tableName: 'booking',
    timestamps: false
  }
);
Booking.belongsTo(MovieProgramming, {foreignKey: 'movie_programming_id', targetKey: 'id', as: 'MovieProgramming'});
Booking.belongsTo(RoomSeat, {foreignKey: 'room_seat_id', targetKey: 'id', as: 'RoomSeat'});
