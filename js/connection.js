class connection {
  constructor(url) {
    this.url = url;
  }

  async getPosts() {
    const request = this.url + 'posts';
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
