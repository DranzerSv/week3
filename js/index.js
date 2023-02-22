let query = new connection('https://harmless-polydactyl-hiss.glitch.me/');

//returns a promise in console.log

query.getPosts().then((data) => {
  //dibujar primeros 3 posts
  const poste = new post(data);

  poste.renderLastestPosts();
  //dibujar resto de posts
});
