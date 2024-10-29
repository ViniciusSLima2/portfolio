class Header extends HTMLElement {
    constructor() {
        super(); // Chama o construtor da classe HTMLElement

        // Cria um shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style')
        style.textContent = `
        .header-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 40px;

    & .links-container {
        display: flex;
        gap: 20px;
        align-items: center;

        a {
            text-decoration: none;
            font-size: 17px;
            color: #000;
            font-weight: 600;
            font-family: Muli;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #484848;
        }

        #home {
            background-color: rgba(80, 99, 8, 0.2);
            padding: 8px 25px;
            border-radius: 5px;
        }
    }

    & .menu-hamburguer {
        display: none;
    }
}

@media (max-width: 767px) {
    .nav-wrapper {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100vh;
        z-index: 999;
        display: flex;
        background-color: #FFF;
        padding: 30px 0;
        transition: left 0.4s ease;
    }

    .links-container {
        flex-direction: column;
        align-items: center;
        background-color: #FFF;
        width: 100%;
    }


    .header-container {
        padding: 30px;

        & .menu-hamburguer {
            position: absolute;
            right: -80px;
            top: 0px;
            display: block;
            width: 25px;
            height: 3px;
            background-color: rgba(80, 99, 8, 1);
            border-radius: 5px;
            position: relative;

            &::before {
                content: "";
                width: 25px;
                height: 3px;
                background-color: rgba(80, 99, 8, 1);
                border-radius: 5px;
                position: absolute;
                top: -8px;
                left: 0;
            }

            &::after {
                content: "";
                width: 25px;
                height: 3px;
                background-color: rgba(80, 99, 8, 1);
                border-radius: 5px;
                position: absolute;
                top: 8px;
                left: 0;
            }
        }
    }

    .header-container.active {
        .menu-hamburguer {
            &::before {
                display: block;
                transform: translateY(8px) rotate(45deg);
            }

            &::after {
                display: block;
                transform: translateY(-8px) rotate(-45deg);
            }

            background-color: transparent;
            right: 40px;
            top: 10px;
        }

        .nav-wrapper {
            left: 0px;
        }
    }
}`
        // Estrutura do HTML
        const header = document.createElement('header');
        header.setAttribute('class', 'header-container');

        header.innerHTML = `
            <div class="nav-wrapper">
                <nav class="links-container">
                    <a href="home" id="home">Home</a>
                    <a href="formacao" id="formacao">Formação</a>
                    <a href="atuacao" id="atuacao">Atuação Profissional</a>
                    <a href="contato" id="contato">Contato</a>
                    <a href="portfolio" id="portfolio">Portfolio</a>
                </nav>
        
                <div class="menu-hamburguer"></div>
            </div>
        `;

        // Anexando o estilo e o HTML ao shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(header);

        const menuHamburguerRef = header.querySelector(".menu-hamburguer");

        menuHamburguerRef.addEventListener("click", () => {
            header.classList.toggle("active");
        })
    }
}

// Registrando o Web Component
customElements.define('header-component', Header);
