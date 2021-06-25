
export class Show{
    constructor(
    private id: string,
    private week_day: string,
    private start_time: string,
    private end_time: string,
    private show_id: show_id
    ){}

    getId(){
        return this.id;
    }

    getWeek_day(){
        return this.week_day
    }

    getsSart_time(){
        return this.start_time;
    }

    getEnd_time(){
        return this.end_time;
    }

    getShow_id(){
        return this.show_id;
    }

    setId(id: string){
        this.id = id;
    }

    setWeek_day(week_day: string){
        this.week_day = week_day;
    }

    setStart_time(start_time: string){
        this.start_time = start_time;
    }

    setEnd_time(end_time: string){
        this.end_time = end_time;
    }

    setShow_id(show_id: show_id){
        this.show_id = show_id;
    }

   static stringTShow_id(input: string): show_id{
        switch (input) {
            case "NORMAL":
              return show_id.NORMAL;
            case "ADMIN":
              return show_id.ADMIN;
            default:
              throw new Error("Invalid user show_id");
          }
    }

    static toshowModel(show: any): Show {
        return new Show(show.id, show.week_day, show.start_time, show.end_time, show.stringToshow_id(show.show_id));
      }


}

export interface ShowInputDTO{
    start_time: string;
    end_time: string;
    week_day: string;
    show_id: string;
}

export interface week_dayDTO{
    week_day: string;
}

export enum show_id{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}




