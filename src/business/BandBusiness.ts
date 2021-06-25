import { BandInputDTO } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";



export class BandBusiness {

    async createBand(band: BandInputDTO) {
        console.log('3')

        const idGenerator = new IdGenerator();
        const id = await idGenerator.generate();

        const bandDatabase = new BandDatabase();

        console.log('33333333')
        console.log('band: ',band)
        await bandDatabase.createBand(id, band.name,band.music_genre, band.responsible);

    }

    
}