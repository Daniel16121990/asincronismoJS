function sum(num1,num2){
    return num1 + num2;
}

function calc (num1, num2, callback){
    return callback(num1, num2);
}
console.log(calc(2, 3, sum))

//ejercicio 2
setTimeout(function(){
    console.log("Hola JavaScript1")
}, 2000)

setTimeout(function(){
    console.log("Hola JavaScript2")
}, 1000)

setTimeout(function(){
    console.log("Hola JavaScript3")
}, 500)