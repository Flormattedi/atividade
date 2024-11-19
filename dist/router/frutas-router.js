"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const frutas_controller_1 = __importDefault(require("../controller/frutas-controller"));
const frutasRouter = express_1.default.Router();
frutasRouter.get("/", frutas_controller_1.default.getAllFrutas);
frutasRouter.post("/", frutas_controller_1.default.createFruta);
frutasRouter.put("/:id", frutas_controller_1.default.updateFruta);
frutasRouter.delete("/:id", frutas_controller_1.default.deleteFruta);
exports.default = frutasRouter;
