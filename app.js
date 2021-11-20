const input1 = document.querySelector("#valor1")
const input2 = document.querySelector("#valor2")
const input3 = document.querySelector("#valor3")
const retorno = document.querySelector("#retorno")
const btnCalcular = document.querySelector("#btn-calcular")
const abrir = document.querySelector("#abrir")
const fechar = document.querySelector("#fechar")
const opcoes = document.querySelector("#sessao-opcoes")


/* Calcula o custo real do cliente*/

 function crc () {
    let valor_venda = Number(input1.value)
    let valor_recebido = Number(input2.value)
    let valor_descontado = Number(input3.value)
    let resultado = 0;
    let resto = 0;

    if (valor_recebido > 0 && valor_descontado <= 0 ){
        resto = valor_venda - valor_recebido;
        resultado = (resto / valor_venda) * 100;
        retorno.innerHTML= `A taxa real é de ${resultado} %`;
    }
    else if (valor_descontado > 0 && valor_recebido <= 0){
        resultado = (valor_descontado / valor_venda) * 100;
        retorno.innerHTML= `A taxa real é de ${resultado} %`;
    }
    else{
        retorno.innerHTML = `Aplique 0 a um dos dois últimos valores`
    }
 }

btnCalcular.addEventListener("click", crc);

////////////////

function abrir_opcoes (e) {
    let x = e.target
    opcoes.style.display="flex"
}
function fechar_opcoes (e) {
    let x = e.target
    opcoes.style.display="none"
}

   
abrir.addEventListener("click", abrir_opcoes)
fechar.addEventListener("click", fechar_opcoes)
