document.addEventListener('DOMContentLoaded', () => {
    // Cargar el encabezado
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', html);
        });

    // Cargar el pie de página
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('body').insertAdjacentHTML('beforeend', html);
        });
});