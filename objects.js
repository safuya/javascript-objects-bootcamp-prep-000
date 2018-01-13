var playlist = {Angra: 'Travellers of Time'}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}
