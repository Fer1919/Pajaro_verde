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
*/