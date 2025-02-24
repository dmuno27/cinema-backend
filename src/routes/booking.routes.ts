import { Router } from "express";
import { getBookingsByMovieProgramming, saveBooking } from "../controllers/booking.controller";

const router = Router();

router.post("/", saveBooking);
router.get('/', getBookingsByMovieProgramming);

export default router;
