import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { week_dayDTO } from "../model/Show";

export class ShowDatabase extends BaseDatabase {

  private static TABLE_NAME = "NOME_TABELA_SHOWS";

  public async addAShowDataBase(
    band_id: string,
    week_day: string,
    start_time: string,
    end_time: string,
    id:string
  ): Promise<void> {
    try {
      console.log('f1....')

      await this.getConnection()
        .insert({
          id,
         week_day,
         start_time,
         end_time,
         band_id
        })
        .into(ShowDatabase.TABLE_NAME);
         console.log('f2....')

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getShowsByDay(week_day: week_dayDTO): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .from(ShowDatabase.TABLE_NAME)
      .where({ week_day });

    return User.toUserModel(result[0]);
  }

}
