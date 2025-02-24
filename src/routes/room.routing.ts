import { Router } from "express";
import {getRoomById, getRooms, saveRoom} from "../controllers/room.controller";

const router = Router();

router.get("/", getRooms);
router.get("/:roomId", getRoomById);
router.post("/", saveRoom);

export default router;
