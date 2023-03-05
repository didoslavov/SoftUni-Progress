function songs(playlist) {
  class Song {
    constructor(typeList, songName, songDuration) {
      this.type = typeList;
      this.name = songName;
      this.duration = songDuration;
    }
  }

  const songsCount = playlist.shift();
  let printType = playlist.splice(playlist.length - 1, 1)[0];

  for (const songInfo of playlist) {
    const [typeList, songName, songDuration] = songInfo.split('_');
    const song = new Song(typeList, songName, songDuration);

    if (printType === 'all') {
      console.log(song.name);
    } else {
      if (song.type === printType) {
        console.log(song.name);
      }
    }
  }
}

songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
