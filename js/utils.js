function renderElement(element, container, className) {
  const div = document.createElement('div');
  div.className = className;
  div.innerHTML = element;
  container.appendChild(div);
}
