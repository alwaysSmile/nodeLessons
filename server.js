//В Node.js каждый файл - это отдельный модуль,
//не как в JavaScript, то есть всё, что находится в
//текущем файле - принадлежит этому файлу,
//поэтому мы используем метод exports
//require - подключить index.js
var user = require('./user');

var vasya = new user.User("Вася");
var petya = new user.User("Петя");

vasya.hello(petya);
