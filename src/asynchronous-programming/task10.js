/* eslint-disable no-console */

export default class Musician {
  constructor(albumsUrl) {
    this.albumsUrl = albumsUrl;
  }

  async getAlbums() {
    const response = await fetch(this.albumsUrl);
    return response.json();
  }
}
