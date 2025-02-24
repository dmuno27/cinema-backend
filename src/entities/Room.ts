import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";
import { RoomSeat } from "./RoomSeat";

export class Room extends Model {}

Room.init(
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
    },
    capacity: {
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
    modelName: 'Room',
    tableName: 'room',
    timestamps: false
  }
)

Room.hasMany(RoomSeat, {foreignKey: 'room_id', as: 'Seats'});
