var confirmbt = document.getElementById('confirmarbotao') //Pegar elemento pelo id

confirmbt.onclick = function(){ //Executa a função ao click
    var escolha = confirm('Ok ou cancelar?')//Coloca a escolha do usuario dentro de uma variavel
    if(escolha == true){ //Se ele escolher Ok (for true)
        alert('Escolheu Ok') //Da um alert
    } else{ //Se ele escolher cancelar (for false)
        alert('Escolheu Cancelar') //Da um alert
    }
}

