//Example1
//**********
////В Node.js каждый файл - это отдельный модуль,
////не как в JavaScript, то есть всё, что находится в
////текущем файле - принадлежит этому файлу,
////поэтому мы используем метод exports
////require - подключить index.js
//var user = require('./user');
//
//var vasya = new user.User("Вася");
//var petya = new user.User("Петя");
//
//vasya.hello(petya);
//**********


//Example2
//**********
//modul.parent

//******
////Модуль server.js будет запускать этот функционал, только
////если он запущен явно, то есть с помощью командной строки
//
////var user = require('./user');
////var vasya = new user.User("Вася");
////var petya = new user.User("Петя");
////
////vasya.hello(petya);
////******
//
////******
////Если какой-то другой модуль подключил наш файл server.js,
////то нужно его экспортировать
//
//var user = require('./user');
//
//function run() {
//    var vasya = new user.User("Вася");
//    var petya = new user.User("Петя");
//
//    vasya.hello(petya);
//}
//
//
////Если какой-то другой модуль подключил наш файл server.js,
////то нужно его экспортировать
//if (module.parent) {
//    console.log('другой модуль подключил наш файл server.js');
//    exports.run = run;
//}
////Если нет, то сервер запущен сам по себе
//else {
//    console.log('сервер запущен сам по себе');
//    run();
//}
//**********
//Example3
//**********

//******
//Путь к базе данных var db = require('./db');
//В командной строке для запуска server.js пишу => node server.js,
//но, если проект расширяется, то нам нужно для всех файлов,
//подключаемых к базе данных использовать один единый путь, т.е
//var db = require('db');, чтобы его использовать в командной строке
//для запуска server.js нужно =>
//set NODE_PATH=. затем
//node server.js
//******
//Передаём текущий модуль, т.е подключаю модуль и передаю параметры,
//также это называется паттерн "Модуль-Фабрика"
var log = require('logger')(module);
var db = require('db');
db.connect();//Загрузить из базы

var User = require('./user');

function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");

    vasya.hello(petya);
    log(db.getPhrase('Run successful'));
}
if (module.parent) {


    console.log('другой модуль подключил наш файл server.js');
    exports.run = run;
}
else {
    //console.log('сервер запущен сам по себе');
    run();
}

//**********
