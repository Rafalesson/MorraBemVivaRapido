let mensagem

function nomeDafunção() {

    while (mensagem != 1 || mensagem != 2) {

        mensagem = prompt("Digite 1 para AJUDAR \n Digite 2 para NÃ0 AJUDAR");

        if (mensagem == 1) {
            window.location.href = "../AJUDOU/ajudou.html"
            break;
        }
        else if (mensagem == 2) {
            window.location.href = "../NAO-AJUDOU/nao-ajudou.html"
            break;
        }
        else {
            alert('Digite 1 ou 2')
            return nomeDafunção()
        }
    }

}
