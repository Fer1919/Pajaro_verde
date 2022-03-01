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



//13
let suma=(a, b) => a + b + 100;
console.log(suma(3,3))

let suma=(a,b)=>a+b+100;
valor=suma(7,7)
console.log(valor)

//14
let a=2,b=2;
let suma= function() {
return a+b+100  
}
console.log(suma())

//15
let a=2,b=2;
let suma=()=>{return a+b+200};
console.log(suma())
//16
let bob=a=>a+2;
console.log(bob(3))



var obj = { // does not create a new scope
  i: 10,
  //b: () => console.log(this.i),
  c: function() {
    console.log(this.i);
  }
}

//obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}

//17) ///////////function&metodos
let obj={
  i:10,
  c: function () {
    console.log(this.i,this)
  }
}
obj.c();

let obj={
  i:20,
  b:()=>{console.log(this.i)}
}
obj.b()

let obj={
  i:10,
  c:function () {
    console.log(this.i)

    }
}
obj.c()
//////
var f = () => {
 
  return this;
};
console.log(f() === window)
/////////////////////////////////////27-02-2022
let dato= prompt ("ingrese gradios Celcius ", "")
let k= parseInt (dato)+270;
alert (k)

//2)




 a=prompt('ingrese grado')
 a=parseInt(a)+273;
 grados=function () { return `corresponde a ${a} grados K`;
   
   }
   console.log(grados())

a=prompt('ingrese grado')
a=parseInt(a)+273;
grados=function () { return ;
  
  }
  console.log(grados())

  
 //3)
 

 a=prompt('ingrese grado')
 b=parseInt(a)+273;
 let grados=()=>document.write(`el grado corresponde a: ${b}`);
 
grados()

//w
a=prompt('ingrese grados celcius')
 a=parseInt(a)+273;
 grados= () => { return `corresponde a ${a} grados K`}
      alert(grados())



      function multiply(x, y) {
        return x * y;
      }

      alert(multiply(3,3))
      
//4)
      let mult=(x,y)=>{return x*y}
      alert(mult(9,9))
      
     //5)
x=prompt('ingrese su numero')
x=parseInt(x)
y=prompt('ingrese 2do  numero')
y=parseInt(y)
      let mult=(x,y)=>{return x*y}
      alert(mult(x,y))

//6)
    let x= 1, y=5;
function multiply(x, y) {
   return x * y;
 }
 alert (multiply(x,y));

//7)
var p = 5;
function myFunc() {
    var p = 9;

    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    //var cons = new Function('\tconsole.log(p);');

    decl();
    expr();
    
}
myFunc();

let x=prompt ("ingrese valor de x", "");
 let y=prompt ("ingrese valor de y", "");
let Z=function(x, y) {
   return x * y;
 }
 alert (Z(x,y));



  let grados=()=>document.write(`el grado corresponde a: ${b}`);
 

//8)
//let saludo='es el resulatado de su multiplicacion'
 let x=prompt ("ingrese valor de x", "");
 let y=prompt ("ingrese valor de y", "");

let result=function(x, y) {
   return x * y  ;

 }

alert (result(x,y) +' es el resultado');

//9)
let saludo='es el resulatado de su multiplicacion'
 x=prompt ("ingrese valor de x", "");
x=parseInt(x)
 y=prompt ("ingrese valor de y", "");
y=parseInt(y)

let  result=function(x, y) {
  return x * y  ;
}

alert (result(x,y) + ` ${saludo}`  );





let g = 5;
let p = 9;
function myFunc() {
    
    

    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    
  var cons = Function('alert(g);');

    decl();
    expr();
   cons();
}

myFunc();


//
let g=5, p=10, s=15;
f1=function() {
a=function(){console.log(g)}

b=function(){document.write(p)}

c=Function('alert(s)')

a();
b();
c();

}
f1()

//


let g=5, p=10, s=15;
f1=function () {
   a=function (){
      document.write(g)
   ;}
   b=function (){
    alert(p)
 }
   c=function (){
      console.log (s)
   ;}
 
}

f1()
a()

c()
b()


