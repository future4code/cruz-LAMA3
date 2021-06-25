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
        await showDatabase.addAShowDataBase(show.end_time, show.show_id, show.start_time, show.week_day);

        // const accessToken = authenticator.generateToken({ id, role: show.role });

        // return accessToken;
        console.log('funfou o add dentro do showBusiness....')
        return 'sucess'
    }

    async getShowByDay(week_day: week_dayDTO) {

        const showDatabase = new ShowDatabase();
        const showFromDB = await showDatabase.getShowsByDay(week_day);

        // const hashManager = new HashManager();
        // const hashCompare = await hashManager.compare(showDa.password, showFromDB.getPassword());

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: showFromDB.getId(), role: showFromDB.getRole() });

        // if (!hashCompare) {
        // throw new Error("Invalid Password!");
        // }
        console.log('funfou o getShow dentro do showBusiness....')
        console.log('accessToken: ', accessToken)
        console.log('showFromDB: ', showFromDB)
        return 'shakalaka no SHOWBUSINESSSSS'
        // return accessToken;
    }
}