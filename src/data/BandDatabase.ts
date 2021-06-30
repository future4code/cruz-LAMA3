import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {

  private static TABLE_NAME = "NOME_TABELA_BANDAS";

  public async createBand(
    id: string,
    name: string,
    music_genre: string,
    responsible: string
  ): Promise<void> {
    try {
      console.log({ id, name, music_genre, responsible })
      const banana = await this.getConnection()
        .insert({
          id,
          name,
          music_genre,
          responsible
        })
        .into(BandDatabase.TABLE_NAME);
      console.log('4')

      console.log(banana)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandByName(name: string): Promise<Band> {
    const result = await this.getConnection()
      .select("*")
      .from(BandDatabase.TABLE_NAME)
      .where({ name });

    return Band.toBandModel(result[0]);
  }

}
