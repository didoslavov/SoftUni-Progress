function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', onMouseMove);

    function onMouseMove(e) {
        const percentage = Math.floor(e.offsetX / 300 * 100);
        resultElement.textContent = percentage + '%';
    }
}