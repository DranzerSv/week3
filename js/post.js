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
  renderLastestPosts() {
    const lastest = this.sortPosts(this.data);

    for (let item = 0; item < 3; item++) {
      const div = document.createElement('div');
      div.innerHTML = `
      <span>name  ${lastest[item]['title']}</span>
      <h1>date ${lastest[item]['createDate']}</h1>`;
      document.body.appendChild(div);
    }
  }
}
