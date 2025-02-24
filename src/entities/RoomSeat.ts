import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";
import { Room } from "./Room";

export class RoomSeat extends Model {}

RoomSeat.init(
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
    row: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    seat: {
      type: DataTypes.INTEGER,
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
    modelName: 'RoomSeat',
    tableName: 'room_seat',
    timestamps: false
  }
);
