const modalContainerRef = document.querySelector("body > main > section > div.modal-container")

let isModalOpen = false;
function changeModalState(tecName){
    console.log("cl")
    if(isModalOpen){
        isModalOpen = false;
        modalContainerRef.style.display = "none";
    }else{
        isModalOpen = true;
        modalContainerRef.querySelector(".tec-info img").src = "/src/img/" + tecnologiesInfo[tecName]["imgPath"]
        modalContainerRef.querySelector(".tec-info .tec-name").textContent = tecnologiesInfo[tecName]["name"]
        modalContainerRef.querySelector(".info-container .tec-description").textContent = tecnologiesInfo[tecName]["description"]
        modalContainerRef.style.display = "block";
    }
}

function closeModal(){
    modalContainerRef.style.display = "none";
    isModalOpen = false;
}

const tecnologiesInfo = {
    "react" : {
        "imgPath" : "react-logo.png",
        "name" : "ReactJS",
        "description" : "ReactJS é uma biblioteca JavaScript para criar interfaces de usuário dinâmicas e reutilizáveis. Ele utiliza componentes para estruturar UIs, o Virtual DOM para atualizações rápidas e eficientes, e JSX para misturar HTML com JavaScript. Com fluxo de dados unidirecional, React facilita a construção de aplicações modernas e escaláveis."
    },
    "next" : {
        "imgPath" : "next-logo.svg",
        "name" : "NextJS",
        "description" : "Next.js é um framework React que permite a criação de aplicações web com renderização híbrida (estática e servidor), suporte a rotas automáticas, e otimização de desempenho. Ele facilita SEO, oferece páginas dinâmicas, e permite o uso de APIs integradas. Ideal para aplicações modernas e escaláveis."
    },
    "tanstack" : {
        "imgPath" : "tanstack-logo.png",
        "name" : "TanStack",
        "description" : "TanStack é uma coleção de bibliotecas JavaScript usadas para gerenciamento de dados e estado em aplicações web. Entre elas estão o React Query (para fetching e caching de dados), React Table (para tabelas altamente personalizáveis), e React Router (para roteamento). Essas ferramentas otimizam a gestão de dados, navegação e tabelas complexas em interfaces React, melhorando a eficiência e organização do código."
    },
    "preact" : {
        "imgPath" : "preactjs-logo.png",
        "name" : "Signals (PreactJS)",
        "description" : "Preact Signals é um sistema reativo de estado que atualiza automaticamente a interface quando o valor muda, sem re-renderizações desnecessárias. Ele simplifica o gerenciamento de estado e melhora o desempenho, tornando as mudanças de dados mais eficientes e a API fácil de usar, sem a complexidade dos hooks tradicionais."
    },
    "typescript" : {
        "imgPath" : "typescript-logo.png",
        "name" : "Typescript",
        "description" : "TypeScript é uma linguagem de programação da Microsoft que é um superconjunto do JavaScript, adicionando tipagem estática e recursos avançados. Ela permite a definição de tipos para variáveis e funções, melhorando a segurança e a manutenção do código. TypeScript é transpilado para JavaScript, garantindo compatibilidade com qualquer ambiente que suporte JS. É amplamente usado em projetos modernos para desenvolvimento mais robusto e escalável."
    },
    "angular" : {
        "imgPath" : "angular-logo.png",
        "name" : "Angular",
        "description" : "Angular é um framework de desenvolvimento web mantido pelo Google, utilizado para criar aplicações de página única (SPA) com uma abordagem modular e baseada em componentes. Ele permite o desenvolvimento de interfaces dinâmicas e responsivas, integrando facilmente com APIs e serviços. Com recursos como data binding bidirecional, injeção de dependência e roteamento, Angular proporciona uma estrutura sólida para construir aplicações escaláveis e de alta performance. Além disso, sua arquitetura baseada em TypeScript oferece tipagem estática, melhorando a legibilidade e a manutenção do código."
    },
    "angular-material" : {
        "imgPath" : "angular-material-logo.png",
        "name" : "Angular Material",
        "description" : "Angular Material é uma biblioteca de componentes UI para Angular que implementa as diretrizes do Material Design. Ela oferece uma variedade de componentes prontos, como botões, formulários e tabelas, com estilos responsivos e acessíveis. A integração com aplicações Angular é simples, e os componentes podem ser facilmente personalizados, permitindo a criação de interfaces modernas e funcionais de maneira rápida e eficiente."
    },
}