alert("El mayor de 3 numeros")

let valor1 = prompt("Ingrese un numero. ")
let valor2 = prompt("Ingrese un 2ndo numero. ")
let valor3 = prompt("Ingrese un 3er numero. ")

valorNum1 = parseInt(valor1)
valorNum2 = parseInt(valor2)
valorNum3 = parseInt(valor3)

function NumeroMayor(valorNum1, valorNum2,valorNum3){
   if((valorNum1==valorNum2 && valorNum3==valorNum2)){
    return "Numeros iguales. "
         }else{
              if (valorNum1 >= (valorNum2 && valorNum3)) {
            return "Mayor numero 1. Numero digitado: " + valorNum1
        }
        if (valorNum2 >= (valorNum1 && valorNum3)) {
            return "Mayor numero 2. Numero digitado: " + valorNum2
        }
        if (valorNum3 >= (valorNum1 && valorNum2)) {
            return "Mayor numero 3. Numero digitado: " + valorNum3
        }
     }
    }
    document.write("<br>");
    document.write("<br>");

function Suma(valorNum1, valorNum2,valorNum3){
    let Sumatoria = 0;
    if(isNaN(valorNum1) && isNaN(valorNum2) && isNaN(valorNum3)){
       return "NO ingreso numeros."
    }else{
        Sumatoria = (valorNum1+valorNum2+valorNum3)
        return Sumatoria
    }
}

document.write(NumeroMayor(valorNum1, valorNum2,valorNum3));
alert("La suma de los numeros es: " + Suma(valorNum1, valorNum2,valorNum3));