import { Room } from "../entities/Room";
import {sequelize} from "../database/sequelize";
import {IRoom, IRoomSeat} from "../models/IRoom.interface";
import {RoomSeat} from "../entities/RoomSeat";
import {CURRENT_TIME, STATUS} from "../utils/constants";

export const save = async (roomData: IRoom, seats: IRoomSeat[]) => {
    try {
        const result = await sequelize.transaction(async (trx) => {
            const room = await Room.create({
                ...roomData
            }, {transaction: trx});
            seats.forEach(s => {
                s.seats.forEach(seatNum => {
                    RoomSeat.create({
                        room_id: room.getDataValue("id"),
                        row: s.row,
                        seat: seatNum,
                        created_at: CURRENT_TIME,
                        status: STATUS
                    })
                })
            });
        })
        return result;
    } catch (error: any) {
        throw new Error("Error al registrar sala");
    }
}

export const searchRooms = async () => {
    return await Room.findAll({
        include: [
            { association: 'Seats', attributes: [ 'id', 'room_id', 'row', 'seat', 'status' ] },
        ]
    });
}

export const searchRoomById = async (roomId: number) => {
    return await Room.findOne({
        where: {
            id: roomId
        },
        include: [
            { association: 'Seats', attributes: [ 'id', 'room_id', 'row', 'seat', 'status' ] },
        ]
    });
}
