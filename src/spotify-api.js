"use strict";
const request = require("request-promise");
const { Base64 } = require("js-base64");

module.exports = class Spotify {
  constructor(details = {}) {
    this.details = details;
    if (!this.details.clientID)
      return console.error("You must specify a Spotify ID!");
    if (!this.details.clientSecret)
      return console.error("You must specify a Spotify Secret!");
    this.authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization: `Basic ${Base64.encode(
          this.details.clientID + ":" + this.details.clientSecret
        )}`,
      },
      form: {
        grant_type: "client_credentials",
      },
      json: true,
    };
  }

  async searchTrack(trackName, options = {}) {
    let APIOptions;
    await request.post(this.authOptions, async (error, response, body) => {
      if (error) return console.error(error);
      else if (response.statusCode === 429)
        return console.error("Too many requests!");
      else if (response.statusCode === 400)
        return console.error("Invalid arguments!");
      else if (options.limit && options.limit > 50)
        return console.error("The limit cannot be higher than 50!");
      var token = body.access_token;
      APIOptions = {
        url: `https://api.spotify.com/v1/search?q=${encodeURI(
          trackName
        )}&type=track&offset=0&limit=${options.limit || 1}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };
    });
    return await request.get(APIOptions).then((x) => x.tracks.items);
  }

  async searchPlaylist(playListName, options = {}) {
    let APIOptions;
    await request.post(this.authOptions, async (error, response, body) => {
      if (error) return console.error(error);
      else if (response.statusCode === 429)
        return console.error("Too many requests!");
      else if (response.statusCode === 400)
        return console.error("Invalid arguments!");
      else if (options.limit && options.limit > 50)
        return console.error("The limit cannot be higher than 50!");
      var token = body.access_token;
      APIOptions = {
        url: `https://api.spotify.com/v1/search?q=${encodeURI(
          playListName
        )}&type=playlist&offset=0&limit=${options.limit || 1}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };
    });
    return await request.get(APIOptions).then((x) => x.playlists.items);
  }

  async searchAlbum(albumName, options = {}) {
    let APIOptions;
    await request.post(this.authOptions, async (error, response, body) => {
      if (error) return console.error(error);
      else if (response.statusCode === 429)
        return console.error("Too many requests!");
      else if (response.statusCode === 400)
        return console.error("Invalid arguments!");
      else if (options.limit && options.limit > 50)
        return console.error("The limit cannot be higher than 50!");
      var token = body.access_token;
      APIOptions = {
        url: `https://api.spotify.com/v1/search?q=${encodeURI(
          albumName
        )}&type=album&offset=0&limit=${options.limit || 1}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };
    });
    return await request.get(APIOptions).then((x) => x.albums.items);
  }

  async searchArtist(artistName, options = {}) {
    let APIOptions;
    await request.post(this.authOptions, async (error, response, body) => {
      if (error) return console.error(error);
      else if (response.statusCode === 429)
        return console.error("Too many requests!");
      else if (response.statusCode === 400)
        return console.error("Invalid arguments!");
      else if (options.limit && options.limit > 50)
        return console.error("The limit cannot be higher than 50!");
      var token = body.access_token;
      APIOptions = {
        url: `https://api.spotify.com/v1/search?q=${encodeURI(
          artistName
        )}&type=artist&offset=0&limit=${options.limit || 1}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };
    });
    return await request.get(APIOptions).then((x) => x.artists.items);
  }

  async getTrack(trackID) {
    let APIOptions;
    await request.post(this.authOptions, async (error, response, body) => {
      if (error) return console.error(error);
      var token = body.access_token;
      APIOptions = {
        url: `https://api.spotify.com/v1/tracks/${trackID}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };
    });
    return await request.get(APIOptions);
  }

  async getPlaylist(playListID) {
    let APIOptions;
    await request.post(this.authOptions, async (error, response, body) => {
      if (error) return console.error(error);
      var token = body.access_token;
      APIOptions = {
        url: `https://api.spotify.com/v1/playlists/${playListID}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };
    });
    return await request.get(APIOptions);
  }

  async getAlbum(albumID) {
    let APIOptions;
    await request.post(this.authOptions, async (error, response, body) => {
      if (error) return console.error(error);
      var token = body.access_token;
      APIOptions = {
        url: `https://api.spotify.com/v1/albums/${albumID}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };
    });
    return await request.get(APIOptions);
  }

  async getArtist(artistID) {
    let APIOptions;
    await request.post(this.authOptions, async (error, response, body) => {
      if (error) return console.error(error);
      var token = body.access_token;
      APIOptions = {
        url: `https://api.spotify.com/v1/artists/${artistID}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };
    });
    return await request.get(APIOptions);
  }

  async getUser(userID) {
    let APIOptions;
    await request.post(this.authOptions, async (error, response, body) => {
      if (error) return console.error(error);
      var token = body.access_token;
      APIOptions = {
        url: `https://api.spotify.com/v1/users/${userID}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };
    });
    return await request.get(APIOptions);
  }
};