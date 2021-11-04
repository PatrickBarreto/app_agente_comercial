const input1 = document.querySelector("#valor1")
const input2 = document.querySelector("#valor2")
const input3 = document.querySelector("#valor3")
const retorno = document.querySelector("#retorno")
const btnCalcular = document.querySelector("#btn-calcular")


/* Calcula o custo real do cliente*/

 function crc () {
    let num1 = Number(input1.value)
    let num2 = Number(input2.value)
    let num3 = Number(input3.value)
    let resultado = 0;
    let resto = 0;

    if (num2 > 0 && num3 <=0 ){
        resto = num1 - num2;
        resultado = (resto / num1) * 100;
        retorno.innerHTML= `O custo real é de ${resultado} %`;
    }
    else if (num3 > 0 && num2 <= 0){
        resultado = (num3 / num1) * 100;
        retorno.innerHTML= `A taxa real é de ${resultado} %`;
    }
    else{
        retorno.innerHTML = `Aplique 0 a um dos dois últimos valores`
    }
 }

btnCalcular.addEventListener("click", crc);



