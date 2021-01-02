# Welcome to spotify-info.js

**spotify-info.js** module was written for get track/playlist/album/artist infos by their name or thir ID.

You must get a **Spotify Client ID** and **Client Secret** to use this module!

## How i get Spotify Client ID/Secret?

* Firstly, [click here](https://developer.spotify.com/dashboard/) to go to the Spotify Dashboard

* Then, login to the Dashboard and create an app.

* Finally copy this app's Client ID and Client Secret

* Tadaa 🎉🎉. You are ready for use this module.

## Usage

```js
const { Spotify } = require("spotify-info.js");
const infos = new Spotify({
clientID: "Your Client ID",
clientSecret: "Your Client Secret",
});

// Get track infos from track name:
const trackInfoByName = await infos.searchTrack("Track Name");
console.log(trackInfoByName);

// Get playlist infos from playlist name:
const playlistInfoByName = await infos.searchPlaylist("Playlist Name");
console.log(playlistInfoByName);

// Get album infos from album name:
const albumInfoByName = await infos.searchAlbum("Album Name");
console.log(albumInfoByName);

// Get artist infos from artist name:
const artistInfoByName = await infos.searchArtist("Artist Name");
console.log(artistInfoByName);

// Get track infos from track ID:
const trackInfoByID = await infos.getTrack("Track ID");
console.log(trackInfoByID);

// Get playlist infos from playlist ID:
const playlistInfoByID = await infos.getPlaylist("Playlist ID");
console.log(playlistInfoByID);

// Get album infos from album ID:
const albumInfosFromID = await infos.getAlbum("Album ID");
console.log(albumInfosFromID);

// Get artist infos from artist ID:
const artistInfosFromID = await infos.getArtist("Artist ID");
console.log(artistInfosFromID);

// Get user infos from user ID:
const userInfosFromID = await infos.getUser("User ID");
console.log(userInfosFromID);
```

## Changelog

### 1.0.0
* Module published.