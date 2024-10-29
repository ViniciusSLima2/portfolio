class Footer extends HTMLElement {
    constructor() {
        super(); // Chama o construtor da classe HTMLElement

        // Cria um shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style')
        style.textContent = `.footer-container {
            width: 100%;
            background-color: rgba(80, 99, 8, 1);
            padding: 40px;
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
            <a href="" id="instagram-logo"><img src="../src/img/instagram-logo.svg" alt="Logo do Instagram"></a>
            <a href="" id="linkedin-logo"><img src="../src/img/linkedin-logo.svg" alt="Logo do LinkedIn"></a>
            <a href="" id="github-logo"><img src="../src/img/github-logo.svg" alt="Logo do Github"></a>
        `;

        // Anexando o estilo e o HTML ao shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(footer);
    }
}

// Registrando o Web Component
customElements.define('footer-component', Footer);
