# Welcome to spotify-info.js

**spotify-info.js** module was written for get track/playlist/album/artist infos by their name, their ID or their URL.

You must get a **Spotify Client ID** and **Spotify Client Secret** to use this module!

## How i get Spotify Client ID/Secret?

* Firstly, [click here](https://developer.spotify.com/dashboard/) to go to the Spotify Dashboard

* Then, login to the Dashboard and create an app.

* Finally copy this app's Client ID and Client Secret

* Tadaa 🎉🎉. You are ready for use this module.

## Usage

```js
const { Spotify } = require("spotify-info.js");
const infos = new Spotify({
clientID: "Your Spotify Client ID",
clientSecret: "Your Spotify Client Secret",
});

// Get track infos by track name:
const trackInfoByName = await infos.searchTrack("Track Name");
console.log(trackInfoByName);

// Get playlist infos by playlist name:
const playlistInfoByName = await infos.searchPlaylist("Playlist Name");
console.log(playlistInfoByName);

// Get album infos by album name:
const albumInfoByName = await infos.searchAlbum("Album Name");
console.log(albumInfoByName);

// Get artist infos by artist name:
const artistInfoByName = await infos.searchArtist("Artist Name");
console.log(artistInfoByName);

// Get track infos by track ID:
const trackInfoByID = await infos.getTrack("Track ID");
console.log(trackInfoByID);

// Get playlist infos by playlist ID:
const playlistInfoByID = await infos.getPlaylist("Playlist ID");
console.log(playlistInfoByID);

// Get album infos by album ID:
const albumInfoByID = await infos.getAlbum("Album ID");
console.log(albumInfoByID);

// Get artist infos by artist ID:
const artistInfoByID = await infos.getArtist("Artist ID");
console.log(artistInfoByID);

// Get user infos by user ID:
const userInfoByID = await infos.getUser("User ID");
console.log(userInfoByID);

// Get track infos by track URL:
const trackInfoByURL = await infos.getTrackByURL("Track URL");
console.log(trackInfoByURL);

// Get playlist infos by playlist URL:
const playlistInfoByURL = await infos.getPlaylistByURL("Playlist URL");
console.log(playlistInfoByURL);

// Get album infos by album URL:
const albumInfoByURL = await infos.getAlbumByURL("Album URL");
console.log(albumInfoByURL);

// Get user infos by user URL:
const userInfoByURL = await infos.getUserByURL("User URL");
console.log(userInfoByURL);
```

## Playing a track/playlist/album with link (for discord.js v12 users

**NOTE:** You have to get a YouTube API Key to use this methods!

**NOTE 2:** This methods running with only discord.js and not supporting discord.js v11!

```js
const { Spotify } = require("spotify-info.js");
const infos = new Spotify({
clientID: "Your Spotify Client ID",
clientSecret: "Your Spotify Client Secret",
});

// Play track with URL:
channel.join().then(connection => {
const playTrack = await infos.playTrack("Track URL",{
apiKey: "Your YouTube API Key",
connection
});
});

// Play playlist with URL:
channel.join().then(connection => {
const playList = await infos.playList("Playlist URL",{
apiKey: "Your YouTube API Key",
connection
});
});

// Play album with URL:
channel.join().then(connection => {
const playAlbum = await infos.playAlbum("Album URL",{
apiKey: "Your YouTube API Key",
connection
});
});
```

## Changelog

### 1.0.4
* Fixed a bug 🐞.

### 1.0.3
* Added playTrack, playList and playAlbum for discord.js v12 users.

### 1.0.2
* Updated README.md.

### 1.0.1
* Added getTrackByURL, getPlaylistByURL, getAlbumByURL and getUserByURL.

### 1.0.0
* Module published.