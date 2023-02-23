class post {
  constructor(data) {
    this.data = data;
  }
  sortPosts(data) {
    const sortedPosts = data.sort(
      (a, b) => new Date(b['createDate']) - new Date(a['createDate'])
    );
    return sortedPosts;
  }
  renderNewPosts(container) {
    const newest = this.sortPosts(this.data);

    for (let item = 0; item < 3; item++) {
      const div = document.createElement('div');
      div.innerHTML = `
      <span>name  ${newest[item]['title']}</span>
      <h1>date ${newest[item]['createDate']}</h1>`;
      container.appendChild(div);
    }
  }
  renderOldPosts(container) {
    const oldest = this.sortPosts(this.data);

    for (let item = 3; item < this.data.length; item++) {
      const div = document.createElement('div');
      div.innerHTML = `
      <span>name  ${oldest[item]['title']}</span>
      <h1>date ${oldest[item]['createDate']}</h1>`;
      container.appendChild(div);
    }
  }
}
