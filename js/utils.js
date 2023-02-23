function renderTag(tag, container) {
  const div = document.createElement('div');
  div.className = 'tag';
  div.innerHTML = tag;
  container.appendChild(div);
}
