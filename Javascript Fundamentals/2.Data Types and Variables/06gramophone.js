function gramophone(bandName, albumName, songName) {
  const plateCicle = 2.5;
  let songDuration = (albumName.length * bandName.length * songName.length) / 2;
  let plateRotations = songDuration / plateCicle;

  console.log(`The plate was rotated ${Math.ceil(plateRotations)} times.`);
}

gramophone("Rammstein", "Sehnsucht", "Engel");
