'use strict';


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    lessTen() {
        console.log(`Просмотрено довольно мало фильмов`);
    },
    betTenThirty() {
        console.log(`Вы классический зритель`);
    },
    moreThirty() {
        console.log(`Вы киноман`);
    },
    errorFunc() {
        console.error('Error');
    }
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        personalMovieDB.errorFunc()
        i--;
    }
}

if (personalMovieDB.count < 10) {
    personalMovieDB.lessTen()
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    personalMovieDB.betTenThirty()
} else if (personalMovieDB.count >= 30) {
    personalMovieDB.moreThirty()
} else {
    personalMovieDB.errorFunc()
}

console.log(personalMovieDB);