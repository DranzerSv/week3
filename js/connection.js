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
  async createPost(post) {
    const url = 'https://harmless-polydactyl-hiss.glitch.me/posts/';

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
  async deletePost(id) {
    const url = 'https://harmless-polydactyl-hiss.glitch.me/posts/' + id;
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log('Respuesta:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
let query = new connection('https://harmless-polydactyl-hiss.glitch.me/');
