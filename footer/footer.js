class Footer extends HTMLElement {
    constructor() {
        super(); // Chama o construtor da classe HTMLElement

        // Cria um shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style')
        style.textContent = `.footer-container {
            width: 100%;
            background-color: rgba(80, 99, 8, 1);
            padding: 40px 0 ;
            display: flex;
            justify-content: center;
            gap: 20px;

            & img {
                width: 40px;
                height: 40px;
            }
        }`
        // Estrutura do HTML
        const footer = document.createElement('footer');
        footer.setAttribute('class', 'footer-container');

        footer.innerHTML = `
            <a href="https://www.linkedin.com/in/vinicius-lima01/" id="linkedin-logo" target="_blank"><img src="../src/img/linkedin-logo.svg" alt="Logo do LinkedIn"></a>
            <a href="https://github.com/ViniciusSLima2" id="github-logo" target="_blank"><img src="../src/img/github-logo.svg" alt="Logo do Github" ></a>
        `;

        // Anexando o estilo e o HTML ao shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(footer);
    }
}

// Registrando o Web Component
customElements.define('footer-component', Footer);
