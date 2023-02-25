const id = new URLSearchParams(window.location.search).get('id');
const cardContainer = document.querySelector('#cardContainer');
const postCommentsContainer = document.querySelector('#postComments');
const deleteButton = document.querySelector('#delete');

query.getElements('posts', id).then((data) => {
  //render a single character

  const character = new post(data);
  character.renderSinglePost(cardContainer);

  //rendered in post.js
  const cardHeader = document.querySelector('#cardHeader');

  const card = document.querySelector('#card');

  const tagsContainer = document.createElement('div');
  tagsContainer.className = 'tagsContainer';

  query.getElements('authors').then((authors) => {
    const index = data['author'] - 1;
    const fullName =
      'Author : ' + authors[index]['name'] + ' ' + authors[index]['lastName'];
    renderElement(fullName, cardHeader, 'author');
  });

  //--------------------------------------

  const tags = data['tags'];

  query.getElements('tags').then((data) => {
    for (let item in tags) {
      const tagName = data[tags[item] - 1]['name'];

      renderElement(tagName, tagsContainer, 'tag');
    }
    card.appendChild(tagsContainer);
  });
  query.getElements('comments').then((data) => {
    //render cooments of this post

    for (let item in data) {
      if (parseInt(id) === data[item]['postId']) {
        const commentContainer = document.createElement('div');

        commentContainer.className = 'commentContainer';

        const commentContent = data[item]['comment'];

        postCommentsContainer.appendChild(commentContainer);

        query.getElements('users').then((users) => {
          const content = users[data[item]['user'] - 1]['name'] + ' says:';
          renderElement(content, commentContainer, 'user');
          renderElement(commentContent, commentContainer, 'comment');
        });
      }
    }
  });
});
deleteButton.addEventListener('click', () => {
  query.deletePost(id);
});
