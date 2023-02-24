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
      div.className = `newCard_` + item;
      div.innerHTML = `<a href="details.html?id=${newest[item]['id']}" >
      <div class='cardHeader'>
      <img src=${newest[item]['image']}>
      <div class='headerText'>
      <p class='newText' >New Character</p>
      <p>date:${newest[item]['createDate']}</p>
      </div>
      </div>
      <div class='textContainer'>

      <p>${newest[item]['body'].slice(0, 120) + '...'}</p>
      </div>
      </a>`;
      container.appendChild(div);
    }
  }
  renderOldPosts(container) {
    const oldest = this.sortPosts(this.data);

    for (let item = 3; item < this.data.length; item++) {
      const div = document.createElement('div');
      div.className = `oldCard`;
      div.innerHTML = `<a href="details.html?id=${oldest[item]['id']}" >
      <div class='cardHeader'>
      <img src=${oldest[item]['image']}>
      <div class='headerText'>
    
      <p>Date : ${oldest[item]['createDate']}</p>
      </div>
      </div>
      <div class='textContainer'>

      <p>${oldest[item]['body'].slice(0, 120) + '...'}</p>
      </div>
      </a>`;
      container.appendChild(div);
    }
  }
  renderSinglePost(container) {
    const single = this.data;
    const div = document.createElement('div');
    div.className = 'card';
    div.id = 'card';
    div.innerHTML = `
   
    <img src=${single['image']}>
    <div id='cardHeader' class='cardHeader'>
    <div class='date'>Date : ${single['createDate']}</div>
    </div>
    <div class='textContent'>
    ${single['body']}
    </div>
    `;
    container.appendChild(div);
  }
}
