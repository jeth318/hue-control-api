import { Router } from "express";
import * as R from "./rest/resource";

const router = Router(); // eslint-disable-line new-cap
router.get("/health-check", R.pong);
router.get("/groups", R.fetchAllGroups);
router.get("/lights", R.fetchAllLights);
router.put("/lights/:id", R.setLight);
router.post("/automator", R.setAutomatorState);
router.get("/automator", R.getAutomatorState);

export default router;
