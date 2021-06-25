import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO } from "../model/User";
import { BaseDatabase } from "../data/BaseDatabase";
import { ShowInputDTO, week_dayDTO } from "../model/Show";
import { ShowBusiness } from "../business/ShowBusiness";

export class ShowController {
    async addShow(req: Request, res: Response) {
        try {

            const input: ShowInputDTO = {
                end_time: req.body.end_time,
                start_time: req.body.start_time,
                show_id: req.body.show_id,
                week_day: req.body.week_day
            }

            const showBusiness = new ShowBusiness();
            const token = await showBusiness.addShowToOneDay(input)
            console.log('funfou o add dentro do ShowController....')
            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getAllShowsByDay(req: Request, res: Response) {

        try {

            const week_day: week_dayDTO = {
                week_day: req.body.week_day
            };

            const showBusiness = new ShowBusiness();
            const result = await showBusiness.getShowByDay(week_day);
            console.log('RESULT NO SHOW CONTROLLER NO GET ALL: ',result)
            res.status(200).send({ result });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}