import { Router } from "express";
import { createSong } from "../controllers/admin.controller.js";
import { deleteSong } from "../controllers/admin.controller.js";
import { createAlbum } from "../controllers/admin.controller.js";
import { deleteAlbum } from "../controllers/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router=Router();

router.get("/check",protectRoute,requireAdmin,checkAdmin);

router.post("/songs",protectRoute,requireAdmin,createSong);
router.delete("/songs/:id",protectRoute,requireAdmin,deleteSong);

router.post("/albums",protectRoute,requireAdmin,createAlbum);
router.delete("/albums/:id",protectRoute,requireAdmin,deleteAlbum);

export default router