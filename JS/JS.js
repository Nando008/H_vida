let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let icon_hamburguer = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("clik",function(){
    if(icon_hamburguer){
        document.querySelectorAll (".hamburguer")[0].style.color="#fff";
        icon_hamburguer = false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        icon_hamburguer = true;
    }

    enlaces_header.classList.toggle("hamburgueropen");
})

document.querySelector(".enlaces-header")[0].addEventListener("click",function(){
    enlaces_header.classList.toggle("hamburgueropen");
    document.querySelectorAll(".hamburguer")[0].style.color="#000";
})


// clase //

console.log(5+2);
const numeone = "cualquier cosa";
var nume_dos = "cualquier cosa";
let numetres = "cualquier cosa";

//tipos de datos//
let num_a = 5;
let num_b = 10.2;
let boolean = false;
let stringvar = "hola soy un string";
let arraynum = [1,2,3,4,5,"6","7"];
let dias_semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
let users = [
    {name:"jose", last_name:"benavides", age:20},
    {name:"fernando", last_name:"robles", age:20}
]

//operadores//

let suma = num_a + num_b;
let resta = num_b - num_a;
let multi =num_a * num_b;
let divi = num_b / num_a;
let module = num_b % num_a;
let expo = num_b ^ num_a;

\n = salto de linea

let concatenar = "suma : ".concat(suma);
console.log (concatenar); 

// operadores logicos < / > / <> / >= etc //
// operador ternario  : ? //
var ter = Math.PI > 4? "sip" : "not"; 

//estructuras condicionales: if / ELSE / ELSEIF//

let cantarray = arraynum.length;
if(cantarray > 7){
    console.log(cantarray);
}
for (let i = 0; i<dias_semana.length;i++){
    console.log(users[i])
}

function calcular(){
    let namevar = document.getElementById("valor").value;
    namevar = 
}

