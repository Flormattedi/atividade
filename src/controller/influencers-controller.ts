import { NextFunction, Request, Response } from "express";
import MongoConnection from "../db/mongo-connection";
import createError from "http-errors";
import { ObjectId } from "mongodb";
import InfluencersService from "../service/influencers-service";
import Influencers from "../model/influencer";

export default class InfluencersController {

    public static async getAllInfluencers(req: Request, res: Response, next: NextFunction) {
        try {
            const conn = await MongoConnection.getInstace();
            const db = conn.db("devweb");
            const influencers = db.collection("influencers");
            res.status(200).json(await influencers.find().toArray());
        } catch (error) {
            next(createError[500]((error as Error).message));
        }
    }

    public static async createInfluencers(req: Request, res: Response, next: NextFunction) {
        const influencer: Influencers = req.body;

        try {
           InfluencersService.validade(influencer);
        } catch (error) {
            next(createError[400]((error as Error).message));
            return;
        }

        try {
            const conn = await MongoConnection.getInstace();
            const db = conn.db("devweb");
            const influencers = db.collection("influencers");
            await influencers.insertOne(influencer);
            res.status(201).json(influencer);
        } catch (error) {
            next(createError[500]((error as Error).message));
        }

    } 
    
    public static async updateInfluencers(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params;
        const influencer: Influencers = req.body;
        let objectId: ObjectId;

        try {
            objectId = InfluencersService.validadeId(id);
        } catch (error) {
            next(createError[400]((error as Error).message));
            return;
        }

        try {
            const conn = await MongoConnection.getInstace();
            const db = conn.db("devweb");
            const influencers = db.collection("influencers");
            
            if (await influencers.countDocuments({_id: objectId}) === 0) {
                next(createError[404]( " O influencer com esse id não existe no banco de dados!"));
                return;
            }

            try {
                InfluencersService.validade(influencer);
            } catch (error) {
                next(createError[400]((error as Error).message));
                return;
            }

            await influencers.updateOne({_id: objectId}, {
                $set: influencers
            });
            res.status(200).json(await influencers.findOne({_id: objectId}));        
        } catch (error) {
            next(createError[500]((error as Error).message));
        }
    } 
    
    public static async deleteInfluencers(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params;
        let objectId: ObjectId;

        try {
            objectId = InfluencersService.validadeId(id);
        } catch (error) {
            next(createError[400]((error as Error).message));
            return;
        }

        try {
            const conn = await MongoConnection.getInstace();
            const db = conn.db("devweb");
            const influencers = db.collection("influencers");
            
            if (await influencers.countDocuments({_id: objectId}) === 0) {
                next(createError[404]("O influencer com esse id não existe no banco de dados!" ));
                return;
            }

            await influencers.deleteOne({_id: objectId});
            res.status(204).send("");

        } catch (error) {
            next(createError[500]((error as Error).message));
        }
    }        

}