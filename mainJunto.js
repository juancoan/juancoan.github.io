function Saludo(){
   alert("Hola todos!")
let cuadrado = document.getElementById('square')
console.log(cuadrado)
document.write(cuadrado)
}

function CambioColor(){
    let background = document.getElementById("change")
    background.style.backgroundColor = "red"
}

function DevolverColor(){
    let background = document.getElementById("change")
    background.style.backgroundColor = "blue"
}

function Formato(){
    let texto = document.getElementById("chunche")

    let texto_capturado = texto.innerHTML 
    alert(texto_capturado)

    texto.innerHTML = "Hello"
    texto.classList.add("text-white","bg-secondary","font-weight-bold","font-italic");
    // let nuevo_texto = document.getElementById("chunche")
     //document.write("<p id='chunche'>"+nuevo_texto.innerHTML+"</p>")
     //document.getElementById("chunche").classList.add("text-white","bg-secondary","font-weight-bold","font-italic");
    

}
