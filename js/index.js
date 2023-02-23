let query = new connection('https://harmless-polydactyl-hiss.glitch.me/');
const newPostsContainer = document.querySelector('#newPosts');
const oldPostcontainer = document.querySelector('#oldPosts');

//returns a promise in console.log

query.getPosts().then((data) => {
  //dibujar primeros 3 posts
  const character = new post(data);

  character.renderNewPosts(newPostsContainer);
  //dibujar resto de posts
  character.renderOldPosts(oldPostcontainer);
});
