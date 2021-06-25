import { ShowDatabase } from "../data/ShowDatabase"
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { ShowInputDTO, week_dayDTO } from "../model/Show";

export class ShowBusiness {

    async addShowToOneDay(show: ShowInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

 
        const showDatabase = new ShowDatabase();
        await showDatabase.addAShowDataBase(show.band_id,show.week_day,show.end_time,  show.start_time,id);
        return 'sucess'
    }

    async getShowByDay(week_day: week_dayDTO) {

        const showDatabase = new ShowDatabase();
        const showFromDB = await showDatabase.getShowsByDay(week_day);


        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: showFromDB.getId(), role: showFromDB.getRole() });

        console.log('funfou o getShow dentro do showBusiness....')
        console.log('accessToken: ', accessToken)
        console.log('showFromDB: ', showFromDB)
        return 'all bandS : '
        // return accessToken;
    }
}