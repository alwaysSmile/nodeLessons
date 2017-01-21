//var log = require('logger')(module);

module.exports = function (module) {//module - название модуля, который нужно логировать

    //исходя из этого молуля делаеть функцию логер
    return function(/* ... */) {
        //Делаем из arguments обычный массив и прибавляем ему имя файла
        var args = [module.filename].concat([].slice.call(arguments));
        //передаём все аргументы в консоль
        console.log.apply(console, args);
    };
};