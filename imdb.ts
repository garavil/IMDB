import { Movie } from "./movie";
import { Professional } from "./professional";

export class Imdb{
    public peliculas:Movie[];
    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
    printImdb(){
        for(let i=0; i<this.peliculas.length; i++){
            this.peliculas[i].printMovie()
        }
    }
}