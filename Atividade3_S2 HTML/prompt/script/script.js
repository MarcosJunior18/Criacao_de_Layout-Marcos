var botaoprompt = document.getElementById('botaodoprompt') //Pegar o elemento pelo id

botaoprompt.onclick = function(){ //Executa a função ao clicar 
    var nome = prompt('Digite seu nome') //Coloca oque for digitado pelo usuario em uma variavel
    alert(`Seu nome é ${nome}`)// Da um alert com o nome da digitado
}
