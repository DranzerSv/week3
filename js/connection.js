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
}
let query = new connection('https://harmless-polydactyl-hiss.glitch.me/');
