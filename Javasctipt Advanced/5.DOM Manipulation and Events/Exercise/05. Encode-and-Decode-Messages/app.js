function encodeAndDecodeMessages() {
  const buttons = Array.from(document.querySelectorAll('button'));
  const decodedTextArea = buttons[1].previousElementSibling;

  buttons.forEach((b) => b.addEventListener('click', onClick));

  function onClick(e) {
    if (e.target.textContent === 'Encode and send it') {
      const text = e.target.previousElementSibling;
      let encryptedText = '';

      for (let char of text.value) {
        encryptedText += String.fromCharCode(char.charCodeAt() + 1);
      }

      decodedTextArea.textContent = encryptedText;
      text.value = '';
    } else if (e.target.textContent === 'Decode and read it') {
      const text = e.target.previousElementSibling;
      let decriptedText = '';

      for (const char of text.value) {
        decriptedText += String.fromCharCode(char.charCodeAt() - 1);
      }

      decodedTextArea.textContent = decriptedText;
    }
  }
}
