class connection {
  constructor(url) {
    this.url = url;
  }

  async getPosts(id) {
    const request = this.url + 'posts' + (id ? `/${id}` : '');
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(request, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async getTags() {
    const request = this.url + 'tags';
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(request, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async getComments() {
    const request = this.url + 'comments';
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(request, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async getUsers() {
    const request = this.url + 'users';
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(request, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
let query = new connection('https://harmless-polydactyl-hiss.glitch.me/');
