function mostrarDetalles(id) {
  const seccion = document.getElementById(id);

  if (seccion.style.display === 'block') {
    seccion.style.display = 'none';
  } else {
    const detalles = document.getElementsByClassName('detalles');
    for (let i = 0; i < detalles.length; i++) {
      detalles[i].style.display = 'none';
    }
    seccion.style.display = 'block';
  }
}
