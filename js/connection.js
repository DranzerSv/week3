class connection {
  constructor(url) {
    this.url = url;
  }

  async getElements(element, id) {
    const request = this.url + element + (id ? `/${id}` : '');
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(request, requestOptions);
    const data = await response.json();
    return data;
  }
  async createPost() {
    const url = 'https://harmless-polydactyl-hiss.glitch.me/posts/';
    const post = {
      title: 'curlesca',
      subTitle: 'okarina',
      image: 'https://i.ytimg.com/vi/INk1W8OujQI/maxresdefault.jpg',
      body: 'Banshee is an all-around fighter whodfsdfsdfsdqwuu uuwto respond to any situation. In Super Smash Bros. Ultimate, he shows up in his Wedding tux and his Builder outfit, and Cappy even makes an appearance!',
      createDate: '2018/06/18',
      likes: 12,
      author: 3,
      tags: [1, 6],
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log('Respuesta:', data);
  }
}
let query = new connection('https://harmless-polydactyl-hiss.glitch.me/');
