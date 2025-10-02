// SPA com persistência

const paginas = {
  home: "<h2>Home</h2><p>Bem-vindo à Home.</p>",
  produtos: "<h2>Produtos</h2><ul><li>Produto 1</li><li>Produto 2</li></ul>",
  contato: "<h2>Contato</h2><p>Envie sua mensagem.</p>"
};

const conteudo = document.getElementById("conteudo");


// Criar containers de página e manter na memória
const containers = {};
for (const pagina in paginas) {
  const div = document.createElement("div");
  div.id = "pagina-" + pagina;
  div.innerHTML = paginas[pagina];
  div.style.display = "none"; // esconder por padrão
  conteudo.appendChild(div);
  containers[pagina] = div;
}


let paginaAtual = "home";

// Função para trocar de página
function carregarPagina(p) {
  // Esconde todas
  for (const nome in containers) {
    containers[nome].style.display = "none";
  }
  // Mostra a página selecionada
  containers[p].style.display = "block";
  paginaAtual = p;
}

// Inicializa na home
carregarPagina("home");

// Eventos dos botões de navegação
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => carregarPagina(btn.dataset.page));
});

// Criar componente dinâmico
document.getElementById("add").addEventListener("click", () => {
  const tag = document.getElementById("tag").value || "p";
  const el = document.createElement(tag);
  
  // Atributos
  const idVal = document.getElementById("idAttr").value;
  const classVal = document.getElementById("classAttr").value;
  if (idVal) el.id = idVal;
  if (classVal) el.className = classVal;
  if (!idVal && !classVal) el.className = "dynamic-component";

  // Estilos
  const color = document.getElementById("color").value;
  const size = document.getElementById("fontSize").value;
  if (color) el.style.color = color;
  if (size) el.style.fontSize = size + "px";

  // Conteúdo
  el.textContent = document.getElementById("content").value || "";


  // Adiciona ao container da página atual
  containers[paginaAtual].appendChild(el);

   // Limpar campos
  document.getElementById("content").value = "";
  document.getElementById("idAttr").value = "";
  document.getElementById("classAttr").value = "";
  document.getElementById("color").value = "";
  document.getElementById("fontSize").value = "";
  document.getElementById("tag").value = "p";
});

// Editar componente dinâmico
// document.querySelectorAll("#edit").forEach(btn => {
//   btn.addEventListener("click", () => {
//     const el = document.getElementById("editTarget").value ? document.getElementById(document.getElementById("editTarget").value) : null;
//     if (el && containers[paginaAtual].contains(el)) {
//       // Atualiza atributos
//       el.textContent = document.getElementById("editContent").value || el.textContent;
//       const id = document.getElementById("editId").value;
//       const className = document.getElementById("editClass").value;
//       if (id) el.id = id;
//       if (className) el.className = className;
//       // Atualiza estilos
//       const color = document.getElementById("editColor").value;
//       const size = document.getElementById("editFontSize").value;
//       if (color) el.style.color = color;
//       if (size) el.style.fontSize = size + "px";
//       // Limpar campos
//       document.getElementById("editContent").value = "";
//       document.getElementById("editColor").value = "";
//       document.getElementById("editFontSize").value = "";
//       document.getElementById("editTarget").value = "";
//     } else {
//       alert("Elemento não encontrado para edição.");
//     }
//   });
// });


// Limpar componentes dinâmicos
document.getElementById("clear").addEventListener("click", () => {
  const container = containers[paginaAtual];
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
});

