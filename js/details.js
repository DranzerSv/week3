const id = new URLSearchParams(window.location.search).get('id');
const cardContainer = document.querySelector('#cardContainer');

query.getPosts(id).then((data) => {
  //render a single character
  const character = new post(data);

  character.renderSinglePost(cardContainer);

  const tags = data['tags'];

  query.getTags().then((data) => {
    for (item in tags) {
      const tagName = data[tags[item] - 1]['name'];
      console.log(tags[item] - 1);

      renderTag(tagName, cardContainer);
    }
  });
});
