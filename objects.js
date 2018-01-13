let playlist = {Angra: 'Travellers of Time'}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}

console.log(updatePlaylist(playlist, 'Rob', 'Best Song'))
