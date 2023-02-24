const id = new URLSearchParams(window.location.search).get('id');
const cardContainer = document.querySelector('#cardContainer');
const postCommentsContainer = document.querySelector('#postComments');

query.getPosts(id).then((data) => {
  //render a single character
  const character = new post(data);

  query.getAuthors().then((authors) => {
    const index = data['author'] - 1;
    const fullName = authors[index]['name'] + ' ' + authors[index]['lastName'];
    renderElement(fullName, cardContainer, 'author');
  });
  character.renderSinglePost(cardContainer);

  //--------------------------------------

  const tags = data['tags'];

  query.getTags().then((data) => {
    for (let item in tags) {
      const tagName = data[tags[item] - 1]['name'];

      renderElement(tagName, cardContainer, 'tag');
    }
  });
  query.getComments().then((data) => {
    //render cooments of this post

    for (let item in data) {
      if (parseInt(id) === data[item]['postId']) {
        const commentContainer = document.createElement('div');

        commentContainer.className = 'commentContainer';

        const commentContent = data[item]['comment'];

        renderElement(commentContent, commentContainer, 'comment');

        postCommentsContainer.appendChild(commentContainer);

        query.getUsers().then((users) => {
          const content = users[data[item]['user'] - 1]['name'];
          renderElement(content, commentContainer, 'user');
        });
      }
    }
  });
});
