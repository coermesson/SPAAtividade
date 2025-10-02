// SPA
const paginas = {
  home: "<h2>Home</h2><p>Bem-vindo à Home.</p>",
  produtos: "<h2>Produtos</h2><ul><li>Produto 1</li><li>Produto 2</li></ul>",
  contato: "<h2>Contato</h2><p>Envie sua mensagem.</p>"
};

const conteudo = document.getElementById("conteudo");

// Troca de páginas
function carregarPagina(p) { conteudo.innerHTML = paginas[p]; }
carregarPagina("home");

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", ()=> carregarPagina(btn.dataset.page));
});

// Criar componente com atributos, estilos e conteúdo
document.getElementById("add").addEventListener("click", ()=>{
  const tag = document.getElementById("tag").value || "p";
  const el = document.createElement(tag);

  // Atributos simples
  const idVal = document.getElementById("idAttr").value;
  const classVal = document.getElementById("classAttr").value;
  if(idVal) el.id = idVal;
  if(classVal) el.className = classVal;

  // Estilos simples
  const color = document.getElementById("color").value;
  const size = document.getElementById("fontSize").value;
  if(color) el.style.color = color;
  if(size) el.style.fontSize = size + "px";

  // Conteúdo
  el.textContent = document.getElementById("content").value || "";

  // Inserir na área dinâmica
  conteudo.appendChild(el);

  // Limpar campos
  document.getElementById("content").value = "";
  document.getElementById("idAttr").value = "";
  document.getElementById("classAttr").value = "";
  document.getElementById("color").value = "";
  document.getElementById("fontSize").value = "";
});
