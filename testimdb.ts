import { Imdb } from "./imdb";
import { Movie } from "./movie";
import { Professional } from "./professional";


let profesional1 = new Professional('Emma Stone', 34, 52, 168, false, 'estadounidense',1, 'actriz')
let profesional2 = new Professional('Pedro Pascal', 47, 75, 180, false, 'chileno', 0, 'actor')
let profesional3 = new Professional('Emma Watson', 33, 50, 165, false, 'británica', 0, 'actriz')
let profesional4 = new Professional('Tim Burton', 64, 76, 182, false, 'estadounidense', 0, 'director')
let movie1 = new Movie('Hotel Budapest', 2014, 'estadounidense', 'Comedia')
let movie2 = new Movie('La novia cadaver', 2005, 'estadounidense', 'animacion')
movie1.language = 'inglés'
movie1.director = new Professional('Wes Anderson', 48, 60, 1.70, false, 'estadounidense', 0, 'director')
movie1.actors = [profesional1,profesional2]
movie1.writer = new Professional('Wes Anderson', 48, 60, 1.70, false, 'estadounidense', 0, 'escritor')
movie2.director = profesional4;
movie2.actors = [profesional1,profesional3]
movie2.isMCU = false
movie2.mainCharacterName = 'Victor'
movie2.writer = profesional4

let arrMovie = [movie1, movie2]

let imdb = new Imdb(arrMovie)
imdb.printImdb()

let myJson = JSON.stringify(imdb)
console.log(myJson)