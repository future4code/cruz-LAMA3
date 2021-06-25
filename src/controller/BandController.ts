import { Request, Response } from "express";
import { BandInputDTO} from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { Authenticator } from "../services/Authenticator";

export class BandController {
    async createBand(req: Request, res: Response) {
        try {

            const input: BandInputDTO = {
                id: req.body.id,
                music_genre: req.body.music_genre,
                name: req.body.name,
                responsible: req.body.responsible,
            }

            const bandBusiness = new BandBusiness();
            const token = req.headers.authorization
            
            const authenticator = new Authenticator();
            const result = authenticator.getData(token as string);
            if(result.role !== "ADMIN")
            throw new Error("somente ADMIN podem cadastrar bandas")
            
            
            bandBusiness.createBand(input)

            res.status(200).send({ result });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }



}