const id = new URLSearchParams(window.location.search).get('id');
const cardContainer = document.querySelector('#cardContainer');
const postContainer = document.querySelector('#postComments');

query.getPosts(id).then((data) => {
  //render a single character
  const character = new post(data);

  character.renderSinglePost(cardContainer);

  const tags = data['tags'];

  query.getTags().then((data) => {
    for (item in tags) {
      const tagName = data[tags[item] - 1]['name'];

      renderElement(tagName, cardContainer);
    }
  });
  query.getComments().then((data) => {
    //render cooments of this post
    for (item in data) {
      if (parseInt(id) === data[item]['postId']) {
        const commentContent = data[item]['comment'];
        renderElement(commentContent, postContainer);
      }
    }
  });
});
