const sidebar = document.querySelector("#sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar-link");
const toggleBtn = document.querySelector(".toggle-btn");

// Función para expandir/reducir el sidebar al pasar el mouse sobre él
sidebar.addEventListener("mouseenter", function () {
    sidebar.classList.add("expand");
});

sidebar.addEventListener("mouseleave", function () {
    sidebar.classList.remove("expand");
});

// Función para agregar clase "collapsed" al hacer clic en los enlaces del menú
sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const parentItem = link.parentElement;
        const isCollapsed = parentItem.classList.contains("collapsed");

        if (isCollapsed) {
            parentItem.classList.remove("collapsed");
        } else {
            parentItem.classList.add("collapsed");
        }
    });
});

// Toggle para el botón de hamburguesa
toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("expand");
});