let g=5, p=10, s=15;
f1=function() {
a=function(){console.log(g)}

b=function(){document.write(p)}

c=Function('alert(s)')



}

f1();
a();
b();
c();




// function myFunc(theObject) {
//   theObject.make = 'Toyota';
// }

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

//myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)

console.log(mycar.make) 

////////////////////////////////28-02-2022

//1)
hi=_=>'hola desde un arrow';
alert(hi())


hi=_=>{hi(alert('hola amigos'))}//para llamarla eternamente
hi()

//2)
hi=function (){hi(alert('todas las tierras'))}//para llamarla eternamente
hi()


//duplicar
//3
let a,b;
a=prompt('ingrese numero a duplicar')
a=parseInt(a)
duplo=function (b) {
b=a*2;
alert(b)
  }
  duplo()

//4)
let mult=(a,b)=>{
  alert(a*b)
}
mult(2,3);
/////////////////
let mult=(a,b)=>{
  g=a*b;
  alert(g)
}
mult(2,5)

//5)
let mult=(x,y)=>x*y;//con parametro simple
alert(mult(2,2))


//6)
let mult=(a,b)=>{g=a*b;//con parametro simple + un let valor
alert(g);}
mult(2,5)

//7)
let hi=(nombre)=>(`hola amigo ${nombre}`)
alert(hi('fer'))
/////////////////////ejemplos hermanos-.
//8)
let hi=(nombre)=>alert(`hola querido ${nombre}`)
hi('fer')

//9)
let duplo=(numero)=>numero*2;
alert(duplo(9))

//10)
let suma=(a,b)=>{return a*b }

alert(suma(9,9))


//11)

let ret=(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
alert(ret(7,7))

//12)
ret=function(a,b){
  let x=42;
  return a+b+x;
}
alert(ret(7,7))

//13)
let suma=([a,b]=[3,3])=>a+b;
console.log(suma())

//14)
let obj={
  i:10,
  c: function(){
    console.log(this.i)
  }
}
obj.c()


let a= 3, b= 2;
f1= function (a,b){
   let chuck = 42;
   return a + b + chuck;
 }
 alert (f1(a,b))

let a=1,b=2,c=3;

let obj={
  num:10
  f: function (a, b, c) {
    return (this.num + a + b + c;
  }
}
//15)
let b=20, a=30
let obj={
  i:10,
  c: function(a,b){
    return  this.i+a+b;
  }
}

console.log(obj.c(a,b))


let a,b;
a=prompt('ingrese valor a duplicar')
a=parseInt(a);
let duplo=function () {
  b=a*2;
  alert(b)
  }
duplo()


let b=2;
let a=prompt("ingrese un numero para duplicarlo","");
dato = parseInt (a);
f1= (a,b) => a*b;
alert (`el resultado es `+ f1(a,b));

let a,b;
a=prompt('ingrese valor a duplicar')
a=parseInt(a);
let duplo=function () {
  b=a*2;
  alert(b+' es el doble ')
  }
duplo()

//16)
let b=20, a=30
let obj={
  i:10,
  c: function(a,b){
    return  this.i+a+b;
  }
,
  d: function(a,b){
    return  this.i+a-b;
  }

}

console.log(obj.d(a,b))

let obj={
  nombre:'fernando',
  a:function(){
    return this.nombre
  }
}

alert(obj.a())

//17)

let a=10;
var bar = {
  i:10,


  foo0 : function (){return 0+a;},
  foo1(){return 1+a;},
  ["foo" + 2](){return 4+a;},
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2


let persona={
nombre:'fer',
edad:40,
estado:'soltero',
interes:'musica',
c:function () {
  alert(this.nombre+' '+this.edad+' '+this.estado+' '+this.interes)
  }
}
persona.c()



let a= ` avila `;
let b= ` troncoso `;
let c= ` waldo `;
let d= ` patricio `;
let e= ` DJ `;
let obj={
  i:91558874,
 y(){
    return  this.i+a+b+c+d+e;
  },
 z(){
   return  this.i;
}
}
console.log(obj.y());

*/
function persona(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
persona()