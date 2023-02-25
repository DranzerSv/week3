const newPostsContainer = document.querySelector('#newPosts');
const oldPostcontainer = document.querySelector('#oldPosts');

query.getElements('posts').then((data) => {
  const allCharacters = new post(data);

  allCharacters.renderNewPosts(newPostsContainer);

  allCharacters.renderOldPosts(oldPostcontainer);
});
