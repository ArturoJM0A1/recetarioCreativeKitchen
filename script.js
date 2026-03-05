$(document).ready(function () {
    var fondo = $(".img1, .img2, .img3, .img4");
    setTimeout(function () {
        fondo.css("opacity", 1);
    }, 10);
});


$('#opcionesdelMenu').on('click', function () {
    var cerrarMenu = $('#cerrarMenu');
    cerrarMenu.css('display', 'flex');

    var opcionesdelMenu = $('#opcionesdelMenu');
    opcionesdelMenu.css('display', 'none');

    var estadoOption = $('.estadoOption');
    estadoOption.css('display', 'flex');
});


$('#cerrarMenu').on('click', function () {
    var cerrarMenu = $('#cerrarMenu');
    cerrarMenu.css('display', 'none');

    var opcionesdelMenu = $('#opcionesdelMenu');
    opcionesdelMenu.css('display', 'flex');

    var estadoOption = $('.estadoOption');
    estadoOption.css('display', 'none');
});




function irInicio() {
    var seccioninicio = document.getElementById('seccioninicio');
    seccioninicio.scrollIntoView({ behavior: 'smooth' });
}

function irASeccion1() {
    var seccion1 = document.getElementById('seccion1');
    seccion1.scrollIntoView({ behavior: 'smooth' });
}

function irASeccion2() {
    var seccion2 = document.getElementById('seccion2');
    seccion2.scrollIntoView({ behavior: 'smooth' });
}

function irASeccion3() {
    var seccion3 = document.getElementById('seccion3');
    seccion3.scrollIntoView({ behavior: 'smooth' });
}

function iraContacto() {
    var contacto = document.getElementById('contacto');
    contacto.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar BaguetteBox para todas las imágenes
    baguetteBox.run('.tz-gallery');

    // Desactivar la funcionalidad de pantalla completa para imágenes específicas
    var imagesToDisable = document.querySelectorAll('.tz-gallery .lightbox.no-lightbox');
    imagesToDisable.forEach(function (image) {
      image.removeEventListener('click', baguetteBox.show);
    });
  });





var verReceta = document.querySelectorAll('.verReceta');

verReceta.forEach(function(boton) {
  boton.addEventListener('click', function() {
    // Crear el filtro y aplicarlo al fondo del body
    var bodyFiltro = document.createElement('div');
    bodyFiltro.style.position = 'fixed';
    bodyFiltro.style.top = '0';
    bodyFiltro.style.left = '0';
    bodyFiltro.style.width = '100%';
    bodyFiltro.style.height = '100%';
    bodyFiltro.style.backgroundColor = 'rgba(1,1,1,0.6)';
    bodyFiltro.style.zIndex = '10';
    document.body.appendChild(bodyFiltro);

    // Crear la alerta personalizada
    var alertaPersonalizada = document.createElement('div');
    alertaPersonalizada.style.height = '99vh';
    alertaPersonalizada.style.width = '60vw';
    alertaPersonalizada.style.overflow = 'auto';
    alertaPersonalizada.style.padding = '20px';
    alertaPersonalizada.style.backgroundColor = '#f0f0f0';
    alertaPersonalizada.style.border = '2px solid #333';
    alertaPersonalizada.style.borderRadius = '10px';
    alertaPersonalizada.style.position = 'fixed';
    alertaPersonalizada.style.top = '50%';
    alertaPersonalizada.style.left = '50%';
    alertaPersonalizada.style.transform = 'translate(-50%, -50%)';
    alertaPersonalizada.style.zIndex = '20';
    alertaPersonalizada.style.textAlign = 'center';

    var botonCerrar = document.createElement('button');
    botonCerrar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    botonCerrar.style.fontSize = 'var(--fonticons)';
    botonCerrar.style.position = 'absolute';
    botonCerrar.style.zIndex = '1000';
    botonCerrar.style.top = '10px';
    botonCerrar.style.right = '10px';
    botonCerrar.style.padding = '1px 5px';
    botonCerrar.style.backgroundColor = '#333';
    botonCerrar.style.color = '#fff';
    botonCerrar.style.border = 'none';
    botonCerrar.style.borderRadius = '50%';
    botonCerrar.style.cursor = 'pointer';
    botonCerrar.style.textAlign = 'center';
    botonCerrar.style.lineHeight = botonCerrar.offsetHeight + 'px';
    botonCerrar.style.fontWeight = 'bolder';
    botonCerrar.addEventListener('click', function() {
      document.body.removeChild(bodyFiltro);
      document.body.removeChild(alertaPersonalizada);
    });

    alertaPersonalizada.innerHTML = '<h2>Receta de Camarones a la Diabla</h2><img src="images/recetasTarjetas/camaronesaladiabla.jpg" alt="Imagen de la receta" width="200" height="200"><p>Ingredientes:<br>- 1 libra de camarones grandes, limpios y pelados<br>- 1 taza de salsa diabla<br>- 3 dientes de ajo, picados<br>- 1/4 taza de cilantro fresco, picado<br>- Jugo de 1 limón<br>- Sal y pimienta al gusto</p><p>Instrucciones:<br>1. En un tazón, mezcla los camarones con la salsa diabla y deja marinar durante 30 minutos.<br>2. Calienta una sartén grande a fuego medio y agrega los camarones marinados con ajo y cilantro.<br>3. Cocina los camarones hasta que estén rosados y bien cocidos, aproximadamente 4 minutos por cada lado.<br>4. Exprime el jugo de limón sobre los camarones y sazona con sal y pimienta al gusto.<br>5. Sirve los camarones a la diabla sobre arroz o con tortillas de maíz.</p><p>¡Disfruta de esta deliciosa receta de camarones a la diabla!</p>';

    alertaPersonalizada.appendChild(botonCerrar);

    document.body.appendChild(alertaPersonalizada);
  });
});
