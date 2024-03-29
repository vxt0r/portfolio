const projetos = [
    {
        titulo: "Carrinho de Compras ",
        tecnologias: "Laravel e Bootstrap",
        descricao: "A aplicação simula um e-commerce, o usuário faz um cadastro e login, podendo adicionar ou remover os produtos no seu carrinho. Com tela de admin que permite editar os produtos.",
        linkVideo : "https://www.youtube.com/watch?v=9t7FxTqH_CI",
        linkCodigo : "https://github.com/vxt0r/carrinho-compras"
    },
    {
        titulo: "Gerador de Relatório",
        tecnologias: "PHP, MySQL, HTML e CSS",
        descricao: "O usuário pode enviar uma planilha do Excel, dentro de certos padrões, e receber um relatório em PDF sobre a planilha enviada.",
        linkVideo : "https://youtu.be/LlCfcsOQoxA",
        linkCodigo : "https://github.com/vxt0r/relatorio"
    },
    {
        titulo: "Banco Digital ",
        tecnologias: "Laravel e Bootstrap",
        descricao: "A aplicação simula uma conta em um banco digital, o usuário ao criar um cadastro recebe também uma conta, onde pode realizar saques, depósitos e outras ações.",
        linkVideo : "https://www.youtube.com/watch?v=BpGuW1rblHQ",
        linkCodigo : "https://github.com/vxt0r/banco-digital"
    },
    {
        titulo: "Gerenciador de consultas",
        tecnologias: "PHP, MySQL, HTML e CSS",
        descricao: "A aplicação simula um sistema de controle de consultas de um médico, com registro de consulta e envio de email aos pacientes.",
        linkVideo : "https://youtu.be/qY9bIYvgSFw",
        linkCodigo : "https://github.com/vxt0r/consultas"
    },
    {
        titulo: "Encurtador de URLs",
        tecnologias: "PHP, MySQL, HTML e CSS",
        descricao: "Transforme uma URL longa em outra mais curta.",
        linkVideo : "https://www.youtube.com/watch?v=cR7Fzwg5Nng",
        linkCodigo : "https://github.com/vxt0r/encurtador"
    },
    {
        titulo: "Álbum de Figurinhas Digital",
        tecnologias: "Laravel",
        descricao: "O usuário pode inserir, remover e atualizar informações e imagens sobre algum jogador da NBA.",
        linkVideo: "https://www.youtube.com/watch?v=Mcgfb09kvHw",
        linkCodigo : "https://github.com/vxt0r/figurinhas-digital"
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
                <p>${projeto.titulo}</p>
                <p>${projeto.tecnologias}</p>
                <p><a href="${projeto.linkVideo}" target="_blank" rel="noopener noreferrer">Vídeo Demonstrativo</a></p>
                <p><a href="${projeto.linkCodigo}" target="_blank" rel="noopener noreferrer">Código</a></p>
            </div>

            <div class="descricao">
                <span>Descrição</span>
                <p class="texto-descricao">
                    ${projeto.descricao}
                </p>
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