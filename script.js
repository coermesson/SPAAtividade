// Definindo as páginas (rotas)
const routes = {
    '/': `
    <h1>Home</h1>
    <p>Bem-vindo à página inicial do Aniverse!</p>
  `,
    '/sobre': `
    <h1>Sobre</h1>
    <p>Somos apaixonados por animes e tecnologia.</p>
  `,
    '/servicos': `
    <h1>Serviços</h1>
    <p>Oferecemos recomendações personalizadas, listas de animes e muito mais!</p>
  `,
    '/contato': `
    <h1>Contato</h1>
    <p>Entre em contato: contato@aniverse.com</p>
  `,
    '/login': `
    <h1>Login</h1>
    <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha">
        <button type="submit">Login</button>
    </form>
    <p>Entre em contato: contato@aniverse.com</p>
  `,
    '/cadastro': `
    <h1>Cadastro</h1>
    <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha">
        <button type="submit">Cadastrar</button>
    </form>
    <p>Entre em contato: contato@aniverse.com</p>
  `

};

// Elemento onde o conteúdo será exibido
const contentElement = document.getElementById('content');

// Função para renderizar a página com base na rota
function renderPage() {
    // Pega o hash da URL (ex: "#/sobre" → "/sobre")
    const hash = window.location.hash;
    const route = hash.replace('#', '') || '/'; // Se não houver hash, usa "/"

    // Mostra o conteúdo da rota ou uma página 404
    contentElement.innerHTML = routes[route] || '<h1>404 - Página não encontrada</h1>';
}

// Intercepta cliques nos links de navegação
document.getElementById('dynamicMenus').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault(); // Impede o comportamento padrão (não recarrega)
        const href = event.target.getAttribute('href');
        // Atualiza a URL sem recarregar
        history.pushState(null, '', href);
        // Renderiza a nova página
        renderPage();
    }
});



// Suporte ao botão "Voltar" do navegador
window.addEventListener('popstate', renderPage);

// Renderiza a página inicial ao carregar
renderPage();