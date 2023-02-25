function renderElement(element, container, className) {
  const div = document.createElement('div');
  div.className = className;
  div.innerHTML = element;
  container.appendChild(div);
}

function dateNow() {
  // Crea un objeto Date para la fecha actual
  const date = new Date();

  // Crea una cadena de texto con la fecha en el formato deseado
  const dateString = date.toISOString().substring(0, 10).replace(/-/g, '/');

  return dateString;
}
