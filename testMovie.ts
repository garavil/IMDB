import { Movie } from "./movie"
import { Professional } from "./professional"


let profesional1 = new Professional('Emma Stone', 34, 52, 168, false, 'estadounidense',1, 'actriz')
let profesional2 = new Professional('Pedro Pascal', 47, 75, 180, false, 'chileno', 0, 'actor')
let profesional3 = new Professional('Emma Watson', 33, 50, 165, false, 'británica', 0, 'actriz')
let movie1 = new Movie('Hotel Budapest', 2014, 'estadounidense', 'Comedia')
movie1.language = 'inglés'
movie1.director = new Professional('Wes Anderson', 48, 60, 1.70, false, 'estadounidense', 0, 'director')
movie1.actors = [profesional1,profesional2,profesional3]
movie1.writer = new Professional('Wes Anderson', 48, 60, 1.70, false, 'estadounidense', 0, 'escritor')
movie1.printMovie()
