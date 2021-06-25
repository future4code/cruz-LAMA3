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
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
         band_id,
         week_day,
         start_time,
         end_time
        })
        .into(ShowDatabase.TABLE_NAME);
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
