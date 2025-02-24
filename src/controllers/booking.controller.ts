import { Request, Response } from "express";
import { constants } from "node:http2";
import { save } from "../services/booking.service";
import { CURRENT_TIME, STATUS } from "../utils/constants";
import IBooking from "../models/IBooking.interface";


export const saveBooking = async (req: Request, res: Response) => {
    try {
        console.log('SAVE BOOKING')
        const body: IBooking = req.body;
        body.created_at = CURRENT_TIME;
        body.status = STATUS;
        const result = await save(body);
        res.status(constants.HTTP_STATUS_OK).json(result);
    } catch (error: any) {
        res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
            .json(error);
    }
}

export const getBookingsByMovieProgramming = async (req: Request, res: Response) => {
    try {
        console.log('SAVE BOOKING')
        const body: IBooking = req.body;
        body.created_at = CURRENT_TIME;
        body.status = STATUS;
        const result = await save(body);
        res.status(constants.HTTP_STATUS_OK).json(result);
    } catch (error: any) {
        res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
            .json(error);
    }
}



