export class Band{
    constructor(
    private id: string,
    private name: string,
    private music_genre: string,
    private responsible: string
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getMusic_genre(){
        return this.music_genre
    }

    getResponsible(){
        return this.responsible
    }

    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

    setMusic_genre(music_genre: string){
        this.music_genre
    }

    setResponsible(responsible: string){
        this.responsible
    }

    static toBandModel(band: any): Band {
        return new Band(band.id, band.name, band.music_genre, band.responsible);
      }

}

export interface BandInputDTO{
    id: string;
    music_genre: string;
    name: string;
    responsible: string;
}