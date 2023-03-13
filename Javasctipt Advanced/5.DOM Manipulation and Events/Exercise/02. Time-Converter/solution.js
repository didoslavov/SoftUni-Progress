function attachEventsListeners() {
    //select input fields
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    Array.from(document.querySelectorAll('[type="button"]')).forEach(b => b.addEventListener('click', onClick));

    const buttons = {
        daysBtn: (i) => Number(i) * 24 * 60 * 60,
        hoursBtn: (i) => Number(i) * 60 * 60,
        minutesBtn: (i) => Number(i) * 60,
        secondsBtn: (i) => Number(i),
    }


    function onClick(e) {
        const input = e.target.previousElementSibling.value;
        const seconds = buttons[e.target.id](input);

        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;

        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = minutes;
        secondsElement.value = seconds;
    }
}