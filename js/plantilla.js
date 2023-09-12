const header = document.querySelector("header")
const footer = document.querySelector("footer")
const chatwp = document.querySelector("#chatwp")


header.innerHTML = `
<div class="header container">
<!-- Sección del logotipo de mi pagina -->
<img class="logotipo1" src="image/Logo_isoNegativo.webp" alt="logotipo" width="762" height="291">
<!-- Boton abrir -->
<button id="abrir" class="abrir-menu">                      
    <img src="image/menu.svg" alt="abrir menu" width="150" height="150">
</button>
<!-- Sección del menu -->
<div id="menu" class="menu">
    <div class="header2">
        <!-- ruta del logotipo -->
        <img class="logotipo2" src="image/Logo_isoNegativo.webp" alt="logotipo" width="762" height="291">
        <!-- Boton cerrar -->
        <button id="cerrar" class="cerrar-menu">
            <img src="image/cerrar.svg" alt="cerrar menu" width="150" height="150">
        </button>
    </div>
    <!-- Lista de menu -->
    <nav class="nav">
        <ul class="nav-list">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="about.html">Equipo</a></li>
            <li><a href="https://www.behance.net/jhenrryaranibar" target="_blank">Proyectos</a></li>
        </ul>
        <!-- Mi boton de contacto -->
        <a href="form.html" class="bt-contacto" id="bt-contacto">
            <button type="button" class="btn1">Contactar</button>
        </a>
    </nav>
</div>
</div>
`;

footer.innerHTML = `
    <div class="copy container">
        <p>Copyright &copy; 2023 Creativo 12 Estudio S.A.C. | Todos los derechos reservados</p>
    </div>
`;

chatwp.innerHTML = `
    <div class="whatsapp" id="whatsapp" >
        <a href="https://wa.link/tt27j2" target="_blank">
            <img src="image/whatsapp_logo-01.svg" alt="Boton de Whatsapp" width="150" height="150">
        </a>
    </div>
`;