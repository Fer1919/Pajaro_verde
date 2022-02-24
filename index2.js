/*


let a=10;
let b=9;
let c=a%b;
alert(c)






let a,b;
a=5;
a='5';
c='5'==5;
d='5'===5;
alert(c);
alert(d);



const listaOriginal = [1, 2, 3, 4, 5];

const nuevaLista = listaOriginal.map(function sumaUno(elementoActual) {
  return elementoActual + 1;
});

console.log(nuevaLista); // [ 2, 3, 4, 5, 6 ]



let materials=[

    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
]

  document.write(materials.map(mat=>mat.length))
  

//Arrow Funct sin parametro
let f1=_=>{
    console.log('Hola Amigos')
}
f1()

let hi=()=>'hola'
console.log(hi())

let duplicar=(a,b)=>{
    let resultado=a*b;
    console.log(resultado)
}
duplicar(2,8)
//
const multiplicar = (x, y) =>  x * y;

console.log(multiplicar(2, 3)) ;

//
const multiplicar = (x, y) =>  x * y;

const valor = multiplicar(2, 3);

console.log(valor); // 6

////////////////////////////////////////////22-02-2022
//1)Funcion declarada

function sayHi(name){
  console.log(`Hola amigo ${name}`)
}
sayHi('gus')



//2)Expresión funcional

let sayHi=function(name){
  console.log(`Hola ${name}`)
}
sayHi('Gustavito')

//3)arrow
let hi=(amigo)=>console.log(`hola ${amigo}`)
hi('jose')

//4)Func arrow,  Retorno implicito
let doble=numero=>numero*2;
console.log(doble(3))



//5)Arrow con return en body.
let suma=(x,y)=>{return x*y};
console.log(suma(7,7))
//*****************************
// classic function
let suma =function(x,y){
return x*y
}
document.write(suma(8,8))

//5)Arrow con return en body sin parametros.
let mult =()=>{alert('hola')}
mult()


//funcion tradicional sin parametros.
let mult = function(){
  alert('hola!')
}
mult()

//ejemplos
var agregarIdEs5 = function(id, nombre) {
  return {
      id: id,
      nombre: nombre
  }
};
console.log(agregarIdEs5(1, "Edu")); // Object {id: 1, nombre: "Edu"}



let Es=(id, nombre)=>({
  i:id,
  nombr:nombre
})
console.log(Es(1,'fer'))

let nombre=(chapa)=>{alert(`hola ${chapa}`)}
nombre('fer')


let mult=(x,y)=>x*y;
let valor = mult(4,4)
console.log(valor)

//23-02-2022///////////////////////entrenamiento
//1)
let suma=(a,b)=>a+b;
let valor=mult(3,3);
alert(valor)

//2)
let suma=(a,b)=>a+b;
valor=suma(4,5)
console.log(valor)

//3
let resta=(a,b)=>a-b;
valor=resta(8,5)
document.write(valor)

//4
let mult=(a,b)=>a*b;
valor=mult(7,7);
alert(valor)

//5
let div=(a,b)=>a/b;
valor = (' ds'+div(49,7))
console.log(valor)

////////////////////////////////2Entrenamiento
//1)
hello = function() {
  return "Hello World!";
}
alert(hello());


//2
hello=function(){
  return 'hello word!!!!!!!!!!!!!!!'
}
alert(hello())

//3
hola=function(){
  return 'hola'
}
console.log(hola())

//4
hola= function(){
alert('hola amigos desde un alert')
}
hola()

//5

saludo=function(){
  a=prompt('ingrese su nombre')
  
  saludo=(`hola amig@ ${a}`)
  alert(saludo)
}
saludo()

let mult=(a,b)=>a*b;
valor=mult(7,8)
console.log(valor)

//1 arrow nigth
let mult=(a,b)=>a*b;
valor=mult(7,7);

console.log(valor)
//2
mult=function (a,b) {
  return a*b
  }
  
console.log(mult(7,7))

//3)arrow con return

let multReturn=(a,b)=>{return a*b}
console.log(multReturn(4,4))


let hola=_=>{console.log('hola desde console')}
hola()


let div=(a,b)=>a*b;
valor=div(7,7)
console.log(valor)
///////////////////////////////24-02-2022
1//
let rest=(a,b)=>{return a-b}
console.log(rest(4,4))




//2

let string=()=>document.write('hellow word');
string()

//3
let div=(a,b)=> {return a*b};

console.log(div(3,5));

//4
let string=()=>'hola desde aqui';
console.log(string())
//5
let mult=(a,b)=>a*b;
console.log(mult(3,3))

let hi=(amigo)=>console.log(`hola ${amigo}`)
hi('jose')

//6
let sayHi=(name)=>console.log(`Hola amigo ${name}`);

sayHi('gus')

//7
let doble=num=>num*2;
console.log(doble(5))

//8)func tradicional&arrow.

let mult=function (a,b) {return a*b  };
console.log(mult(9,9))


let mult=(a,b)=> {return a*b};

console.log(mult(9,9));
//ln102
let mult =()=>alert('hola')
mult()






var agregarIdEs5 = function(id, nombre) {
  return {
      id: id,
      nombre: nombre
  }
};


//function return con es6&vanilla

//9
let info=(id,nombre)=>({i:id,nombr:nombre})
console.log(info(7,'fer'))

//10
let info=function(id,nombre){return {i:id,nom:nombre}}
console.log(info(9,'tito'))


//12
let info=(id,nombre)=>{return {i:id,nombr:nombre}}
console.log(info(5,'erasmo'))
*/

