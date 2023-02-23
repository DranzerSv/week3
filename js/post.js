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
      div.innerHTML = `<a href="details.html?id=${newest[item]['id']}">
      <span>name  ${newest[item]['title']}</span>
      <h1>date ${newest[item]['createDate']}</h1>
  
      </a>`;
      container.appendChild(div);
    }
  }
  renderOldPosts(container) {
    const oldest = this.sortPosts(this.data);

    for (let item = 3; item < this.data.length; item++) {
      const div = document.createElement('div');
      div.innerHTML = `
      <a href="details.html?id=${oldest[item]['id']}">
      <span>name  ${oldest[item]['title']}</span>
      <h1>date ${oldest[item]['createDate']}</h1>
      </a>`;
      container.appendChild(div);
    }
  }
  renderSinglePost(container) {
    const single = this.data;
    const div = document.createElement('div');
    div.innerHTML = `
    <div >
    <span>name  ${single['title']}</span>
    <h1>date ${single['createDate']}</h1>
    </div>
    `;
    container.appendChild(div);
  }
}
