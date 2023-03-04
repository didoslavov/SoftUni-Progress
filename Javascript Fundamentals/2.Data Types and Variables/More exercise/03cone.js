function coneCalculator(radius, height) {
  const volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
  const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
  const surfaceArea = Math.PI * radius * (radius + slantHeight);

  console.log('volume = ' + volume.toFixed(4));
  console.log('area = ' + surfaceArea.toFixed(4));
}

coneCalculator(3.3, 7.8);
