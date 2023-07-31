const projetos = [
    {
        titulo: "Gerenciador de consultas",
        tecnologias: "PHP, MySQL, HTML e CSS",
        descricao: "A aplicação simula um sistema de controle de consultas de um médico, com registro de consulta e envio de email aos pacientes.",
        linkVideo : "https://youtu.be/qY9bIYvgSFw",
        linkCodigo : "https://github.com/vxt0r/consultas"
    },
    {
        titulo: "Gerador de Relatório",
        tecnologias: "PHP, MySQL, HTML e CSS",
        descricao: "O usuário pode enviar uma planilha do Excel, dentro de certos padrões, e receber um relatório em PDF sobre a planilha enviada.",
        linkVideo : "https://youtu.be/LlCfcsOQoxA",
        linkCodigo : "https://github.com/vxt0r/relatorio"
    },
    {
        titulo: "Carrinho de Compras ",
        tecnologias: "Laravel e Bootstrap",
        descricao: "A aplicação simula um e-commerce, o usuário faz um cadastro e login, podendo adicionar ou remover os produtos no seu carrinho e definir detalhes da compra.",
        linkVideo : "https://www.youtube.com/watch?v=rFioLymjRXo",
        linkCodigo : "https://github.com/vxt0r/carrinho-compras"
    },
    {
        titulo: "Banco Digital ",
        tecnologias: "Laravel e Bootstrap",
        descricao: "A aplicação simula uma conta em um banco digital, o usuário ao criar um cadastro recebe também uma conta, onde pode realizar saques e depósitos.",
        linkVideo : "https://www.youtube.com/watch?v=72mhF3BUlOQ",
        linkCodigo : "https://github.com/vxt0r/banco-digital"
    },
    {
        titulo: "Álbum de Figurinhas Digital",
        tecnologias: "Laravel",
        descricao: "O usuário pode inserir, remover e atualizar informações e imagens sobre algum jogador da NBA.",
        linkVideo: "https://www.youtube.com/watch?v=Mcgfb09kvHw",
        linkCodigo : "https://github.com/vxt0r/figurinhas-digital"
    },
    {
        titulo: "Lista de Tarefas",
        tecnologias: "Laravel",
        descricao: "O usuário digita uma tarefa e escolhe os dias da semana em que pretende realizar, assim a tarefa aparece no card referente aos dias escolhidos.",
        linkVideo : "https://www.youtube.com/watch?v=fCGgK2GL0us",
        linkCodigo : "https://github.com/vxt0r/lista-tarefas-dias"
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
    }
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