/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var res = [];

    for (let i = 0; i < array.length; i++) {
        res[i] = fn(array[i], i, array);
    }
    
    return res;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var accumulator = array[0];
    var i = 1;

    if (initial != null) {
        accumulator = initial;
        i = 0
    }
    for (; i < array.length; i++) {
        accumulator = fn(accumulator, array[i], i, array);
    }

    return accumulator;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    return Object.keys(obj).map(item => item.toUpperCase());
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    var result = [];

    if (from < 0) {
        from = array.length + from;
    }

    if (from < 0) {
        from = 0;
    }

    if (to < 0) {
        to = array.length + to;
    }

    if (from > array.length || -to > array.length) {
        return [];
    }

    if (to > array.length) {
        to = array.length;
    }

    for (let i = from, j = 0; i < to; i++, j++) {
        result[j] = array[i];
    }

    return result;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set: function (target, property, value) {
            target[property] = value * value;
            
            return true;
        }

    })
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
