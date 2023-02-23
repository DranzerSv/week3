const id = new URLSearchParams(window.location.search).get('id');
const cardContainer = document.querySelector('#cardContainer');

query.getPosts(id).then((data) => {
  //render a single character
  const character = new post(data);

  character.renderSinglePost(cardContainer);
});
