let playlist = {Angra: 'Travellers of Time'}

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {[artistName]: songTitle})
}
