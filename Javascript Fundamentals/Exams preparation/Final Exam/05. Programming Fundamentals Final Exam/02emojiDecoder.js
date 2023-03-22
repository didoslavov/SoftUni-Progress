function emojiDecoder(input) {
  const thresholdPattern = /[\d+]/gm;
  let threshold = 1;
  let thresholdMatch;

  while ((thresholdMatch = thresholdPattern.exec(input))) {
    threshold *= Number(thresholdMatch[0]);
  }

  const emojiPattern = /(:{2}|\*{2})([A-Z][a-z]{2,})(\1)/gm;
  const emojies = [];

  let validEmojies;

  while ((validEmojies = emojiPattern.exec(input))) {
    emojies.push(validEmojies[0]);
  }

  console.log(`Cool threshold: ${threshold}`);
  console.log(`${emojies.length} emojis found in the text. The cool ones are:`);

  emojies.filter((emoji) => isCoolEmoji(emoji)).forEach(e => {
    console.log(e);
  });
    

  function isCoolEmoji(emoji) {
    const coolness = emoji.split('').reduce((acc, ch) => {
      if (ch !== ':' && ch !== '*') {
        acc += ch.charCodeAt();
      }
      return acc;
    }, 0);

    if (coolness > threshold) {
        return true;
    }

    return false;
  }
}

emojiDecoder(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
