"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const influencers_controller_1 = __importDefault(require("../controller/influencers-controller"));
const influencersRouter = express_1.default.Router();
influencersRouter.get("/influencers", influencers_controller_1.default.getAllInfluencers);
influencersRouter.post("/influencers", influencers_controller_1.default.createInfluencers);
influencersRouter.put("/influencers/:id", influencers_controller_1.default.updateInfluencers);
influencersRouter.delete("/influencers/:id", influencers_controller_1.default.deleteInfluencers);
exports.default = influencersRouter;
