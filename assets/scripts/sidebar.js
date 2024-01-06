
// sidebar.js

document.addEventListener("DOMContentLoaded", function () {
  // Criação do Sidebar
  const sidebar = document.createElement("aside");
  sidebar.classList.add("sidebar");

  //Link para o Estilo de Fonte (Google Fonts)
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = "https://fonts.googleapis.com/css2?family=Material+Icons+Outlined";
  document.head.appendChild(linkElement);

  // Elemento header
  const header = document.createElement("header");
  header.classList.add("sidebar-header");

  const logoImg = document.createElement("img");
  logoImg.classList.add("logo-img");
  logoImg.src =
    "https://s2-g1.glbimg.com/gZrnzQkY70EZ2ZP0zwB689bUAak=/0x0:5184x3456/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/e/EYKMBXR72tNdkUAgmZzQ/azul-caneta.jpg";

  logoImg.addEventListener("click", function () {
    window.location.href = "main.html";
  });
  header.appendChild(logoImg);
  sidebar.appendChild(header);

  const nav = document.createElement("nav");

  const buttons = [
    { id: "clientes", text: "Clientes", icon: "groups", onclick: "clientes" },
    { id: "products", text: "Produtos", icon: "outbox", onclick: "products" },
    { id: "sales", text: "Vendas", icon: "paid", onclick: "sales" },
  ];

  buttons.forEach((buttonInfo) => {
    const button = document.createElement("button");
    button.id = buttonInfo.id;
    button.addEventListener("click", () => window[buttonInfo.onclick]());

    const span = document.createElement("span");

    const icon = document.createElement("i");
    icon.classList.add("material-icons-outlined");
    icon.textContent = buttonInfo.icon;

    const spanText = document.createElement("span");
    spanText.textContent = buttonInfo.text;

    span.appendChild(icon);
    span.appendChild(spanText);

    button.appendChild(span);
    nav.appendChild(button);
  });

  sidebar.appendChild(nav);

  // Inserção do sidebar no início do body
  document.body.insertBefore(sidebar, document.body.firstChild);
});
// Alternar a Barra Lateral
function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('collapsed');
}

//rotas do sidebar
function clientes() {
  window.location.href = "clients.html";
}

function products() {
  window.location.href = "products.html";
}

function sales() {
  window.location.href = "sales.html";
}