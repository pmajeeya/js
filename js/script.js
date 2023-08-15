const numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', ''),
	personalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false
	};
const one = prompt('one of last watched movies?', ''),
	two = prompt('your rating?', ''),
	three = prompt('one of last watched movies?', ''),
	four = prompt('your rating?', '');

personalMovieDB.movies[one] = two;
personalMovieDB.movies[three] = four;


console.log(personalMovieDB);

