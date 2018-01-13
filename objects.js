let playlist = {Angra: 'Travellers of Time'}

console.log(playlist)

function updatePlaylist(obj, artistName, songTitle) {
  obj[artistName] = songTitle
  return obj
}

playlist = updatePlaylist(playlist, 'Palov', "What's that")
console.log(playlist)
