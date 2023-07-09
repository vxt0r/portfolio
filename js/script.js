const projetos = [
    {
        titulo: "Álbum de Figurinhas Digital",
        tecnologias: "Laravel",
        descricao: "O usuário pode inserir, remover e atualizar informações e imagens sobre algum jogador da NBA.",
        linkVideo: "https://www.youtube.com/watch?v=Mcgfb09kvHw",
        linkCodigo : "https://github.com/vxt0r/figurinhas-digital"
    },
    {
        titulo: "Lista de Tarefas 2",
        tecnologias: "Laravel",
        descricao: "O usuário digita uma tarefa e escolhe os dias da semana em que pretende realizar, assim a tarefa aparece no card referente aos dias escolhidos.",
        linkVideo : "https://www.youtube.com/watch?v=fCGgK2GL0us",
        linkCodigo : "https://github.com/vxt0r/lista-tarefas-dias"
    },
    {
        titulo: "Carrinho de Compras",
        tecnologias: "PHP, MySQL, HTML e CSS",
        descricao: "A aplicação simula um e-commerce, o usuário faz um cadastro e login, podendo adicionar ou remover os produtos no seu carrinho e definir detalhes da compra.",
        linkVideo : "https://www.youtube.com/watch?v=FpLqCVHJt70",
        linkCodigo : "https://github.com/vxt0r/carrinho-compras/commit/be9d53df615a6c5d13fe2e6e24cbacff9385209b"
    },
    {
        titulo: "Banco Digital",
        tecnologias: "PHP, MySQL, HTML e CSS",
        descricao: "A aplicação simula uma conta em um banco digital, o usuário ao criar um cadastro recebe também uma conta, onde pode realizar saques e depósitos.",
        linkVideo : "https://www.youtube.com/watch?v=EUPsIAVk10A",
        linkCodigo : "https://github.com/vxt0r/banco-digital/commit/4aabdf0bf5c296200b0d0bd37196f1a02f3eb7ac"
    },
    {
        titulo: "Carrinho de Compras 2",
        tecnologias: "Laravel e Bootstrap",
        descricao: "A aplicação simula um e-commerce, o usuário faz um cadastro e login, podendo adicionar ou remover os produtos no seu carrinho e definir detalhes da compra.",
        linkVideo : "https://www.youtube.com/watch?v=rFioLymjRXo",
        linkCodigo : "https://github.com/vxt0r/carrinho-compras"
    },
    {
        titulo: "Banco Digital 2",
        tecnologias: "Laravel e Bootstrap",
        descricao: "A aplicação simula uma conta em um banco digital, o usuário ao criar um cadastro recebe também uma conta, onde pode realizar saques e depósitos.",
        linkVideo : "https://www.youtube.com/watch?v=72mhF3BUlOQ",
        linkCodigo : "https://github.com/vxt0r/banco-digital"
    },
    {
        titulo: "Quadros",
        tecnologias: "HTML, CSS e Javascript",
        descricao: "Uma aplicação sobre quadros de arte abstrata, ao clicar em um quadro aparecem informações sobre o mesmo.",
        linkVideo : "https://www.youtube.com/watch?v=b7qaIFiAXR4",
        linkCodigo : "https://github.com/vxt0r/quadros"
    },
    {
        titulo: "Quiz",
        tecnologias: "HTML, CSS e Javascript",
        descricao: "Um quiz sobre capitais de países, ao responder uma pergunta, a resposta fica verde quando certa e vermelha quando errada.",
        linkVideo : "https://www.youtube.com/watch?v=iicZOevi9G8",
        linkCodigo : "https://github.com/vxt0r/quiz"
    },
    {
        titulo: "Jogo das Cores",
        tecnologias: "HTML, CSS e Javascript",
        descricao: "O usuário deve escolher a cor à que se refere o RGB na parte superior, entre as 4 opções.",
        linkVideo : "https://www.youtube.com/watch?v=6KJnbTewN5c",
        linkCodigo : "https://github.com/vxt0r/jogo-das-cores"
    },
    {
        titulo: "Lista de Tarefas",
        tecnologias: "HTML, CSS e Javascript",
        descricao: "O usuário pode adicionar, editar ou remover tarefas de uma lista.",
        linkVideo : "https://www.youtube.com/watch?v=ynqxde20Mug",
        linkCodigo : "https://github.com/vxt0r/todolist"
    },
    
]

const criarItem = projeto =>{
    return `
        <div class="item">
            <div class="item-info">
                <p>${projeto.titulo}</p><br><br>
                <p>${projeto.tecnologias}</p><br><br>
                <p><a href="${projeto.linkVideo}" target="_blank" rel="noopener noreferrer">Veja um vídeo sobre esse projeto</a></p>
            </div>

            <div class="descricao">
                <span>Descrição</span><br><br>
                <span>
                    ${projeto.descricao}
                    <a href="${projeto.linkCodigo}" target="_blank" rel="noopener noreferrer">(Código)</a>
                </span>
            </div>
        </div>`
}

const exibirListaProjetos = projetos =>{
    const div = document.querySelector('.div-projetos')
    projetos.forEach(projeto => {
       item = criarItem(projeto)
       div.innerHTML += item
    })
}
exibirListaProjetos(projetos)