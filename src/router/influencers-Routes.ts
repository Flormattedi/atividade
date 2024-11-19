import express from "express";
import InfluencersController from "../controller/influencers-controller";

const influencersRouter = express.Router();

influencersRouter.get("/influencers", InfluencersController.getAllInfluencers);
influencersRouter.post("/influencers", InfluencersController.createInfluencers);
influencersRouter.put("/influencers/:id", InfluencersController.updateInfluencers);
influencersRouter.delete("/influencers/:id", InfluencersController.deleteInfluencers);

export default influencersRouter;