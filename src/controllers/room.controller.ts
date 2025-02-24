import { Request, Response } from "express";
import { constants } from "node:http2";
import {searchRooms, save, searchRoomById} from "../services/room.service";
import { CURRENT_TIME, STATUS } from "../utils/constants";
import { ISaveRoom, IRoom } from "../models/IRoom.interface";

export const getRooms = async (req: Request, res: Response) => {
    try {
        const result = await searchRooms();
        res.status(constants.HTTP_STATUS_OK).json(result);
    } catch (error: any) {
        res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
            .json(error);
    }
};

export const getRoomById = async (req: Request, res: Response) => {
    try {
        console.log(req.params);
        const roomId = Number(req.params.roomId);
        const result = await searchRoomById(roomId);
        res.status(constants.HTTP_STATUS_OK).json(result);
    } catch (error: any) {
        res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
            .json(error);
    }
};

export const saveRoom = async (req: Request, res: Response) => {
    try {
        const { room, seats } = req.body as ISaveRoom;
        room.created_at = CURRENT_TIME;
        room.updated_at = CURRENT_TIME;
        room.status = STATUS;
        const result = await save(room, seats);
        res.status(constants.HTTP_STATUS_OK).json(result);
    } catch (error: any) {
        res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
            .json(error);
    }
}



