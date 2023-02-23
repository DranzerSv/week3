function renderElement(element, container) {
  const div = document.createElement('div');
  div.className = 'tag';
  div.innerHTML = element;
  container.appendChild(div);
}
