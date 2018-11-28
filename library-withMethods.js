var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {
    var x = Object.values(this.playlists);
    for (playlist in x) {
      console.log(x[playlist].id + ": " + x[playlist].name + " - " + x[playlist].tracks.length + " tracks");
    }
  },
  printTracks: function () {
    var x = Object.values(this.tracks);
    for (track in x) {
      console.log(x[track].id + ": " + x[track].name + " by " + x[track].artist + " (" + x[track].album + ")")
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
   var playlistInfo = this.playlists[playlistId];
   for (i in playlistInfo.tracks){
     if (trackId === playlistInfo.tracks[i]){
       console.log("duplicate track");
       break;
     }
     else{
       playlistInfo.tracks.push(trackId);
       break;
     }
   }
  },
  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
  var newId = uid();
  this.tracks[newId] = {
    "id": newId,
    "name": name,
    "artist": artist,
    "album": album
    }
  },
  addPlaylist: function (name) {
  var newId = uid();
  this.playlists[newId] = {
    "id": newId,
    "name": name,
    "tracks": []
    }
  }
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}