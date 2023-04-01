import { Professional } from "./professional";

export class Movie{
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nationality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;
    constructor(title:string, releaseYear:number, nationality:string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    printMovie(){
        console.log('Titulo - '+ this.title+'\n'+'Año de lanzamiento - '+ this.releaseYear+'\n')
        console.log('Actores - ')
        for(let i=0; i<this.actors.length; i++){
            this.actors[i].printAtributos()
        }
        console.log('Nacionalidad - '+ this.nationality+'\n'+'Director - ')
        this.director.printAtributos()
        console.log('Escritor - ')
        this.writer.printAtributos()
        console.log('Idioma - '+ this.language+'\n'+'Plataforma - '+ this.plataforma+'\n'+'Universo Marvel - '+ this.isMCU+'\n'+'Personaje principal - '+ this.mainCharacterName+'\n'+'Productora - '+this.producer+'\n'+'Distribuidora - '+ this.distributor+'\n'+'Género - '+ this.genre+'\n')
    
    }
  
}
